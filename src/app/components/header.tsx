// import React from 'react'

import Link from "next/link";

// const Header = () => {
//   return (
//     <div className='bg-black w-screen h-[80px] place-content-center'>
//         <div  className='bg-gray-500 w-auto h-[60px] m-2  shadow-white '>

//         </div>
//     </div>
//   )
// }

// export default Header



const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Blog by Me</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
