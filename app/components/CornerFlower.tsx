type Props = {
    position: "tl" | "tr" | "bl" | "br";
};

function FullFlower() {
    return (
        <>
            {/* stems */}
            <path
                d="M15 210 Q 30 170 50 140 Q 65 115 80 85 Q 90 65 95 40"
                stroke="#6b2737"
                strokeWidth="2.2"
                fill="none"
                strokeLinecap="round"
            />
            <path
                d="M30 200 Q 45 170 65 150"
                stroke="#8b3a4a"
                strokeWidth="1.2"
                fill="none"
                strokeLinecap="round"
                opacity="0.6"
            />
            {/* leaves */}
            <path
                d="M50 140 Q 25 128 18 110 Q 38 115 50 140Z"
                fill="#6b2737"
                opacity="0.55"
            />
            <path
                d="M68 108 Q 92 94 100 78 Q 80 88 68 108Z"
                fill="#8b3a4a"
                opacity="0.5"
            />
            <path
                d="M35 165 Q 12 156 8 140 Q 26 146 35 165Z"
                fill="#6b2737"
                opacity="0.4"
            />
            {/* bud */}
            <ellipse
                cx="68"
                cy="148"
                rx="8"
                ry="10"
                fill="#f5ede0"
                stroke="#6b2737"
                strokeWidth="1.5"
                transform="rotate(-20 68 148)"
            />
            <path
                d="M61 145 Q 68 136 75 145 Q 68 154 61 145Z"
                fill="#c9a96e"
                opacity="0.7"
            />
            {/* main rose */}
            <ellipse
                cx="52"
                cy="72"
                rx="26"
                ry="15"
                fill="#fdf8f2"
                stroke="#6b2737"
                strokeWidth="1.4"
                transform="rotate(-45 52 72)"
            />
            <ellipse
                cx="30"
                cy="60"
                rx="24"
                ry="13"
                fill="#f5ede0"
                stroke="#6b2737"
                strokeWidth="1.2"
                transform="rotate(-65 30 60)"
            />
            <ellipse
                cx="62"
                cy="52"
                rx="23"
                ry="13"
                fill="#fdf8f2"
                stroke="#6b2737"
                strokeWidth="1.2"
                transform="rotate(-20 62 52)"
            />
            <ellipse
                cx="36"
                cy="42"
                rx="22"
                ry="13"
                fill="#e8d8c4"
                stroke="#6b2737"
                strokeWidth="1.2"
                transform="rotate(-80 36 42)"
            />
            <ellipse
                cx="68"
                cy="68"
                rx="20"
                ry="11"
                fill="#f5ede0"
                stroke="#6b2737"
                strokeWidth="1"
                transform="rotate(10 68 68)"
            />
            <ellipse
                cx="22"
                cy="48"
                rx="18"
                ry="11"
                fill="#fdf8f2"
                stroke="#6b2737"
                strokeWidth="1"
                transform="rotate(-100 22 48)"
            />
            {/* inner petals */}
            <ellipse
                cx="46"
                cy="60"
                rx="14"
                ry="9"
                fill="#e8d8c4"
                stroke="#6b2737"
                strokeWidth="1"
                transform="rotate(-40 46 60)"
            />
            <ellipse
                cx="40"
                cy="55"
                rx="12"
                ry="8"
                fill="#f5ede0"
                stroke="#6b2737"
                strokeWidth="0.8"
                transform="rotate(-55 40 55)"
            />
            {/* center */}
            <ellipse
                cx="44"
                cy="58"
                rx="9"
                ry="7"
                fill="#6b2737"
                opacity="0.88"
                transform="rotate(-45 44 58)"
            />
            <ellipse
                cx="44"
                cy="58"
                rx="4.5"
                ry="3.5"
                fill="#c9a96e"
                opacity="0.92"
                transform="rotate(-45 44 58)"
            />
            {/* small secondary rose */}
            <ellipse
                cx="12"
                cy="28"
                rx="14"
                ry="9"
                fill="#f5ede0"
                stroke="#6b2737"
                strokeWidth="1"
                transform="rotate(-25 12 28)"
            />
            <ellipse
                cx="24"
                cy="16"
                rx="13"
                ry="8"
                fill="#e8d8c4"
                stroke="#6b2737"
                strokeWidth="0.9"
                transform="rotate(35 24 16)"
            />
            <ellipse
                cx="6"
                cy="16"
                rx="12"
                ry="8"
                fill="#fdf8f2"
                stroke="#6b2737"
                strokeWidth="0.9"
                transform="rotate(-70 6 16)"
            />
            <ellipse
                cx="18"
                cy="26"
                rx="10"
                ry="7"
                fill="#f5ede0"
                stroke="#6b2737"
                strokeWidth="0.8"
                transform="rotate(-10 18 26)"
            />
            <circle cx="15" cy="22" r="5.5" fill="#6b2737" opacity="0.78" />
            <circle cx="15" cy="22" r="2.5" fill="#c9a96e" opacity="0.92" />
            {/* tiny blossom */}
            <circle
                cx="85"
                cy="38"
                r="5"
                fill="#f5ede0"
                stroke="#6b2737"
                strokeWidth="1"
            />
            <circle
                cx="80"
                cy="32"
                r="4"
                fill="#e8d8c4"
                stroke="#6b2737"
                strokeWidth="0.8"
            />
            <circle
                cx="92"
                cy="30"
                r="3.5"
                fill="#fdf8f2"
                stroke="#c9a96e"
                strokeWidth="0.8"
            />
            <circle cx="86" cy="34" r="3" fill="#6b2737" opacity="0.7" />
        </>
    );
}

function SimpleFlower() {
    return (
        <>
            <path
                d="M15 210 Q 30 170 50 140 Q 65 115 80 85 Q 90 65 95 40"
                stroke="#6b2737"
                strokeWidth="2.2"
                fill="none"
                strokeLinecap="round"
            />
            <path
                d="M50 140 Q 25 128 18 110 Q 38 115 50 140Z"
                fill="#6b2737"
                opacity="0.5"
            />
            <path
                d="M68 108 Q 92 94 100 78 Q 80 88 68 108Z"
                fill="#8b3a4a"
                opacity="0.45"
            />
            <ellipse
                cx="52"
                cy="72"
                rx="26"
                ry="15"
                fill="#fdf8f2"
                stroke="#6b2737"
                strokeWidth="1.4"
                transform="rotate(-45 52 72)"
            />
            <ellipse
                cx="30"
                cy="60"
                rx="24"
                ry="13"
                fill="#f5ede0"
                stroke="#6b2737"
                strokeWidth="1.2"
                transform="rotate(-65 30 60)"
            />
            <ellipse
                cx="62"
                cy="52"
                rx="23"
                ry="13"
                fill="#fdf8f2"
                stroke="#6b2737"
                strokeWidth="1.2"
                transform="rotate(-20 62 52)"
            />
            <ellipse
                cx="36"
                cy="42"
                rx="22"
                ry="13"
                fill="#e8d8c4"
                stroke="#6b2737"
                strokeWidth="1.2"
                transform="rotate(-80 36 42)"
            />
            <ellipse
                cx="68"
                cy="68"
                rx="20"
                ry="11"
                fill="#f5ede0"
                stroke="#6b2737"
                strokeWidth="1"
                transform="rotate(10 68 68)"
            />
            <ellipse
                cx="44"
                cy="58"
                rx="9"
                ry="7"
                fill="#6b2737"
                opacity="0.85"
                transform="rotate(-45 44 58)"
            />
            <ellipse
                cx="44"
                cy="58"
                rx="4.5"
                ry="3.5"
                fill="#c9a96e"
                opacity="0.9"
                transform="rotate(-45 44 58)"
            />
        </>
    );
}

export default function CornerFlower({ position }: Props) {
    const isDetailed = position === "tl" || position === "tr";

    return (
        <svg
            className={`corner-flower ${position}`}
            viewBox="0 0 220 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {isDetailed ? <FullFlower /> : <SimpleFlower />}
        </svg>
    );
}
