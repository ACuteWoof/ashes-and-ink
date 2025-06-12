import { Button } from "@/components/ui/button";
import Image from "next/image";
import { caligraphy } from "../fonts";

type book = {
  image: string;
  title: string;
  author: string;
  description: string;
  cover: {
    height: number;
    width: number;
  };
  id: string;
};

const books: book[] = [
  {
    image: "/white-nights-notes-from-underground.png",
    title: "White Nights & Notes from Underground",
    author: "Fyodor Dostoevsky",
    description: `This is a compilation of what are two of the perhaps greatest and most well-known short stories of Fyodor Dostoevsky, exploring views of life in 19th century Petersburg. In his own words in the author’s note to Notes from Underground:

“I have tried to expose to the view of the public more distinctly than is commonly done, one of the characters of the recent past. He is one of the representatives of a generation still living.”`,
    cover: {
      height: 8,
      width: 5,
    },
    id: "gjyd6pv",
  },
];

export default function HomeBooks() {
  return (
    <div className="flex flex-col gap-4 p-8 min-h-screen max-h-[200vh] bg-stone-50 overflow-hidden relative">
      <div className="flex flex-col items-center justify-center py-12">
        <div className="border-y-2 border-y-stone-950 md:min-w-md text-center w-fit py-8 px-12">
          <h1 className={"text-3xl " + caligraphy.className}>Our Books</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {books &&
          books.map((book, i) => (
            <Book
              key={i}
              image={book.image}
              title={book.title}
              author={book.author}
              description={book.description}
              coverwidth={book.cover.width * 1000}
              coverheight={book.cover.height * 1000}
            />
          ))}
      </div>
      {books.length > 5 && (
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

function Book({
  image,
  title,
  author,
  description,
  coverwidth,
  coverheight,
}: {
  image: string;
  title: string;
  author: string;
  description: string;
  coverwidth: number;
  coverheight: number;
}) {
  return (
    <div className="flex flex-col hover:cursor-pointer hover:*:bg-stone-950">
      <Image
        src={image}
        alt={`${title} - ${author}`}
        width={coverwidth}
        height={coverheight}
      />
      <div className="p-4 bg-stone-800 w-full">
        <div className="prose prose-stone prose-invert">
          <h4>
            {title} - {author}
          </h4>
          <p className="line-clamp-3">{description}</p>
        </div>
      </div>
    </div>
  );
}
