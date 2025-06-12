type Binding = "Paperback Perfect Bound" | "Hardcover";
type BuyLink = { from: string; link: string };

type Book = {
  image: string;
  title: string;
  author: string;
  description: string;
  cover: {
    height: number;
    width: number;
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
};

export const books: Book[] = [
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
    buyLinks: [
      {
        from: "Lulu",
        link: "https://www.lulu.com/shop/fyodor-dostoevsky-and-constance-garnett-and-vithushan-sutharsan/white-nights-notes-from-underground/paperback/product-gjyd6pv.html",
      },
    ],
  },
  {
    image: "/crime-and-punishment.png",
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    description: `The novel follows a desperate former law student, Raskolnikov, stricken by poverty and taken by the idea of the Great Man who discards all traditional morality. Raskolnikov commits a murder hoping to gain enough money from the murder to lift him out of poverty, but realises that he is not the great man he thought himself to be, and that he cannot escape his conscience. The remaining chapters then follow his punishment and end with his hope for redemption.`,
    cover: {
      height: 8,
      width: 5,
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
    buyLinks: [
      {
        from: "Lulu",
        link: "https://www.lulu.com/shop/fyodor-dostoevsky-and-constance-garnett-and-vithushan-sutharsan/crime-and-punishment/paperback/product-845yvg2.html",
      },
    ],
  },
];
