export default function Home() {
  return (
   <>
   <head>
        <title>Rivo - Riding on Innovation</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
   <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-9xl font-bold text-[#3fd378]">
        Rivo.gg
        </h1>
        <p className="mt-6 text-2xl">
        Where Innovation Takes the Lead!
        </p>
        <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <a href="mailto:support@rivo.gg?subject=Contact" target="_blank" className="w-full px-5 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-md sm:mx-2 sm:order-2 sm:w-auto ">
                  Contact Us
          </a>
        </div>
      </div>
    </main> </> 
  )
}