import { Button } from "@/components/ui/button";
import Image from "next/image";
import { caligraphy } from "../fonts";
import Link from "next/link";
import { Book, books } from "../books";

export default function HomeBooks() {
  return (
    <div className="flex flex-col gap-4 p-12 pt-8 lg:max-h-[200vh] bg-stone-50 overflow-hidden relative items-center">
      <div className="flex flex-col items-center justify-center py-12">
        <div className="border-y-2 border-y-stone-950 md:min-w-md text-center w-fit py-8 px-12">
          <h1 className={"text-3xl " + caligraphy.className}>Our Books</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center">
        {books &&
          (Object.values(books) as Book[]).map((book) => (
            <BookCard
              key={book.id}
              image={book.image}
              title={book.title}
              author={book.author}
              description={book.description}
              coverwidth={book.cover.width * 600}
              coverheight={book.cover.height * 600}
              price={book.price}
              id={book.id}
            />
          ))}
      </div>
      {Object.values(books).length > 5 && (
        <div className="h-[20vh] bg-gradient-to-b from-transparent via-stone-50 to-stone-50 absolute bottom-0 left-0 right-0 flex flex-col justify-center items-center">
          <Button
            variant="outline"
            className="bg-stone-700 text-stone-100"
            size="lg"
          >
            Browse All Books
          </Button>
        </div>
      )}
    </div>
  );
}

export function BookCard({
  image,
  title,
  author,
  description,
  coverwidth,
  coverheight,
  price,
  id,
}: {
  image: string;
  title: string;
  author: string;
  description: string;
  coverwidth: number;
  coverheight: number;
  price: number;
  id: string;
}) {
  return (
    <Link href={"/books/" + id}>
      <div className="flex flex-col hover:cursor-pointer bg-stone-800 p-4 gap-4 hover:bg-stone-800/90">
        <div className="border border-stone-200/10 relative">
          <div className="absolute z-50 border-r border-stone-200/20 w-[5%] h-full left-0" />
          <Image
            src={image}
            alt={`${title} - ${author}`}
            width={coverwidth}
            height={coverheight}
            className="z-0 w-auto"
          />
        </div>
        <div className="w-full">
          <div className="prose prose-stone prose-invert">
            <h4 className="truncate">
              {title} - {author}
            </h4>
            <p className="line-clamp-4">
              <strong>{price} USD</strong>
              <br />
              {description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
