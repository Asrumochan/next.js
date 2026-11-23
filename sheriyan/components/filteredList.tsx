"use client";

import { useState } from "react";

type User = {
  id: number;
  firstName: string;
};

type UserListProps = {
  users: User[];
};

const FilteredList = ({ users }: UserListProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredUsers = users.filter((user: User) => {
    return user.firstName.includes(searchTerm);
  });
  return (
    <>
      <input
        type="text"
        value={searchTerm}
        placeholder="Search here"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredUsers.map((user: User) => {
          return <li key={user.id}>{user.firstName}</li>;
        })}
      </ul>
    </>
  );
};

export default FilteredList;
