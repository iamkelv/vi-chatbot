import { Body } from './components/Body'
import { Footer } from './components/Footer'
import { Head } from './components/Head'

function App() {
  return (
    <div className="w-screen h-screen bg-[rgb(40,44,52)] relative flex items-center">
      <div className="w-[100%] h-[100vh] tablet:h-[80vh]  tablet:w-[40%] desktop:w-[20%] p-2 mx-auto  relative flex flex-col  rounded-xl min-h-[80%]  bg-white ">
        <Head />
        <Body />
        <Footer />
      </div>
    </div>
  )
}

export default App
