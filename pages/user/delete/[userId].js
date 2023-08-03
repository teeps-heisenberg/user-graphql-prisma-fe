import React from "react";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { GET_USER } from "@/api/query/user";
import { DELETE_USER } from "@/api/mutation/user";
const DeleteUserPage = () => {
  const router = useRouter();
  const { userId } = router.query;
  const { data, loading, error } = useQuery(GET_USER, {
    variables: {
      id: parseInt(userId),
    },
  });
  const user = data?.findUserById;
  const [deleteUserById] = useMutation(DELETE_USER);
  const handleDelete = (e) => {
    e.preventDefault();
    deleteUserById({
      variables: {
        id: parseInt(userId),
      },
    })
      .then((res) => {
        alert(
          `User with id ${userId} Deleted Successfully`,
          res.data.deleteUserById
        );
        router.push("/user");
      })
      .catch((error) => {
        alert(error);
      });
  };
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <h2>User Delete Page</h2>
      <h3>Are you Sure you want to Delete the Following User?</h3>
      <form onSubmit={handleDelete}>
        <h5>User ID: {user.id}</h5>
        <h5>User Username: {user.username}</h5>
        <h5>User Email: {user.email}</h5>
        <button type="submit">Confirm</button>
      </form>
    </div>
  );
};

export default DeleteUserPage;
