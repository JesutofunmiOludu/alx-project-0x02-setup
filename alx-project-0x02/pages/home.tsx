import Card  from "@/components/common/Card";

export default function Home() {
  return (
    <div className="p-8">
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
    
     
      </div>
  );
}