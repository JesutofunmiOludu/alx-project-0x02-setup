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