import React from "react";
import { useQuery, gql } from "@apollo/client";
import Link from "next/link";
import { GET_USERS } from "@/api/query/user";

const UserList = () => {
  const { loading, error, data } = useQuery(GET_USERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Some Error Occured!</p>;
  return (
    <div>
      <h2>All Users will be Displayed Here</h2>
      {data.users.map((user) => {
        return (
          <div key={user.id}>
            <Link href={`/user/${user.id}`}>
              <h3>{user.username}</h3>
              <h3>{user.email}</h3>
            </Link>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
