import { caligraphy } from "@/app/fonts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

export default function Header({ page }: { page?: number }) {
  /*
   * 0: home
   * 1: books
   */

  return (
    <header className="w-full flex items-center h-16 px-8 py-4 justify-between gap-8">
      <div className="flex gap-4 items-center">
        <Image
          src="/header-icon.png"
          width={500}
          height={500}
          alt="Ashes and Ink Logo"
          className="h-8 w-auto"
        />
        <h3 className={"text-xl font-semibold " + caligraphy.className}>
          Ashes & Ink
        </h3>
      </div>
      <div className="flex gap-2 items-center">
        {page === 1 ? (
          <Link href="/">
            <Button variant="link" className="cursor-pointer">
              Home
            </Button>
          </Link>
        ) : (
          <Link href="/books">
            <Button variant="link" className="cursor-pointer">
              Books
            </Button>
          </Link>
        )}
        <Link href="https://press.lewoof.xyz" target="_blank">
          <Button variant="link" className="cursor-pointer">
            {"Libri Latini"}
          </Button>
        </Link>
        <div className="flex item-center">
          <Input
            className="border-stone-400 shadow-none rounded-r-none border-r-0"
            placeholder="Search..."
          />
          <Button
            variant="outline"
            className="cursor-pointer !bg-transparent shadow-none !border-stone-400 rounded-l-none hover:!bg-stone-300"
            size="icon"
          >
            <FaSearch />
          </Button>
        </div>
        {/* <Button variant="outline" size="icon" className="cursor-pointer !bg-transparent shadow-none !border-stone-400 hover:!bg-stone-300"> */}
        {/*   <FaShoppingCart /> */}
        {/* </Button> */}
      </div>
    </header>
  );
}
