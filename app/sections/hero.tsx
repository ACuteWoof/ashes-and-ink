"use client";
import Image from "next/image";
import { Book } from "../books";
import { useState } from "react";
import { motion } from "motion/react";

export default function HeroBooks({ books }: { books: Book[] }) {
  const [book, setBook] = useState(books[0]);

  return (
    <div className={"h-full max-h-screen flex gap-1 w-max overflow-hidden"}>
      <motion.div
        className={`h-[80vh] bg-contain flex relative aspect-[${book.cover.height}/${book.cover.width}]`}
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        exit={{ x: -100 }}
        transition={{ duration: 0.3 }}
        key={book.id}
      >
        <div className="absolute z-50 border-r border-stone-200/20 w-[5%] h-[80vh] left-0" />
        <div>
          <Image
            src={book.image}
            alt={`${book.title} - ${book.author}`}
            width={book.cover.width * 600}
            height={book.cover.height * 600}
            className={`z-0 h-full max-h-[80vh] w-auto max-w-[${(80 * book.cover.width) / book.cover.height}vh] object-contain antialiased aspect-[${book.cover.height}/${book.cover.width}]`}
          />
        </div>
      </motion.div>
      <div className="flex gap-1">
        {books &&
          books.map((book, i) => (
            <Image
              key={i}
              src={book.coverparts.spine}
              alt={`${book.title} - ${book.author}`}
              height={book.cover.height * 600}
              width={(book.cover.spine as number) * 600}
              className={`z-0 h-[80vh] max-h-[${(80 * book.cover.spine) / book.cover.height}vh] w-auto object-contain antialiased aspect-[${book.cover.height}/${book.cover.spine}]`}
              onMouseOver={() => {
                setBook(book);
              }}
            />
          ))}
      </div>
    </div>
  );
}
