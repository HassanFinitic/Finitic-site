import Image from "next/image";
import styles from "./page.module.css";
import Header from "../components/header/Header";
import Landing from "@/components/landing/Landing";
import Hero from "@/components/heroSection/Hero";

export default function Home() {
  return (
    <>
    <Landing />
    <Hero />
    </>
  );
}
