export default function Location() {
    return (
        <section className="section" id="location">
            <p className="section-tag">Venue</p>
            <h2 className="section-title">The Location</h2>
            <div className="location-box">
                <svg
                    width="46"
                    height="46"
                    viewBox="0 0 46 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ margin: "0 auto 18px", display: "block" }}
                >
                    <path
                        d="M23 4C16 4 10 10 10 17c0 10 13 25 13 25s13-15 13-25c0-7-6-13-13-13Z"
                        stroke="#6b2737"
                        strokeWidth="2"
                        fill="none"
                    />
                    <circle
                        cx="23"
                        cy="17"
                        r="5"
                        stroke="#c9a96e"
                        strokeWidth="2"
                        fill="none"
                    />
                </svg>
                <h3 className="location-name">Mountain Rose Hotel <br /> One view Hall</h3>
                <p className="location-address">
                    6th of October City, Giza
                    <br />
                    Cairo, Egypt
                    <br />
                    <em
                        style={{
                            color: "var(--gold)",
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: "1rem",
                        }}
                    >
                        A venue as beautiful as this love story
                    </em>
                </p>
                <a
                    className="map-btn"
                    href="https://maps.app.goo.gl/37A55F8o2jpkWVW9A"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Open in Google Maps
                </a>
            </div>
        </section>
    );
}
