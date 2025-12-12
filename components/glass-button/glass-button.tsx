import { LiquidGlass } from '@/components/ui/glass';

export default function LiquidButton({children, onClick}: {children:React.ReactNode, onClick?: () => void}){
    return(
        <LiquidGlass className="rounded-full px-6 py-3 flex items-center justify-center" onClick={onClick}>
            {children}
        </LiquidGlass>
    
)
}