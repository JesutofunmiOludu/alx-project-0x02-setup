import React from "react";
import { UserProps } from "@/interfaces";
import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: UserProps[] = await res.json();
    return {
        props{
            users,
        },
    }
        }

export default function UsersPage() {
    return (
        <div>
            <Header />
            <main className="container mx-auto p-4">   
                <h1 className="text-3xl font-bold mb-6">Users List</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {users.map((user) => (
                        <UserCard
                            key={user.id}
                            name={user.name}    
                            username={user.username}
                            email={user.email}
                        />
                    ))} 
                </div>
            </main>
        </div>      

    )
}
