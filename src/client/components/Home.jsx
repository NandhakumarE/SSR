import React from 'react'
const Home = () => {
  const buttonStyle = 'px-4 py-2 rounded-md w-fit cursor-pointer text-white';

  const handleEmptyClick = () => { console.log("hello world") };
  const moveToUserList = () => { window.location.href = '/users'; }

  return (
    <div className='p-4 flex flex-col gap-4 '>
      <h2 className='text-blue-600 text-lg'>Home Component</h2>
      <p>Welcom to the Home page!</p>
      <p>This is where you can find the latest updates and news.</p>
      <p>Feel free to explore the site and learn more about our offerings.</p>
      <p>Thank you for visiting!</p>
      <div className='flex items-center gap-8'>
         <button className={`${buttonStyle} bg-gray-500 hover:bg-gray-600`} onClick={handleEmptyClick}>Empty Click</button>
         <button className={`${buttonStyle} bg-blue-500 hover:bg-blue-600`} onClick={moveToUserList}>Go To User List</button>
      </div>
      
    </div>
  );
};

export default Home;