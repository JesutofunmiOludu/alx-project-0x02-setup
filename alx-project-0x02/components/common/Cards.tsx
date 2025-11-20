import { CardProps } from "@/interfaces";   

export function Card({ title, content }: CardProps) {
    return (
        <div className="border rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">{title}</h2> 
            <p className="text-gray-700">{content}</p>
        </div>
    );
}