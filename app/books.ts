type Binding =
  | "Paperback Perfect Bound"
  | "Hardcover Case Wrap"
  | "Hardcover Linen Wrap";
type Paper =
  | "60# Cream — Uncoated"
  | "60# White — Uncoated"
  | "80# White — Coated";
type BuyLink = { from: string; link: string; price: number };

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
  paper: Paper;
  contributors: string;
  category: string;
  language: string;
  pages: number;
  binding: Binding;
  dimensions: string;
  buyLinks: BuyLink[];
  explicit: boolean;
  keywords: string[];
  translator?: string;
  illustrator?: string;
  isbn?: string;
  maxPrice?: number;
};

export const books: { [key: string]: Book } = {
  gjyd6pv: {
    image: "/white-nights-and-notes-from-underground/front.png",
    coverparts: {
      front: "/white-nights-and-notes-from-underground/front.png",
      spine: "/white-nights-and-notes-from-underground/spine.png",
      back: "/white-nights-and-notes-from-underground/back.png",
    },
    title: "White Nights & Notes from Underground",
    paper: "60# Cream — Uncoated",
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
    keywords: [
      "White Nights",
      "Notes from Underground",
      "Nastenka",
      "Liza",
      "Dostoevsky",
      "Fyodor",
      "Constance",
      "Garnett",
      "Russian",
    ],
    buyLinks: [
      {
        from: "Lulu Bookstore",
        link: "https://www.lulu.com/shop/fyodor-dostoevsky-and-constance-garnett-and-vithushan-sutharsan/white-nights-notes-from-underground/paperback/product-gjyd6pv.html",
        price: 12.89,
      },
    ],
  },
  "845yvg2": {
    image: "/crime-and-punishment/front.png",
    coverparts: {
      front: "/crime-and-punishment/front.png",
      back: "/crime-and-punishment/back.png",
      spine: "/crime-and-punishment/spine.png",
    },
    title: "Crime and Punishment",
    paper: "60# Cream — Uncoated",
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
    keywords: [
      "Dostoevsky",
      "Fyodor",
      "Fyodor Dostoevsky",
      "Constance",
      "Constance Garnett",
      "Garnett",
      "Raskolnikov",
      "Sonya",
      "Razumihin",
    ],
    buyLinks: [
      {
        from: "Lulu Bookstore",
        link: "https://www.lulu.com/shop/fyodor-dostoevsky-and-constance-garnett-and-vithushan-sutharsan/crime-and-punishment/paperback/product-845yvg2.html",
        price: 22.67,
      },
    ],
  },
  "845jw4k": {
    image: "/around-the-world-in-eighty-days/front.png",
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
    paper: "60# Cream — Uncoated",
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
    keywords: [
      "Jules",
      "Jules Verne",
      "Verne",
      "Around The World In 80 Days",
      "Around The World In Eighty Days",
      "Eighty",
      "80",
      "Around",
      "World",
      "Around World",
      "Around The World",
    ],
    buyLinks: [
      {
        from: "Lulu Bookstore",
        link: "https://www.lulu.com/shop/jules-verne-and-george-makepeace-towle-and-vithushan-sutharsan/around-the-world-in-eighty-days/paperback/product-845jw4k.html",
        price: 13.58,
      },
    ],
  },
  "959ded5": {
    image: "/jane-eyre/front.png",
    coverparts: {
      front: "/jane-eyre/front.png",
      back: "/jane-eyre/back.png",
      spine: "/jane-eyre/spine.png",
    },
    title: "Jane Eyre",
    paper: "60# Cream — Uncoated",
    author: "Charlotte Brontë",
    description: `This 19th century gothic bildungsroman is an autobiography of a fictional protagonist, Jane Eyre. In the 38 chapters of the novel, Jane outlines, starting from her childhood, five epochs of her life, describing in perfect prose the development of her morals, faith, and character leading up to her marriage.

This copy includes the original illustrations from F.H Townsend, and footnotes to translate the French and German phrases — which are not translated in the original copies as the people of Charlotte Brontë’s time and place were expected to be fluent in these languages.`,
    cover: {
      height: 8,
      width: 5,
      spine: 1.366,
    },
    id: "959ded5",
    price: 21.4,
    copyright:
      "Vithushan Sutharsan. All Rights Reserved - Standard Copyright License",
    contributors:
      "By: Charlotte Brontë, Illustrated by: Frederick Henry Townsend, Compiled by: Vithushan Sutharsan",
    category: "Fiction",
    illustrator: "Frederick Henry Townsend",
    language: "English",
    pages: 580,
    binding: "Paperback Perfect Bound",
    dimensions: "Novella (5 x 8 in / 127 x 203 mm)",
    explicit: false,
    keywords: [
      "jane",
      "jane eyre",
      "adele",
      "rochester",
      "reed",
      "rivers",
      "lowood",
      "gateshead",
      "helen",
      "romance",
      "gothic",
      "victorian",
    ],
    buyLinks: [
      {
        from: "Lulu Bookstore",
        link: "https://www.lulu.com/shop/charlotte-bront%C3%AB-and-frederick-henry-townsend-and-vithushan-sutharsan/jane-eyre/paperback/product-959ded5.html",
        price: 21.4,
      },
    ],
  },
  nv9e8nk: {
    image: "/the-picture-of-dorian-gray/front.png",
    coverparts: {
      front: "/the-picture-of-dorian-gray/front.png",
      back: "/the-picture-of-dorian-gray/back.png",
      spine: "/the-picture-of-dorian-gray/spine.png",
    },
    title: "The Picture of Dorian Gray",
    paper: "60# Cream — Uncoated",
    author: "Oscar Wilde",
    description: `As the subject of controversies, censorship and multiple rewrites, The Picture of Dorian Gray is still beloved by and is relevant to many across the globe. The novel follows the story of a painting and the man represented in the painting, Dorian Gray. Dorian Gray, the most beautiful man in London, tempted by Lord Henry's speeches on youth and beauty, as if it were not directly intended, curses himself by a wish to a life where it is no longer he who bears his sin and age but the painting. The novel then continues on how, when he later realises that his wish for youth has been granted, he treats his life and the people who are unfortunate enough to know him.`,
    cover: {
      height: 8,
      width: 5,
      spine: 0.605,
    },
    id: "nv9e8nk",
    price: 12.38,
    copyright:
      "Vithushan Sutharsan. All Rights Reserved - Standard Copyright License",
    contributors: "By: Oscar Wilde, Compiled by: Vithushan Sutharsan",
    category: "Fiction",
    language: "English",
    pages: 242,
    binding: "Paperback Perfect Bound",
    dimensions: "Novella (5 x 8 in / 127 x 203 mm)",
    explicit: false,
    keywords: [
      "dorian gray",
      "lord henry",
      "basil hallward",
      "dorian",
      "gray",
      "oscar wilde",
      "oscar",
      "wilde",
      "hedonism",
      "ethics",
      "morality",
      "beauty",
      "sibyl vane",
      "the portrait of dorian gray",
      "the painting of dorian gray",
      "portrait",
      "painting",
    ],
    buyLinks: [
      {
        from: "Lulu Bookstore",
        link: "https://www.lulu.com/shop/oscar-wilde-and-vithushan-sutharsan/the-picture-of-dorian-gray/paperback/product-nv9e8nk.html",
        price: 12.38,
      },
    ],
  },
};
