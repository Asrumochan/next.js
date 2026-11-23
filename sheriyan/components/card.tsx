"use client";
type CardProps = {
  title: string;
  description: string;
};

const Card = ({ title, description }: CardProps) => {
  return (
    <>
      <h2>Hello from {title}</h2>
      <h3>{description}</h3>
      <button onClick={() => alert("Button clicked")}>Click Me !</button>
    </>
  );
};

export default Card;
