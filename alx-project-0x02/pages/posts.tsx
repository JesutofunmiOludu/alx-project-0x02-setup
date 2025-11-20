import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}


export default function Post() {
    return (


        <div className="p-6">
            <Header />
            <h1 className="text-3xl font-bold mb-6">Post Page</h1>
            <p>This page is dedicated to posts.</p>

            <div className="space-y-4">
          {posts.map((post: any) => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.body}
              userId={post.userId}
            />
          ))}
        </div>
        </div>
    );
}