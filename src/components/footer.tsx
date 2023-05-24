import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="bg-white dark:bg-secondary">
        <div className="container px-6 py-8 mx-auto">
          
          <div className="flex flex-col items-center text-center">
          <Link href='/' className='inline-flex items-center p-2 mr-4 '>
            <Image src="/logo.png" width={50} height={50} alt="dominik development logo"/>
            <span className='text-xl text-white font-bold tracking-wide select-none'>
              Dominik Development
            </span>
          </Link>
            <p className="max-w-md mx-auto mt-4 text-gray-500 dark:text-gray-400">
              Helping clients to stay ahead of technologie since <b>2023</b>
            </p>

            <div className="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center">
            <a href="https://www.linkedin.com/company/dominik-development/" target="_blank" className="flex items-center justify-center order-1 w-full px-2 py-2 mt-3 text-sm tracking-wide text-gray-600 capitalize transition-colors duration-300 transform border rounded-md sm:mx-2 dark:text-gray-300 sm:mt-0 sm:w-auto hover:bg-gray-50 focus:outline-none dark:hover:bg-gray-800">
                   <svg className="w-5 h-5 mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">    <path fill="#fff" d="M 8 3.0097656 C 4.53 3.0097656 2.0097656 5.0892187 2.0097656 7.9492188 C 2.0097656 10.819219 4.59 12.990234 8 12.990234 C 11.47 12.990234 13.990234 10.870625 13.990234 7.890625 C 13.830234 5.020625 11.36 3.0097656 8 3.0097656 z M 3 15 C 2.45 15 2 15.45 2 16 L 2 45 C 2 45.55 2.45 46 3 46 L 13 46 C 13.55 46 14 45.55 14 45 L 14 16 C 14 15.45 13.55 15 13 15 L 3 15 z M 18 15 C 17.45 15 17 15.45 17 16 L 17 45 C 17 45.55 17.45 46 18 46 L 27 46 C 27.552 46 28 45.552 28 45 L 28 30 L 28 29.75 L 28 29.5 C 28 27.13 29.820625 25.199531 32.140625 25.019531 C 32.260625 24.999531 32.38 25 32.5 25 C 32.62 25 32.739375 24.999531 32.859375 25.019531 C 35.179375 25.199531 37 27.13 37 29.5 L 37 45 C 37 45.552 37.448 46 38 46 L 47 46 C 47.55 46 48 45.55 48 45 L 48 28 C 48 21.53 44.529063 15 36.789062 15 C 33.269062 15 30.61 16.360234 29 17.490234 L 29 16 C 29 15.45 28.55 15 28 15 L 18 15 z"/></svg>

                    <span className="mx-1">LinkedIn</span>
                </a>
              <a href="mailto:dominik@wouldyoubot.com?subject=Contact" target="_blank" className="w-full px-5 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-md sm:mx-2 sm:order-2 sm:w-auto ">
                Contact Us
              </a>
            </div>
          </div>

          <hr className="my-10 border-gray-200 dark:border-gray-700" />

          <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <p className="text-sm text-gray-500">
              © Copyright 2023. All Rights Reserved.
            </p>

            <div className="flex mt-3 -mx-2 sm:mt-0">
              <Link
                href="/imprint"
                className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                aria-label="Reddit"
              >
                {" "}
                Imprint{" "}
              </Link>

              <Link
                href="/privacy"
                className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                aria-label="Reddit"
              >
                {" "}
                Privacy{" "}
              </Link>

              <a
                href="#"
                className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                aria-label="Reddit"
              >
                {" "}
                {" "}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
