import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../slice/userSlice";
import store from '../../store';

const Users = () => {
  const dispatch = useDispatch();

  const { users = [] } = useSelector((reducers) => reducers.user);

  useEffect(() => { dispatch(fetchUsers()) }, []);
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

Users.fetchUsers = () => store.dispatch(fetchUsers());

export default Users;
