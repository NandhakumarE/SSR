import React from 'react'
import store from '../../store';
import { fetchUsers } from '../../slice/userSlice';
const Home = () => {

  const onClick = () => {
     store.dispatch(fetchUsers(1,2,3,4)).then((...rest) => {
        console.log('restrest',store.getState())
     });
     console.log("hello world")
  };

  return (
    <div>
      <h2>Home Component</h2>
      <p>Welcom to the Home page!</p>
      <p>This is where you can find the latest updates and news.</p>
      <p>Feel free to explore the site and learn more about our offerings.</p>
      <p>Thank you for visiting!</p>
      <button onClick={onClick}>Click</button>
    </div>
  );
};

export default Home;