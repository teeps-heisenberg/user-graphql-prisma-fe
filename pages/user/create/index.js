import { useMutation } from "@apollo/client";
import { gql } from "apollo-boost";
import React, { useState } from "react";
import { CREATE_USER } from "@/api/mutation/user";

const UserCreatePage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [createUser] = useMutation(CREATE_USER);

  const handleSubmit = (e) => {
    e.preventDefault();

    createUser({
      variables: {
        addUserArgs: {
          username,
          email,
        },
      },
    })
      .then((res) => {
        alert("User Created Successfully", res.data.createUser);
      })
      .catch((error) => {
        alert(error);
      });
    setEmail("");
    setUsername("");
  };

  return (
    <div>
      <h2>User Create Form</h2>
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
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default UserCreatePage;
