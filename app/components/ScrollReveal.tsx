"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
    useEffect(() => {
        if (!("IntersectionObserver" in window)) {
            document
                .querySelectorAll(".section,.band,.closing")
                .forEach((el) => el.classList.add("visible"));
            return;
        }

        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) e.target.classList.add("visible");
                });
            },
            { threshold: 0.08 }
        );

        document
            .querySelectorAll(".section,.band,.closing")
            .forEach((el) => obs.observe(el));

        return () => obs.disconnect();
    }, []);

    return null;
}
