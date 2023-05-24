import { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';

export default function Header() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <>
<nav className='flex items-center flex-wrap  bg-secondary p-2 '>
          <Link href='/' className='inline-flex items-center p-2 mr-4 '>
            <Image src="/logo.png" width={50} height={50} alt="dominik development logo"/>
            <span className='text-xl text-white font-bold tracking-wide select-none'>
              Dominik Development
            </span>
          </Link>
        <button
          className=' inline-flex p-3 hover:bg-primary rounded lg:hidden text-white ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
              <Link href='/' className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:underline hover:underline-offset-4 decoration-primary hover:text-white '>
                Home
            </Link>
              <Link href='/' className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:underline hover:underline-offset-4 decoration-primary hover:text-white'>
                Services
            </Link>
              <Link href='/' className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:underline hover:underline-offset-4 decoration-primary hover:text-white'>
                About us
              </Link>
              <Link href='/' className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:underline hover:underline-offset-4 transition decoration-primary hover:text-white'>
                Contact us
              </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
