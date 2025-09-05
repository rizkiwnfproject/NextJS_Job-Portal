import Hero from "@/components/organisms/Hero";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="max-w-10/12 w-full mx-auto">
        <Hero />
      </div>
    </>
  );
}
