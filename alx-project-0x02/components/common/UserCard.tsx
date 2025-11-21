import React from 'react';
import { UserProps } from '../../interfaces';

export default function UserCard({ name, username, email }: UserProps) {
    return (
        <div>
            <div className="border rounded-lg p-4 shadow-md mb-4">
                <h2 className="text-xl font-semibold mb-2">{name}</h2>
                <p className="text-gray-700 mb-2">Username: {username}</p>
                <p className="text-gray-700">Email: {email}</p>
            </div>
        </div>
    );
}