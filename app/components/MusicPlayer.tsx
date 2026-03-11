"use client";

import { useState, useRef } from "react";

export default function MusicPlayer() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showOverlay, setShowOverlay] = useState(true);

    const startMusic = () => {
        setShowOverlay(false);
        if (!audioRef.current) return;
        const promise = audioRef.current.play();
        if (promise !== undefined) {
            promise.then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
        } else {
            setIsPlaying(true);
        }
    };

    const toggleMusic = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            const promise = audioRef.current.play();
            if (promise !== undefined) {
                promise.then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
            } else {
                setIsPlaying(true);
            }
        }
    };

    return (
        <>
            <audio id="bgMusic" ref={audioRef} loop preload="auto">
                <source src="https://archive.org/download/fantasymphony-one-concert-to-rule-them-all/01.%20Harry%27s%20Wondrous%20World%20%28From%20Harry%20Potter%29.mp3" type="audio/mpeg" />
            </audio>

            {showOverlay && (
                <div className="music-overlay" onClick={startMusic}>
                    <div className="music-overlay-content">
                        <p className="music-overlay-names">Amr &amp; Hend</p>
                        <div className="music-overlay-divider" />
                        <p className="music-overlay-sub">You are invited to celebrate our wedding</p>
                        <button className="music-overlay-btn">
                            Open Invitation
                        </button>
                    </div>
                </div>
            )}

            <button
                className="music-btn"
                id="musicToggle"
                title="Click to toggle music"
                onClick={toggleMusic}
            >
                {isPlaying ? "🔊" : "🔇"}
            </button>
        </>
    );
}
