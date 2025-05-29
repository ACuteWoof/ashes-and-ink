import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <header className="w-full flex items-center h-16 px-8 py-4 justify-between gap-8">
      <div className="prose prose-stone">
        <h3>Ashes & Ink</h3>
      </div>
      <div className="flex gap-2 items-center">
        <Button variant="link" className="cursor-pointer">
          Books
        </Button>
        <Button variant="link" className="cursor-pointer">
          Collections
        </Button>
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
