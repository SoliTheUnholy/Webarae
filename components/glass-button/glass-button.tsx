/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client";
/* eslint-disable @typescript-eslint/no-empty-object-type */
import * as THREE from "three";
import { useRef, useState, useEffect, memo, ReactNode } from "react";
import {
    Canvas,
    createPortal,
    useFrame,
    useThree,
    ThreeElements,
} from "@react-three/fiber";
import {
    useFBO,
    useGLTF,
    Preload,
    MeshTransmissionMaterial,
    Text,
} from "@react-three/drei";
import { easing } from "maath";
import html2canvas from "html2canvas";

type Mode = "lens" | "bar" | "cube";

interface NavItem {
    label: string;
    link: string;
}

type ModeProps = Record<string, unknown>;

interface FluidGlassProps {
    domElement?: HTMLElement;
    mode?: Mode;
    lensProps?: ModeProps;
    barProps?: ModeProps;
    cubeProps?: ModeProps;
}

export default function FluidGlass({
    domElement,
    mode = "lens",
    lensProps = {},
    barProps = {},
    cubeProps = {},
}: FluidGlassProps) {
    const Wrapper = mode === "bar" ? Bar : mode === "cube" ? Cube : Lens;
    const rawOverrides =
        mode === "bar" ? barProps : mode === "cube" ? cubeProps : lensProps;

    const {
        navItems = [
            { label: "Home", link: "" },
            { label: "About", link: "" },
            { label: "Contact", link: "" },
        ],
        ...modeProps
    } = rawOverrides;

    return (
        <Canvas camera={{ position: [0, 0, 20], fov: 15 }} gl={{ alpha: true }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            {mode === "bar" && <NavItems items={navItems as NavItem[]} />}
            <Wrapper domElement={domElement} modeProps={modeProps}>
                <Preload />
            </Wrapper>

            <Preload />
        </Canvas>
    );
}

type MeshProps = ThreeElements["mesh"];

interface ModeWrapperProps extends MeshProps {
    domElement?: HTMLElement;
    children?: ReactNode;
    glb: string;
    geometryKey: string;
    lockToBottom?: boolean;
    modeProps?: ModeProps;
}

interface ZoomMaterial extends THREE.Material {
    zoom: number;
}

interface ZoomMesh extends THREE.Mesh<THREE.BufferGeometry, ZoomMaterial> {}

type ZoomGroup = THREE.Group & { children: ZoomMesh[] };

const ModeWrapper = memo(function ModeWrapper({
    domElement,
    children,
    glb,
    geometryKey,
    lockToBottom = false,
    modeProps = {},
    ...props
}: ModeWrapperProps) {
    const ref = useRef<THREE.Mesh>(null!);
    const { nodes } = useGLTF(glb);
    const buffer = useFBO();
    const { viewport: vp } = useThree();
    const [scene] = useState<THREE.Scene>(() => new THREE.Scene());
    const geoWidthRef = useRef<number>(1);
    const [domTexture] = useState(() => new THREE.Texture());

    useEffect(() => {
        if (!domElement) return; // wait for domRef.current to exist

        const updateTexture = async () => {
            const canvas = await html2canvas(domElement, {
                backgroundColor: null,
                useCORS: true,
            });
            domTexture.image = canvas;
            domTexture.needsUpdate = true;
        };

        updateTexture();
        const interval = setInterval(updateTexture, 200);
        return () => clearInterval(interval);
    }, [domElement, domTexture]);

    useEffect(() => {
        const geo = (nodes[geometryKey] as THREE.Mesh)?.geometry;
        geo.computeBoundingBox();
        geoWidthRef.current =
            geo.boundingBox!.max.x - geo.boundingBox!.min.x || 1;
    }, [nodes, geometryKey]);

    useFrame((state, delta) => {
        const { gl, viewport, camera } = state;
        const v = viewport.getCurrentViewport(camera, [0, 0, 15]);

        const destX = 0;
        const destY = lockToBottom ? -v.height / 2 + 0.2 : 0;
        easing.damp3(ref.current.position, [destX, destY, 15], 0.15, delta);

        if ((modeProps as { scale?: number }).scale == null) {
            const maxWorld = v.width * 0.9;
            const desired = maxWorld / geoWidthRef.current;
            ref.current.scale.setScalar(Math.min(0.15, desired));
        }

        gl.setRenderTarget(buffer);
        gl.render(scene, camera);
        gl.setRenderTarget(null);
    });

    const {
        scale,
        ior,
        thickness,
        anisotropy,
        chromaticAberration,
        ...extraMat
    } = modeProps as {
        scale?: number;
        ior?: number;
        thickness?: number;
        anisotropy?: number;
        chromaticAberration?: number;
        [key: string]: unknown;
    };

    return (
        <>
            {createPortal(children, scene)}
            <mesh scale={[vp.width, vp.height, 1]}>
                <planeGeometry />
                <meshBasicMaterial map={domTexture} transparent />
            </mesh>
            <mesh
                ref={ref}
                scale={scale ?? 0.15}
                rotation-x={Math.PI / 2}
                geometry={(nodes[geometryKey] as THREE.Mesh)?.geometry}
                {...props}
            >
                <MeshTransmissionMaterial
                    buffer={buffer.texture}
                    ior={ior ?? 1.15}
                    thickness={thickness ?? 5}
                    anisotropy={anisotropy ?? 0.01}
                    chromaticAberration={chromaticAberration ?? 0.1}
                    {...(typeof extraMat === "object" && extraMat !== null
                        ? extraMat
                        : {})}
                />
            </mesh>
        </>
    );
});

function Lens({
    modeProps,
    domElement,
    ...p
}: { modeProps?: ModeProps; domElement?: HTMLElement } & MeshProps) {
    return (
        <ModeWrapper
            domElement={domElement}
            glb="/assets/3d/lens.glb"
            geometryKey="Cylinder"
            modeProps={modeProps}
            {...p}
        />
    );
}

function Cube({
    modeProps,
    domElement,
    ...p
}: { modeProps?: ModeProps; domElement?: HTMLElement } & MeshProps) {
    return (
        <ModeWrapper
            domElement={domElement}
            glb="/assets/3d/cube.glb"
            geometryKey="Cube"
            modeProps={modeProps}
            {...p}
        />
    );
}

function Bar({
    modeProps,
    domElement,
    ...p
}: { modeProps?: ModeProps; domElement?: HTMLElement } & MeshProps) {
    const defaultMat = {
        transmission: 1,
        roughness: 0,
        thickness: 10,
        ior: 1.15,
        color: "#ffffff",
        attenuationColor: "#ffffff",
        attenuationDistance: 0.25,
    };

    return (
        <ModeWrapper
            domElement={domElement}
            glb="/assets/3d/bar.glb"
            geometryKey="Cube"
            lockToBottom
            modeProps={{ ...defaultMat, ...modeProps }}
            {...p}
        />
    );
}

function NavItems({ items }: { items: NavItem[] }) {
    const group = useRef<THREE.Group>(null!);
    const { viewport, camera } = useThree();

    const DEVICE = {
        mobile: { max: 639, spacing: 0.2, fontSize: 0.035 },
        tablet: { max: 1023, spacing: 0.24, fontSize: 0.045 },
        desktop: { max: Infinity, spacing: 0.3, fontSize: 0.045 },
    };
    const getDevice = () => {
        const w = window.innerWidth;
        return w <= DEVICE.mobile.max
            ? "mobile"
            : w <= DEVICE.tablet.max
              ? "tablet"
              : "desktop";
    };

    const [device, setDevice] = useState<keyof typeof DEVICE>(getDevice());

    useEffect(() => {
        const onResize = () => setDevice(getDevice());
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const { spacing, fontSize } = DEVICE[device];

    useFrame(() => {
        if (!group.current) return;
        const v = viewport.getCurrentViewport(camera, [0, 0, 15]);
        group.current.position.set(0, -v.height / 2 + 0.2, 15.1);
        group.current.children.forEach((child, i) => {
            child.position.x = (i - (items.length - 1) / 2) * spacing;
        });
    });

    const handleNavigate = (link: string) => {
        if (!link) return;
        link.startsWith("#")
            ? (window.location.hash = link)
            : (window.location.href = link);
    };

    return (
        <group ref={group} renderOrder={10}>
            {items.map(({ label, link }) => (
                <Text
                    key={label}
                    fontSize={fontSize}
                    color="white"
                    anchorX="center"
                    anchorY="middle"
                    outlineWidth={0}
                    outlineBlur="20%"
                    outlineColor="#000"
                    outlineOpacity={0.5}
                    renderOrder={10}
                    onClick={(e) => {
                        e.stopPropagation();
                        handleNavigate(link);
                    }}
                    onPointerOver={() =>
                        (document.body.style.cursor = "pointer")
                    }
                    onPointerOut={() => (document.body.style.cursor = "auto")}
                >
                    {label}
                </Text>
            ))}
        </group>
    );
}
