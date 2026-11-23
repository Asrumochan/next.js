type User = {
  id: number;
  firstName: string;
  email: string;
  bio: string;
  age: number;
};

export const users: User[] = [
  {
    id: 1,
    firstName: "Rahul",
    email: "rahul@example.com",
    bio: "Full Stack Developer passionate about React and Node.js.",
    age: 20,
  },
  {
    id: 4,
    firstName: "Rahul",
    email: "rahul.dubey@example.com",
    bio: "Full Stack Developer passionate about React and Node.js.",
    age: 26,
  },
  {
    id: 2,
    firstName: "Priya",
    email: "priya@example.com",
    bio: "UI/UX Designer who loves creating beautiful interfaces.",
    age: 22,
  },
  {
    id: 3,
    firstName: "Amit",
    email: "amit@example.com",
    bio: "Backend Developer specializing in Node.js and MongoDB.",
    age: 25,
  },
];
