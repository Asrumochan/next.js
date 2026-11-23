import { users } from "@/const";
import React, { Suspense } from "react";

type ParamsProps = {
  params: Promise<{ name: string }>;
};


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
