"use client";

import Header from "@/components/header";
import Footer from "../sections/footer";
import { caligraphy } from "../fonts";
import { Book, books as defaultBooks } from "../books";
import { BookCard } from "../sections/home-books";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Page() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [books, setBooks] = useState<Book[]>(Object.values(defaultBooks));

  return (
    <main className="bg-white min-h-screen flex flex-col gap-0">
      <Header page={1} />
      <div className={"min-h-screen flex flex-col gap-4 p-8 "}>
        <div className="flex justify-between items-center mb-12">
          <h1 className={"text-5xl " + caligraphy.className}>Browse Books</h1>
          <div className="w-full max-w-screen-sm">
            <div className="hidden md:flex item-center">
              <Input
                placeholder="Search..."
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setBooks(
                    Object.values(defaultBooks).filter((thebook) =>
                      JSON.stringify(thebook)
                        .toLowerCase()
                        .includes(e.target.value.toLowerCase()),
                    ),
                  );
                }}
                value={searchTerm}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
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
      </div>

      <Footer />
    </main>
  );
}
