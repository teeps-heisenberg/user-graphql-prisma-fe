import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import Link from "next/link";
import { GET_USERS } from "@/api/query/user";

const UserList = () => {
  const { loading, error, data } = useQuery(GET_USERS);
  const [refresh, setRefresh] = useState(true);
  const users = data.users;
  useEffect(() => {}, [users]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Some Error Occured!</p>;
  return (
    <div>
      <h2>All Users will be Displayed Here</h2>
      {users.map((user) => {
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
      <Link href="user/create">
        <button>Create</button>
      </Link>
    </div>
  );
};

export default UserList;
