import React from 'react';
import { PostProps } from '../../interfaces';

export default function PostCard({ title, body, userId}: PostProps) {
    return (
        <div>
            <div className="border rounded-lg p-4 shadow-md mb-4">
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-700 mb-4">{body}</p>
                <p className="text-sm text-gray-500">Author ID: {userId}</p>
            </div>
        </div>
    );
}