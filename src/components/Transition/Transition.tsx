import { useEffect, useRef } from "react";
import { TransitionProps } from "./Transition.types";

export function Transition(props: TransitionProps) {
    const { children, className } = props
    const ref = useRef(null)

    return (
        <div ref={ref}>
            {children}
        </div>
    )
}