import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { GET_USER } from "@/api/query/user";
import { UPDATE_USER } from "@/api/mutation/user";

const UserUpdatePage = () => {
  const router = useRouter();
  const { userId } = router.query;

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const { data, loading, error } = useQuery(GET_USER, {
    variables: {
      id: parseInt(userId),
    },
  });
  const [updateUser] = useMutation(UPDATE_USER);

  const user = data?.findUserById;
  // console.log(user);
  useEffect(() => {
    if (user) {
      setUsername(user.username);
      setEmail(user.email);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    updateUser({
      variables: {
        id: parseInt(userId),
        updateArgs: {
          id: parseInt(userId),
          username: username,
          email: email,
        },
      },
    })
      .then((res) => {
        alert(
          `User with id ${userId} Updated Successfully`,
          res.data.updateUser
        );
        setEmail("");
        setUsername("");
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
      <h2>User Update Info</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <br />
        <br />
        <div>
          <label>Email: </label>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <br />
        <br />
        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default UserUpdatePage;
