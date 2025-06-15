import Header from "@/components/header";
import HeroBooks from "./sections/hero";
import HomeBooks from "./sections/home-books";
import Footer from "./sections/footer";
import { display } from "./fonts";
import { books } from "./books";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const shuffledBooks = Object.values(books)
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return (
    <main className="bg-white min-h-screen flex flex-col gap-0">
      <Header page={0} />
      <div className="lg:-[calc(100vh-var(--spacing)*16)] flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-12 p-8 lg:p-0 lg:py-12 lg:pl-12 bg-white">
        <div className="flex flex-col gap-8 justify-between pb-12">
          <div className="lg:hidden w-full flex flex-col items-center">
            <Image
              src="/icon.png"
              alt={"Ashes & Ink"}
              width={300}
              height={300}
              className={`object-contain`}
            />
          </div>

          <div className="flex flex-col items-center lg:items-start lg:pr-12">
            <h1
              className={
                "text-[15vmin] lg:text-[20vh] lg:leading-[20vh] " +
                display.className
              }
            >
              {"Ashes & Ink"}
            </h1>
            <p className="lg:hidden">is a classics publishing house.</p>
            <div className="flex gap-4">
              {/* <Button variant="secondary">Contact Us</Button> */}
              {/* <Button>Browse Our Books Now!</Button> */}
            </div>
          </div>
          <p className="hidden lg:block w-full max-w-96">
            Bringing classic books back in style to a people of the modern
            Fahrenheit 451 dystopia.
          </p>
        </div>
        <div className="hidden lg:flex flex-col px-12 items-center justify-center w-full">
          <HeroBooks books={shuffledBooks} />
        </div>
      </div>
      <HomeBooks />
      <Footer />
    </main>
  );
}
