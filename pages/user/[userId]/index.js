import React from "react";
import { useRouter } from "next/router";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/client";
import { GET_USER } from "@/api/query/user";
import Link from "next/link";

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
      {user ? (
        <>
          <h5>User ID: {user.id}</h5>
          <h5>Username: {user.username}</h5>
          <h5>Email: {user.email}</h5>
          <Link href={`update/${userId}`}>
            <button>Update User</button>
          </Link>
          <Link href={`delete/${userId}`}>
            <button>Delete User</button>
          </Link>
        </>
      ) : (
        <p>No user found with ID {id}</p>
      )}
    </div>
  );
};

export default UserDetail;
