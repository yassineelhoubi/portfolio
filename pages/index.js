import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));

export default function Home() {
  return (
    <>
    <Navigation />
    <Greetings/>
    <Skills />
    </>
    
  )
}
