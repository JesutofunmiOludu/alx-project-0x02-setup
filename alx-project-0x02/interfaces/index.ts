export interface CardProps {
  title: string;
  content: string;
}
export interface ButtonProps {
  size: "small" | "medium" | "large";
  shape: "rounded" | "square";
  label: string;
  onClick: () => void;
}

export interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}