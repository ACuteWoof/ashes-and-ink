import Header from "@/components/header";
import HeroBooks from "./sections/hero";
import HomeBooks from "./sections/home-books";
import Footer from "./sections/footer";
import { caligraphy } from "./fonts";
import { books } from "./books";
import Image from "next/image";
import Link from "next/link";

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
          <p className="text-lg lg:text-xl w-full max-w-96">
            Bringing classic books back in style to a people of the modern
            Fahrenheit 451 dystopia.
          </p>
          <div className="flex flex-col items-end">
            <h1
              className={
                "text-[15vmin] lg:text-8xl xl:text-9xl " + caligraphy.className
              }
            >
              {"Ashes & Ink"}
            </h1>
            <span className="text-lg lg:text-xl">
              is a classics publishing house.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 prose prose-stone">
            <div className="flex flex-col">
              <h4>Navigation</h4>
              <Link href="/">Home</Link>
              <Link href="/books">Books</Link>
              <Link href="https://press.lewoof.xyz">Libri Latini</Link>
            </div>
            <div className="flex flex-col">
              <h4>Social</h4>
              <Link href="https://discord.gg/ngp9hJPjt9">Discord</Link>
              <Link href="https://instagram.com/ashesandink.classics">
                Instagram
              </Link>
              <Link href="#contact">Contact</Link>
            </div>
            <div className="flex flex-col">
              <h4>Information</h4>
              <Link href="#about">
	      What We Do
              </Link>
              <Link href="#copyright">Copyright</Link>
              <Link href="#request">Request Books</Link>
            </div>
          </div>
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
