const WindowWashingIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <rect
            x="14"
            y="10"
            width="36"
            height="44"
            rx="2"
            stroke="currentColor"
            strokeWidth="2.5"
        />
        <line
            x1="32"
            y1="10"
            x2="32"
            y2="54"
            stroke="currentColor"
            strokeWidth="2.5"
        />
        <line
            x1="14"
            y1="32"
            x2="50"
            y2="32"
            stroke="currentColor"
            strokeWidth="2.5"
        />
        <path
            d="M20 16L26 22M20 22L26 16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        />
        <path
            d="M38 38L44 44M38 44L44 38"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        />
        <circle cx="42" cy="18" r="3" stroke="currentColor" strokeWidth="2" />
        <circle cx="22" cy="46" r="3" stroke="currentColor" strokeWidth="2" />
    </svg>
);

export default WindowWashingIcon;
