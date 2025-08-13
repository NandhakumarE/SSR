import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../slice/userSlice";

const Users = () => {
  const dispatch = useDispatch();

  const { users = [] } = useSelector((reducers) => reducers.user);
  useEffect(() => { dispatch(fetchUsers()) }, [dispatch]);
  return (
    <section>
      <h2>List of users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </section>
  );
};

// For SSR
Users.loadData = (store) => store.dispatch(fetchUsers());

export default Users;
