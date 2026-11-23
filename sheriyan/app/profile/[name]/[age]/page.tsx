import { users } from "@/const";
import { Suspense } from "react";

type ProfileAgePageProps = {
  params: Promise<{ name: string; age: string }>;
};

const page = ({ params }: ProfileAgePageProps) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProfileAgePage params={params} />
    </Suspense>
  );
};

export default page;

const ProfileAgePage = async ({ params }: ProfileAgePageProps) => {
  const { name, age } = await params;
  const user = users.find(
    (user) =>
      user.firstName.toLowerCase() === name && user.age.toString() === age,
  );
  if (!user) {
    return (
      <h1>
        No user found with name {name} and age {age}
      </h1>
    );
  }
  return (
    <div>
      <h1>{user?.firstName}</h1>
      <h1>{user?.email}</h1>
      <h1>{user?.bio}</h1>
      <h1>{user?.age}</h1>
    </div>
  );
};
