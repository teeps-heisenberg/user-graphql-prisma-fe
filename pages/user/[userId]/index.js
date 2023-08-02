import React from "react";
import { useRouter } from "next/router";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/client";
import { GET_USER } from "@/api/query/user";

const UserDetail = () => {
  const router = useRouter();
  const { userId } = router.query;

  const { data, loading, error } = useQuery(GET_USER, {
    variables: {
      id: parseInt(userId),
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const user = data?.findUserById;

  return (
    <div>
      <h2>User Detail Page</h2>
      <p>{userId}</p>
      {user ? (
        <>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </>
      ) : (
        <p>No user found with ID {id}</p>
      )}
    </div>
  );
};

export default UserDetail;
