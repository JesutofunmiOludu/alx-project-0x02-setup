import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";


export default function About() {
  return (
    <div className="p-6">
        <Header />
      <h1 className="text-3xl font-bold mb-6">About Page</h1>
      <p>This page contains information about our application.</p>

      
      

      <div className="flex gap-4">
        <Button size="small" shape="rounded-sm" label="Small Rounded" />
        <Button size="medium" shape="rounded-md" label="Medium Rounded" />
        <Button size="large" shape="rounded-full" label="Large Rounded" />
      </div>
    
    </div>
  );
}