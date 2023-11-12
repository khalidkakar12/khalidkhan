import About from "@/components/About"
import Hero from "@/components/Hero"
import Myskills from "@/components/Myskills"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import MyExperince from "@/components/MyExperince"
const Home = () => {
  return (
    <>
    {/* <div className="bg-hero -z-50 bgresponsive absolute top-0 left-0 right-0">
    </div> */}
      <Hero />
      <About />
      <Myskills />
      <MyExperince/>
      <Projects />
      <Contact />
    </>
  )
}

export default Home