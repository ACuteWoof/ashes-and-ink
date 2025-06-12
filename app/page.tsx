import Header from "@/components/header";
import HeroBooks from "./sections/hero";
import HomeBooks from "./sections/home-books";
import Footer from "./sections/footer";
import { caligraphy } from "./fonts";

export default async function Home() {
  return (
    <main className="bg-white min-h-screen flex flex-col gap-0">
      <Header page={0} />
      <div className="lg:h-[calc(100vh-var(--spacing)*16)] flex flex-col gap-4 lg:grid lg:grid-cols-3 p-8 lg:p-0 lg:pt-12 lg:pl-12 bg-white">
        <div className="flex flex-col gap-8 justify-between pb-12">
          <h1 className={"text-[20vw] lg:text-[20vh] leading-[20vw] lg:leading-[20vh] " + caligraphy.className}>
            {"Ashes & Ink"}
          </h1>
          <p className="hidden lg:block text-[2vh]">
            Bringing classic books back in style to a people of the modern
            Fahrenheit 451 dystopia.
          </p>
        </div>
        <div className="flex flex-col px-12 items-center justify-center lg:col-span-2">
          <HeroBooks />
        </div>
      </div>
      <HomeBooks />
      <Footer />
    </main>
  );
}
