import BannerSignup from "@/components/organisms/BannerSignup";
import Category from "@/components/organisms/Category";
import Clients from "@/components/organisms/Clients";
import FeaturedJobs from "@/components/organisms/FeaturedJobs";
import Hero from "@/components/organisms/Hero";
import LatestJobs from "@/components/organisms/LatestJobs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="absolute w-2/3 h-screen top-0 right-0 -z-10">
        <Image src={"/images/pattern.png"} alt="/images/pattern.png" fill />
      </div>
      <div className="max-w-10/12 w-full mx-auto mb-10">
        <Hero />
        <Clients />
        <Category />
        <BannerSignup />
        <FeaturedJobs />
        <LatestJobs />
      </div>
    </>
  );
}
