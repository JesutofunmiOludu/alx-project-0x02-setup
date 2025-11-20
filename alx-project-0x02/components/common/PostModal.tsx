import { on } from "events";
import { title } from "process";
import { useState} from "react";

export default function PostModalProps() {
    onSubmit : (title: string, content: string) => void;
    onClose : () => void;
}

export function PostModal({ onSubmit, onClose }: PostModalProps) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(title, content);
    };
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">    
                <h2 className="text-2xl mb-4">Create New Post</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Title</label>
                        <input
                            type="text" 
                            className="w-full border border-gray-300 p-2 rounded"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Content</label>
                        <textarea
                            className="w-full border border-gray-300 p-2 rounded"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                        />
                    </div>  
                    <div className="flex justify-end">
                        <button
                            type="button"   
                            className="mr-4 px-4 py-2 bg-gray-300 rounded"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button 
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded"
                        >
                            Submit
                        </button>
                    </div>  
                </form>
            </div>
        </div>
    );
}