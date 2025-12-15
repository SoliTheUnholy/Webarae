import Antigravity from "@/components/Antigravity";

export default function Contact() {
    return (
        <>
            <div className="fixed h-screen w-screen">
                <Antigravity
                    count={1000}
                    magnetRadius={7}
                    ringRadius={7}
                    waveSpeed={0.6}
                    waveAmplitude={1}
                    particleSize={1}
                    lerpSpeed={0.05}
                    color={"#104e64"}
                    autoAnimate={true}
                    particleVariance={1}
                />
            </div>
            <div className="absolute"></div>
        </>
    );
}
