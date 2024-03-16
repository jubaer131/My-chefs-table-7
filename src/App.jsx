import { useState } from "react"
import Banner from "./assets/component/Banner"
import Navbar from "./assets/component/Navbar"
import Recipes from "./assets/component/Recipes"
import Sidebar from "./assets/component/Sidebar"
function App() {
  const [click, setClick] = useState([])

  const handleClick = item => {
    setClick(item)
  }

  return (
    <>
      <header className="container mx-auto">
        <Navbar></Navbar>
        <Banner></Banner>
      </header>
      <main className="container mx-auto mt-6">
        <h1 className="text-center text-2xl" >Our Recipes</h1>
        <p className="text-center text-xl" > we offer a diverse selection of easy-to-follow recipes that cater to various tastes and skill levels. From simple yet delicious weeknight meals to impressive dishes perfect for entertaining, our recipes are designed to make cooking enjoyable and accessible for everyone. </p>
        <section className="flex ">
          <Recipes handleClick={handleClick}></Recipes>
          <Sidebar click={click}></Sidebar>
        </section>
      </main>


    </>
  )
}

export default App
