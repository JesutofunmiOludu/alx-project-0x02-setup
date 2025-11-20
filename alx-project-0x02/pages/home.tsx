
import { useState } from "react";
import { PostModal } from "@/components/common/PostModal";
import Card from "@/components/common/Card";
import Header from "../components/layout/Header";


export default function Home() {

    const [posts, setPosts] = useState<
    { title: string; content: string }[]
  >([]);

  const [isOpen, setIsOpen] = useState(false);

  const handleAddPost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };

  return (
    <div className="p-8">
        <Header />
      <h1>Welcome to the Home Page</h1>
      <p>This is the main landing page of the application.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">

         <Card 
        title="First Card"               
        content="This is the content of card 1." 
      />
      <Card 
        title="Second Card"               
        content="This is the content of card 2."/>
      <Card 
        title="Third Card"               
        content="This is the content of card 3." 
      />

      </div>
    
     <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Home Page</h1>

      <button
        onClick={() => setIsOpen(true)}
        className="mb-6 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Add New Post
      </button>

      {isOpen && (
        <PostModal
          onSubmit={handleAddPost}
          onClose={() => setIsOpen(false)}
        />
      )}

      <div className="space-y-4">
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>
    </div>

      </div>

      
  );
}