import { useState } from "react"
import Banner from "./assets/component/Banner"
import Navbar from "./assets/component/Navbar"
import Recipes from "./assets/component/Recipes"
import Sidebar from "./assets/component/Sidebar"
import { toast } from "react-toastify"
function App() {
  const [clicks, setClicks] = useState([]);



  const handleClick = (id) => {
    const isExist = clicks.find(click => click.id == id.id);
    if (!isExist) {
      setClicks([...clicks, id]);

    } else {
      toast.warning('already is selected');
    }

  }
  const handleRemove = (id) => {
    const remove = clicks.filter(removeItem => removeItem.id !== id);
    setClicks(remove);


  }

  return (
    <>
      <header className="container mx-auto">
        <Navbar></Navbar>
        <Banner></Banner>
      </header>
      <main className="container mx-auto mt-6">
        <h1 className="text-center lg:text-[40px] text-[20px] font-semibold lg:mt-[100px] lg:mb-8" >Our Recipes</h1>
        <p className="text-center text-[20px]  max-sm:p-5 font-normal lg:mb-16 lg:w-[925px] mx-auto" > we offer a diverse selection of easy-to-follow recipes that cater to various tastes and skill levels. From simple yet delicious weeknight meals to impressive dishes perfect for entertaining, our recipes are designed to make cooking enjoyable and accessible for everyone. </p>
        <section className="flex lg:gap-5 max-sm:flex-col">
          <Recipes handleClick={handleClick}></Recipes>
          <Sidebar handleRemove={handleRemove} clicks={clicks} ></Sidebar>
        </section>
      </main>


    </>
  )
}

export default App
