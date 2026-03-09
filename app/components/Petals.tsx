"use client";

import { useEffect, useRef } from "react";

const shapes = [
    // rose petal
    (c: string, o: string) =>
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 26"><path d="M9 2 Q17 7 15 17 Q9 24 3 17 Q1 7 9 2Z" fill="${c}" opacity="${o}"/></svg>`,
    // round petal
    (c: string, o: string) =>
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 22"><ellipse cx="8" cy="11" rx="7" ry="10" fill="${c}" opacity="${o}" transform="rotate(12 8 11)"/></svg>`,
    // leaf
    (c: string, o: string) =>
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 20"><path d="M7 1 Q14 7 12 15 Q7 20 2 15 Q0 7 7 1Z" fill="${c}" opacity="${o}"/></svg>`,
];

const cols = [
    "#6b2737",
    "#8b3a4a",
    "#c9b49a",
    "#e8c8a2",
    "#c9a96e",
    "#f5ede0",
    "#4a1825",
];

export default function Petals() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        for (let i = 0; i < 26; i++) {
            const d = document.createElement("div");
            d.className = "petal";
            const c = cols[Math.floor(Math.random() * cols.length)];
            const o = (0.45 + Math.random() * 0.45).toFixed(2);
            const fn = shapes[Math.floor(Math.random() * shapes.length)];
            const sz = 9 + Math.random() * 13;
            d.innerHTML = fn(c, o);
            d.style.cssText = `left:${Math.random() * 100}%;width:${sz}px;height:${sz * 1.5
                }px;animation-duration:${(7 + Math.random() * 9).toFixed(1)}s;animation-delay:${(
                    Math.random() * 15
                ).toFixed(1)}s;`;
            container.appendChild(d);
        }

        return () => {
            container.innerHTML = "";
        };
    }, []);

    return <div className="petal-container" ref={containerRef} />;
}
