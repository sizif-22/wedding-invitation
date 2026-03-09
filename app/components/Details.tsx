function CalendarIcon() {
    return (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect
                x="4"
                y="8"
                width="40"
                height="36"
                rx="3"
                stroke="#6b2737"
                strokeWidth="2"
            />
            <path d="M4 18h40" stroke="#6b2737" strokeWidth="2" />
            <path
                d="M14 4v8M34 4v8"
                stroke="#c9a96e"
                strokeWidth="2.2"
                strokeLinecap="round"
            />
            <rect
                x="12"
                y="24"
                width="6"
                height="5"
                rx="1"
                stroke="#6b2737"
                strokeWidth="1.5"
                fill="none"
            />
            <rect
                x="21"
                y="24"
                width="6"
                height="5"
                rx="1"
                stroke="#6b2737"
                strokeWidth="1.5"
                fill="none"
            />
            <rect
                x="30"
                y="24"
                width="6"
                height="5"
                rx="1"
                stroke="#c9a96e"
                strokeWidth="1.5"
                fill="none"
            />
            <rect
                x="12"
                y="33"
                width="6"
                height="5"
                rx="1"
                stroke="#6b2737"
                strokeWidth="1.5"
                fill="none"
            />
            <rect
                x="21"
                y="33"
                width="6"
                height="5"
                rx="1"
                stroke="#6b2737"
                strokeWidth="1.5"
                fill="none"
            />
            <rect
                x="30"
                y="33"
                width="6"
                height="5"
                rx="1"
                stroke="#6b2737"
                strokeWidth="1.5"
                fill="none"
            />
        </svg>
    );
}

function ClockIcon() {
    return (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="19" stroke="#6b2737" strokeWidth="2" />
            <circle cx="24" cy="24" r="2.5" fill="#c9a96e" />
            <path
                d="M24 13v11l7 5"
                stroke="#6b2737"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M24 5v3M24 40v3M5 24h3M40 24h3"
                stroke="#c9a96e"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
        </svg>
    );
}

function RingIcon() {
    return (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="26" r="14" stroke="#6b2737" strokeWidth="2" />
            <circle cx="24" cy="26" r="8" stroke="#c9a96e" strokeWidth="1.2" />
            <path
                d="M18 12 L24 6 L30 12 L24 20Z"
                stroke="#6b2737"
                strokeWidth="1.5"
                fill="none"
                strokeLinejoin="round"
            />
            <path d="M18 12 L30 12" stroke="#c9a96e" strokeWidth="1" />
            <path
                d="M24 6 L18 12 M24 6 L30 12 M18 12 L24 20 M30 12 L24 20"
                stroke="#6b2737"
                strokeWidth="0.8"
                opacity="0.5"
            />
        </svg>
    );
}

const cards = [
    {
        icon: <CalendarIcon />,
        label: "Date",
        value: (
            <>
                Sunday
                <br />
                5th April 2026
            </>
        ),
        sub: "A day written in the stars",
    },
    {
        icon: <ClockIcon />,
        label: "Time",
        value: (
            <>
                Doors Open
                <br />
                8:00 PM
            </>
        ),
        sub: "The evening begins with welcome drinks",
    },
    {
        icon: <RingIcon />,
        label: "Dress Code",
        value: "Formal Attire",
        sub: "We welcome your finest formal attire",
    },
];

export default function Details() {
    return (
        <section className="section" id="details">
            <p className="section-tag">The Essentials</p>
            <h2 className="section-title">When &amp; Where</h2>
            <div className="cards-grid">
                {cards.map((card) => (
                    <div className="detail-card" key={card.label}>
                        <span className="icon-wrap">{card.icon}</span>
                        <p className="card-label">{card.label}</p>
                        <p className="card-value">{card.value}</p>
                        <p className="card-sub">{card.sub}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
