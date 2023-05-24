import Link from "next/link";

export default function Error() {
  return (
    <>
      <head>
        <title>404</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <main className="w-screen h-screen flex items-center justify-center bg-secondary">
        <div className="text-center">
          <p className="text-base font-bold text-primary">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-200 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-400">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            
              <Link href="/" className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Go back home
              </Link>
            
          </div>
        </div>
      </main>
    </>
  );
}
