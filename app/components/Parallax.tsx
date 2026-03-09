"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = {
    children: ReactNode;
    speed?: number; // -1 to 1, negative = slower, positive = faster
    className?: string;
};

export default function Parallax({
    children,
    speed = -0.15,
    className = "",
}: Props) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        let ticking = false;

        function onScroll() {
            if (!ticking) {
                requestAnimationFrame(() => {
                    if (!el) return;
                    const rect = el.getBoundingClientRect();
                    const windowH = window.innerHeight;
                    // Only apply when element is near the viewport
                    const centerY = rect.top + rect.height / 2;
                    const offset = (centerY - windowH / 2) * speed;
                    el.style.transform = `translate3d(0, ${offset}px, 0)`;
                    ticking = false;
                });
                ticking = true;
            }
        }

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();

        return () => window.removeEventListener("scroll", onScroll);
    }, [speed]);

    return (
        <div ref={ref} className={className} style={{ willChange: "transform" }}>
            {children}
        </div>
    );
}
