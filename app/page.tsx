import Header from "@/components/header";
import HeroBooks from "./sections/hero";
import HomeBooks from "./sections/home-books";
import Footer from "./sections/footer";
import { caligraphy } from "./fonts";
import { books } from "./books";

export default async function Home() {
  const shuffledBooks = Object.values(books)
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return (
    <main className="bg-white min-h-screen flex flex-col gap-0">
      <Header page={0} />
      <div className="lg:-[calc(100vh-var(--spacing)*16)] flex flex-col gap-4 lg:grid lg:grid-cols-2 p-8 lg:p-0 lg:py-12 lg:pl-12 bg-white">
        <div className="flex flex-col gap-8 justify-between pb-12">
          <h1
            className={
              "text-[20vw] lg:text-[20vh] leading-[20vw] lg:leading-[20vh] " +
              caligraphy.className
            }
          >
            {"Ashes & Ink"}
          </h1>
          <p className="hidden lg:block text-[2vh] w-full max-w-96">
            Bringing classic books back in style to a people of the modern
            Fahrenheit 451 dystopia.
          </p>
        </div>
        <div className="flex flex-col px-12 items-center justify-center">
          <HeroBooks books={shuffledBooks}/>
        </div>
      </div>
      <HomeBooks />
      <Footer />
    </main>
  );
}

function shuffle(array: any[]) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}
