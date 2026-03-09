type Props = {
    quote?: string;
    attribution?: string;
    title?: string;
    subtitle?: string;
};

export default function QuoteBand({
    quote,
    attribution,
    title,
    subtitle,
}: Props) {
    return (
        <div className="band">
            <p className="band-text">
                {quote ? (
                    <>
                        &ldquo;{quote.split("always.")[0]}
                        <span className="always-word">always.</span>&rdquo;
                    </>
                ) : (
                    title
                )}
            </p>
            {(attribution || subtitle) && (
                <p className="band-sub">{attribution || subtitle}</p>
            )}
        </div>
    );
}
