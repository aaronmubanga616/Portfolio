import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
import Loader from "../components/Loader";

/*
const Canvas= lazy(() => import("@react-three/fiber")); 
const useFrame= lazy(() => import("@react-three/fiber")); 
const HeroText= lazy(() => import("../components/HeroText")); 
const ParallaxBackground= lazy(() => import("../components/ParallaxBackground")); 
const Float= lazy(() => import("@react-three/drei")); 
const useMediaQuery= lazy(() => import("react-responsive")); 
const easing= lazy(() => import("maath")); 
const Suspense= lazy(() => import("react")); 
const Loader= lazy(() => import("../components/Loader")); 
*/

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
      <HeroText />
      {/*Add the bacground you want*/}
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default Hero;
