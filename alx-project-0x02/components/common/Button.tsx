import {type ButtonProps} from "../../interfaces";

export default function Button ({size, shape, label, onClick}: ButtonProps) {
    let sizeClass = "";
    if (size === "small") sizeClass = "px-2 py-1 text-sm";
    else if (size === "medium") sizeClass = "px-4 py-2 text-base";
    else if (size === "large") sizeClass = "px-6 py-3 text-lg";

    const shapeClass = shape === "rounded" ? "rounded-full" : "rounded-none";

    return (
        <button
            className={`${sizeClass} ${shapeClass} bg-blue-500 text-white hover:bg-blue-600`}
            onClick={onClick}
        >
            {label}
        </button>
    );
}