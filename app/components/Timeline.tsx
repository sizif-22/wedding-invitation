const events = [
    {
        time: "6:30 PM",
        event: "Guests Arrive & Welcome",
        desc: "Be greeted with warmth, flowers, and a glass of something special",
        side: "li" as const,
    },
    {
        time: "7:15 PM",
        event: "Katb Elketab",
        desc: "Amr & Hend surrounded by those they love most with Maazon",
        side: "ri" as const,
    },
    {
        time: "8:00 PM",
        event: "First dance",
        desc: "A jubilant procession to welcome the newlyweds into the celebration hall",
        side: "li" as const,
    },
    {
        time: "8:30 PM",
        event: "The dance floor opens ",
        desc: "Celebration Dancing & Festivities",
        side: "ri" as const,
    },
    {
        time: "9:30 PM",
        event: "Dinner",
        desc: "Dinner served with live music fills the air and joy fills every table",
        side: "li" as const,
    },
    {
        time: "11:00 PM",
        event: "Zaffa (Abo Elhashim)",
        desc: "The dance floor opens \u2014 let the night carry on until the stars say goodnight",
        side: "ri" as const,
    },
    {
        time: "12:30 AM",
        event: "Cheers to the End",
        desc: "Thank you for making it unforgettable.",
        side: "li" as const,
    },
];

function TimelineCard({
    time,
    event,
    desc,
    className,
}: {
    time: string;
    event: string;
    desc: string;
    className: string;
}) {
    return (
        <div className={`tc ${className}`}>
            <p className="t-time">{time}</p>
            <p className="t-event">{event}</p>
            <p className="t-desc">{desc}</p>
        </div>
    );
}

export default function Timeline() {
    return (
        <section className="section" id="timeline" style={{ maxWidth: "980px" }}>
            <p className="section-tag">Schedule</p>
            <h2 className="section-title">Timeline of the Evening</h2>

            <div className="timeline">
                {events.map((ev) =>
                    ev.side === "li" ? (
                        <div className="timeline-item li" key={ev.time}>
                            <TimelineCard
                                time={ev.time}
                                event={ev.event}
                                desc={ev.desc}
                                className="tc-l"
                            />
                            <div className="dot-cell">
                                <div className="t-dot" />
                            </div>
                            <div className="tc-empty" />
                        </div>
                    ) : (
                        <div className="timeline-item ri" key={ev.time}>
                            <div className="tc-empty" />
                            <div className="dot-cell">
                                <div className="t-dot" />
                            </div>
                            <TimelineCard
                                time={ev.time}
                                event={ev.event}
                                desc={ev.desc}
                                className="tc-r"
                            />
                        </div>
                    )
                )}
            </div>
        </section>
    );
}
