import Gallery from "@/components/landing/gallery";
import SocialHandles from "@/components/landing/socialHandles";
import DirectorCard from "@/components/landing/directorCard";
import VisionMission from "@/components/landing/visionMission";
import Slider from "@/components/landing/slideshow";
import Popbuttons from "@/components/landing/quickLinks";
import Details from "@/components/landing/notice-event-academic";
import Research from "@/components/landing/research";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section>
        <Slider />
      </section>
      <section className="py-6">
        <Popbuttons />
      </section>
      <section className="">
        <Details />
      </section>
      <section className="">
        <VisionMission />
      </section>
      <section className="relative min-h-screen flex items-center justify-center p-7">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{
            backgroundImage:
              "url('https://i.postimg.cc/LssLn187/nit-patna-009.jpg')",
          }}
        ></div>
        <div className="relative z-10">
          <DirectorCard />
        </div>
      </section>
      <section className="py-6">
        <Research />
      </section>
      <section className="py-6">
        <SocialHandles />
      </section>
      <section className="rounded-2xl p-4 hidden xl:flex ring-rose-700 ">
        <Gallery />
      </section>
      <footer className="w-full h-[300px] md:h-[50vh] bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: "url('/footerimage.png')" }}
      ></footer>
    </div>
  );
}
