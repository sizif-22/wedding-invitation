import CornerFlower from "./CornerFlower";

export default function Hero() {
    return (
        <section className="hero">
            <CornerFlower position="tl" />
            <CornerFlower position="tr" />
            <CornerFlower position="bl" />
            <CornerFlower position="br" />

            <p className="hero-label">We joyfully invite you to celebrate</p>

            <h1 className="names">
                <span>Amr</span>
                <span className="amp">&amp;</span>
                <span>Hend</span>
            </h1>

            <div className="divider-ornament">
                <div className="dia" />
                <div
                    className="dia"
                    style={{
                        background: "var(--beige-dark)",
                        width: "5px",
                        height: "5px",
                    }}
                />
                <div className="dia" />
            </div>

            <p className="hero-date">SUNDAY · 5TH APRIL 2026</p>
            <p className="hero-sub">
                The Wedding Celebration &nbsp;·&nbsp; Doors Open at 6:30 PM
            </p>

            <div className="scroll-hint">
                <span>Scroll</span>
                <div className="scroll-line" />
            </div>
        </section>
    );
}
