import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";

export default function Post() {
    return (

    const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch sample posts from JSONPlaceholder API
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);


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