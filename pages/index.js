import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Projects = dynamic(() => import("../containers/Projects"));
const GithubProfileCard = dynamic(() => import("../components/GithubProfileCard"));
const Experience = dynamic(() => import("../containers/Experience"));
const Education = dynamic(() => import("../containers/Education"));
import { openSource } from "../data";
export default function Home({ githubProfileData }) {
  return (
    <>
      <Navigation />
      <Greetings />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <GithubProfileCard prof={githubProfileData} />
    </>

  )
}
Home.prototype = {
  githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
  const githubProfileData = await fetch(
    `https://api.github.com/users/${openSource.githubUserName}`
  ).then((res) => res.json());

  return {
    props: { githubProfileData },
  };
}