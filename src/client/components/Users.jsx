import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../slice/userSlice";

const Users = () => {
  const dispatch = useDispatch();

  const { users = [] } = useSelector((reducers) => reducers.user);

 useEffect(() => {
    if (!users.length) {
      dispatch(fetchUsers());
    }
  }, [dispatch, users.length]);

  return (
    <section className='p-4 lg:max-w-[50%] md:max-w-[70%] sm:max-w-[90%] '>
      <h2 className='text-blue-600 text-lg mb-4'>List of users</h2>
      <ul className='list-none flex flex-col gap-4'>
        {users.map((user) => (
          <li key={user.id} className='border-1 border-blue-300 p-2 rounded-sm text-blue-900'>{user.name}</li>
        ))}
      </ul>
    </section>
  );
};

// For SSR
Users.loadData = (store) => store.dispatch(fetchUsers());

export default Users;
