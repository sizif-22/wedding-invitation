export default function Closing() {
    return (
        <div className="closing" id="closing">
            {/* closing rose accent */}
            <svg
                width="100"
                height="65"
                viewBox="0 0 130 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: "block", margin: "0 auto 22px", opacity: 0.55 }}
            >
                <ellipse
                    cx="32"
                    cy="42"
                    rx="20"
                    ry="11"
                    fill="#f5ede0"
                    stroke="#c9a96e"
                    strokeWidth="1.2"
                    transform="rotate(-38 32 42)"
                />
                <ellipse
                    cx="65"
                    cy="24"
                    rx="20"
                    ry="11"
                    fill="#e8d8c4"
                    stroke="#c9a96e"
                    strokeWidth="1.2"
                />
                <ellipse
                    cx="98"
                    cy="42"
                    rx="20"
                    ry="11"
                    fill="#f5ede0"
                    stroke="#c9a96e"
                    strokeWidth="1.2"
                    transform="rotate(38 98 42)"
                />
                <ellipse
                    cx="47"
                    cy="57"
                    rx="17"
                    ry="10"
                    fill="#fdf8f2"
                    stroke="#c9a96e"
                    strokeWidth="1"
                    transform="rotate(-18 47 57)"
                />
                <ellipse
                    cx="83"
                    cy="57"
                    rx="17"
                    ry="10"
                    fill="#e8d8c4"
                    stroke="#c9a96e"
                    strokeWidth="1"
                    transform="rotate(18 83 57)"
                />
                <circle cx="65" cy="45" r="10" fill="#6b2737" opacity="0.8" />
                <circle cx="65" cy="45" r="4.5" fill="#c9a96e" opacity="0.9" />
            </svg>

            <div className="gold-line" />
            <p className="closing-names">Amr &amp; Hend</p>
            <div className="gold-line" />
            <p className="closing-note">
                05 · 04 · 2026 &nbsp;·&nbsp; MOUNTAIN ROSE HOTEL · 6TH OCTOBER
            </p>
            <p
                style={{
                    color: "var(--beige-dark)",
                    fontSize: "0.8rem",
                    marginTop: "28px",
                    fontWeight: 200,
                    letterSpacing: "0.22em",
                    position: "relative",
                }}
            >
                With all our love — we cannot wait to celebrate with you
            </p>
        </div>
    );
}
