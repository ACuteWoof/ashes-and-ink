import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default async function Home() {
  return (
    <main className="bg-stone-200 min-h-screen flex flex-col gap-0">
      <Header />
      <div className="h-[calc(100vh-var(--spacing)*16)] grid grid-cols-3">
        <div></div>
        <div className="flex flex-col px-12 items-center justify-center col-span-2">
          <HeroBooks />
        </div>
      </div>
    </main>
  );
}

function HeroBooks() {
  return (
    <div>
      {/* <Image */}
      {/*   src="/white-nights-notes-from-underground.png" */}
      {/*   alt="White Nights & Notes From Underground - Fyodor Dostoevsky, Constance Garnett" */}
      {/*   width={5000} */}
      {/*   height={8000} */}
      {/* /> */}
      <div className="flex gap-1 border-b-2 border-b-black">
        <div className='h-[80vh] w-[50vh] bg-stone-800 bg-[url("/white-nights-notes-from-underground.png")] bg-contain flex'>
          <div className="h-[80vh] w-[50vh] bg-stone-800/50 backdrop-grayscale-100 bg-contain flex flex-col-reverse opacity-0 hover:opacity-100 transition-all duration-150">
            <div className="p-4 bg-stone-800 prose prose-stone prose-invert">
              <h4>{"Ashes & Ink Dostoevsky Collection"}</h4>
              <p>
                View the {"Ashes & Ink"} collection of Dostoevsky's most popular
                books.
              </p>
              <Button variant="outline">Browse Collection</Button>
            </div>
          </div>
        </div>
        <div className="h-[80vh] w-[10vh] bg-stone-800 hover:bg-stone-900"></div>
        <div className="h-[80vh] w-[10vh] rotate-4 bg-stone-800 hover:bg-stone-900 mx-5"></div>
        <div className="h-[80vh] w-[10vh] bg-stone-800 hover:bg-stone-900"></div>
      </div>
    </div>
  );
}
