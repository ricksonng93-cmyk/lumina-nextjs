import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export default function Container({ children, className = "", as: Tag = "div" }: Props) {
  return (
    <Tag className={`mx-auto w-full max-w-7xl px-6 lg:px-8 ${className}`}>
      {children}
    </Tag>
  );
}
