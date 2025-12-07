const PressureCleaningIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M12 20H28C30 20 32 22 32 24V28"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
        />
        <path
            d="M32 28L32 38"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
        />
        <path
            d="M32 38L44 50"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
        />
        <path
            d="M44 50L52 42"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
        />
        <circle
            cx="32"
            cy="28"
            r="4"
            stroke="currentColor"
            strokeWidth="2.5"
        />
        <path
            d="M50 44L54 48M54 48L58 44M54 48L58 52"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        />
        <path
            d="M52 38L56 34"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        />
        <path
            d="M56 46L60 42"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        />
        <rect
            x="8"
            y="16"
            width="8"
            height="8"
            rx="1"
            stroke="currentColor"
            strokeWidth="2.5"
        />
    </svg>
);

export default PressureCleaningIcon;
