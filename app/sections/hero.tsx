import { Button } from "@/components/ui/button";

export default function HeroBooks() {
  return (
    <div>
      {/* <Image */}
      {/*   src="/white-nights-notes-from-underground.png" */}
      {/*   alt="White Nights & Notes From Underground - Fyodor Dostoevsky, Constance Garnett" */}
      {/*   width={5000} */}
      {/*   height={8000} */}
      {/* /> */}
      <div className="flex gap-0.5 lg:gap-1">
        <div className='h-[80vw] w-[50vw] lg:h-[80vh] lg:w-[50vh] bg-stone-800 bg-[url("/white-nights-notes-from-underground.png")] bg-contain flex'>
          <div className="h-[80vw] w-[50vw] lg:h-[80vh] lg:w-[50vh] bg-stone-800/50 backdrop-grayscale-100 bg-contain flex flex-col-reverse opacity-0 hover:opacity-100 transition-all duration-150">
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
        <div className="h-[80vw] w-[10vw] lg:h-[80vh] lg:w-[10vh] bg-stone-900 flex flex-col justify-around border-4 border-stone-500">
          <div className="border-y-2 border-y-stone-500" />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div className="border-y-2 border-y-stone-500" />
          <div className="border-y-2 border-y-stone-500" />
          <div className="border-y-2 border-y-stone-500" />
        </div>
        <div className="h-[80vw] w-[10vw] lg:h-[80vh] lg:w-[10vh] rotate-4 bg-stone-900 mx-2 lg:mx-5 flex flex-col justify-around border-4 border-stone-500">
          <div className="border-y-2 border-y-stone-500" />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div className="border-y-2 border-y-stone-500" />
          <div className="border-y-2 border-y-stone-500" />
          <div className="border-y-2 border-y-stone-500" />
        </div>
        <div className="h-[80vw] w-[10vw] lg:h-[80vh] lg:w-[10vh] bg-stone-900 flex flex-col justify-around border-4 border-stone-500">
          <div className="border-y-2 border-y-stone-500" />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div className="border-y-2 border-y-stone-500" />
          <div className="border-y-2 border-y-stone-500" />
          <div className="border-y-2 border-y-stone-500" />
        </div>
      </div>
    </div>
  );
}
