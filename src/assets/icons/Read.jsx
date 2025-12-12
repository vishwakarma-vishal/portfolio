export default function Readme(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.width ?? 22}
            height={props.height ?? 22}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...props}
        >
            {/* document outline with folded corner */}
            <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
            <path d="M14 3v6h6" />
            {/* simple lines inside to indicate text */}
            <path d="M8 13h8" />
            <path d="M8 16h8" />
            <path d="M8 10h4" />
        </svg>
    );
}
