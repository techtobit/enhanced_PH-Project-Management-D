
"use client";
import Link from 'next/link';


const Page = () => {
  return (
    <div className=' h-screen pattern-topography flex items-center justify-center gap-6 '>
      <Link className='px-5 py-2 text-white rounded-full bg-blue-600 hover:bg-blue-500' href="/Login">
        Login
      </Link>
      <Link  className='px-5 py-2 text-white rounded-full bg-blue-600 hover:bg-blue-500' href="/Dashboard">
      Dashboard
      </Link>
    </div>

  );
};

export default Page;
