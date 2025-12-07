const ChristmasDecorationIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M32 8L32 12"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
        />
        <polygon
            points="32,14 22,28 42,28"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinejoin="round"
            fill="none"
        />
        <polygon
            points="32,22 18,40 46,40"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinejoin="round"
            fill="none"
        />
        <polygon
            points="32,32 14,54 50,54"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinejoin="round"
            fill="none"
        />
        <rect
            x="28"
            y="54"
            width="8"
            height="6"
            stroke="currentColor"
            strokeWidth="2.5"
        />
        <circle cx="26" cy="36" r="2" fill="currentColor" />
        <circle cx="38" cy="44" r="2" fill="currentColor" />
        <circle cx="32" cy="26" r="2" fill="currentColor" />
        <path
            d="M30 10L32 8L34 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default ChristmasDecorationIcon;
