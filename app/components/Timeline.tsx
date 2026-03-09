const events = [
    {
        time: "8:00 PM",
        event: "Guests Arrive & Welcome",
        desc: "Be greeted with warmth, flowers, and a glass of something special",
        side: "li" as const,
    },
    {
        time: "8:30 PM",
        event: "The Wedding Ceremony",
        desc: "Amr & Hend exchange vows surrounded by those they love most",
        side: "ri" as const,
    },
    {
        time: "9:15 PM",
        event: "Zaffa & Grand Entrance",
        desc: "A jubilant procession to welcome the newlyweds into the celebration hall",
        side: "li" as const,
    },
    {
        time: "9:30 PM",
        event: "Dinner & Celebration",
        desc: "A lavish dinner served as live music fills the air and joy fills every table",
        side: "ri" as const,
    },
    {
        time: "10:30 PM",
        event: "First Dance & Speeches",
        desc: "The couple\u2019s first dance as husband and wife, followed by heartfelt toasts",
        side: "li" as const,
    },
    {
        time: "11:00 PM",
        event: "Dancing & Festivities",
        desc: "The dance floor opens \u2014 let the night carry on until the stars say goodnight",
        side: "ri" as const,
    },
    {
        time: "1:00 AM",
        event: "Farewell & Sweet Send-off",
        desc: "Cake, favors, and a fond farewell to a night that will live forever in memory",
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
