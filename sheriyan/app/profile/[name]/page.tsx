import React, { Suspense } from "react";

type ParamsProps = {
  params: Promise<{ name: string }>;
};

type User = {
  id: number;
  firstName: string;
  email: string;
  bio: string;
};

const users: User[] = [
  {
    id: 1,
    firstName: "Rahul",
    email: "rahul@example.com",
    bio: "Full Stack Developer passionate about React and Node.js.",
  },
  {
    id: 2,
    firstName: "Priya",
    email: "priya@example.com",
    bio: "UI/UX Designer who loves creating beautiful interfaces.",
  },
  {
    id: 3,
    firstName: "Amit",
    email: "amit@example.com",
    bio: "Backend Developer specializing in Node.js and MongoDB.",
  },
];
const Page = async ({ params }: ParamsProps) => {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <ProfileDetails params={params} />
    </Suspense>
  );
};

const ProfileDetails = async ({ params }: ParamsProps) => {
  const { name } = await params;
  const user = users.find(
    (user) => user.firstName.toLowerCase() === name.toLowerCase(),
  );
  if (!user) {
    return <h3>No user found on the name of {name}</h3>;
  }
  return (
    <>
      <h2>{user?.firstName}</h2>
      <h3>{user?.email}</h3>
      <h3>{user?.bio}</h3>
    </>
  );
};

export default Page;
