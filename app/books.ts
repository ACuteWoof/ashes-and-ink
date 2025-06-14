type Binding = "Paperback Perfect Bound" | "Hardcover";
type BuyLink = { from: string; link: string };

export type Book = {
  image: string;
  coverparts: {
    front: string;
    spine: string;
    back: string;
  };
  title: string;
  author: string;
  description: string;
  cover: {
    height: number;
    width: number;
    spine: number;
  };
  id: string;
  price: number;
  copyright: string;
  contributors: string;
  category: string;
  language: string;
  pages: number;
  binding: Binding;
  dimensions: string;
  buyLinks: BuyLink[];
  explicit: boolean;
  translator?: string;
  isbn?: string;
};

export const books: { [key: string]: Book } = {
  gjyd6pv: {
    image: "/white-nights-and-notes-from-underground/front.png",
    coverparts: {
      front: "/white-nights-and-notes-from-underground/front.png",
      spine: "/white-nights-and-notes-from-underground/spine.png",
      back: "/white-nights-and-notes-from-underground/book.png",
    },
    title: "White Nights & Notes from Underground",
    author: "Fyodor Dostoevsky",
    description: `This is a compilation of what are two of the perhaps greatest and most well-known short stories of Fyodor Dostoevsky, exploring views of life in 19th century Petersburg. In his own words in the author’s note to Notes from Underground:

“I have tried to expose to the view of the public more distinctly than is commonly done, one of the characters of the recent past. He is one of the representatives of a generation still living.”`,
    cover: {
      height: 8,
      width: 5,
      spine: 0.533,
    },
    id: "gjyd6pv",
    price: 12.89,
    copyright:
      "Vithushan Sutharsan. All Rights Reserved - Standard Copyright License",
    contributors:
      "By: Fyodor Dostoevsky, Translated by: Constance Garnett, Compiled by: Vithushan Sutharsan",
    category: "Fiction",
    language: "English",
    pages: 210,
    binding: "Paperback Perfect Bound",
    dimensions: "Novella (5 x 8 in / 127 x 203 mm)",
    explicit: false,
    translator: "Constance Garnett",
    buyLinks: [
      {
        from: "Lulu Bookstore",
        link: "https://www.lulu.com/shop/fyodor-dostoevsky-and-constance-garnett-and-vithushan-sutharsan/white-nights-notes-from-underground/paperback/product-gjyd6pv.html",
      },
    ],
  },
  "845yvg2": {
    image: "/crime-and-punishment.png",
    coverparts: {
      front: "/crime-and-punishment/front.png",
      back: "/crime-and-punishment/back.png",
      spine: "/crime-and-punishment/spine.png",
    },
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    description: `The novel follows a desperate former law student, Raskolnikov, stricken by poverty and taken by the idea of the Great Man who discards all traditional morality. Raskolnikov commits a murder hoping to gain enough money from the murder to lift him out of poverty, but realises that he is not the great man he thought himself to be, and that he cannot escape his conscience. The remaining chapters then follow his punishment and end with his hope for redemption.`,
    cover: {
      height: 8,
      width: 5,
      spine: 1.49,
    },
    id: "845yvg2",
    price: 22.67,
    copyright:
      "Vithushan Sutharsan. All Rights Reserved - Standard Copyright License",
    contributors:
      "By: Fyodor Dostoevsky, Translated by: Constance Garnett, Compiled by: Vithushan Sutharsan",
    category: "Fiction",
    language: "English",
    pages: 635,
    binding: "Paperback Perfect Bound",
    dimensions: "Novella (5 x 8 in / 127 x 203 mm)",
    explicit: false,
    translator: "Constance Garnett",
    buyLinks: [
      {
        from: "Lulu Bookstore",
        link: "https://www.lulu.com/shop/fyodor-dostoevsky-and-constance-garnett-and-vithushan-sutharsan/crime-and-punishment/paperback/product-845yvg2.html",
      },
    ],
  },
  "845jw4k": {
    image: "/around-the-world-in-eighty-days.png",
    coverparts: {
      front: "/around-the-world-in-eighty-days/front.png",
      back: "/around-the-world-in-eighty-days/back.png",
      spine: "/around-the-world-in-eighty-days/spine.png",
    },
    title: "Around The World In Eighty Days",
    author: "Jules Verne",
    description: `Set in the 19th century, the novel follows a very calculated and punctual man, Phileas Fogg, who, after a bet made with his companions at the Reform Club, is taken by the mission to go around the world in exactly eighty days. Mr. Fogg then breaks the routine of his daily life which was so precious to him, and sets off to Dover with his valet, Passepartout. Together they pass through all sorts of lands and peoples, racing against the clock, until they finally return again to the club.`,
    cover: {
      height: 8,
      width: 5,
      spine: 0.601,
    },
    id: "845jw4k",
    price: 13.58,
    copyright:
      "Vithushan Sutharsan. All Rights Reserved - Standard Copyright License",
    contributors:
      "By: Jules Verne, Translated by: George Makepeace Towle, Compiled by: Vithushan Sutharsan",
    category: "Fiction",
    translator: "George Makepeace Towle",
    language: "English",
    pages: 240,
    binding: "Paperback Perfect Bound",
    dimensions: "Novella (5 x 8 in / 127 x 203 mm)",
    explicit: false,
    buyLinks: [
      {
        from: "Lulu Bookstore",
        link: "https://www.lulu.com/shop/jules-verne-and-george-makepeace-towle-and-vithushan-sutharsan/around-the-world-in-eighty-days/paperback/product-845jw4k.html",
      },
    ],
  },
};
