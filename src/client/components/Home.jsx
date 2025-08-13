import React from 'react'
const Home = () => {
  const onClick = () => { console.log("hello world") };

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