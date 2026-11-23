import { Suspense } from "react";

type Props = {
  params: Promise<{ id: string }>;
};

const Page = ({ params }: Props) => {
  return (
    <Suspense fallback={<div>Loading user...</div>}>
      <UserDetails params={params} />
    </Suspense>
  );
};

const UserDetails = async ({ params }: Props) => {
  const { id } = await params;
  return <h1>Showing user details for user {id}</h1>;
};

export default Page;
