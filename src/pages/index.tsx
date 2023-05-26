import Footer from '../components/footer'
import Header from '../components/header'
import dynamic from "next/dynamic";

const Home = () => {
  return (
    <>
      <head>
        <title>Dominik Development </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="https://merakiui.com/images/favicon.ico" />
        <link rel="stylesheet" href="https://merakiui.com/css/main.css" />
      </head>
      <Header />
     <main className='main z-10 bg-secondary'>
     <div className='content'>
    <h1 className="color-white z-50 align-center center">Hello</h1>
     hello
    </div>
        </main>    
      <Footer />
    </>

  )
}
export default dynamic (() => Promise.resolve(Home), {ssr: false})
