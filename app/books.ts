type Binding =
  | "Paperback Perfect Bound"
  | "Hardcover Case Wrap"
  | "Hardcover Linen Wrap";
type Paper =
  | "60# Cream — Uncoated"
  | "60# White — Uncoated"
  | "80# White — Coated";

type BuyLink = { from: string; link: string; price: number };

type Category = "Classic Fiction" | "Classic Non-Fiction";

export type Book = {
  sortingCategory: Category;
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
    sortingCategory: "Classic Fiction",
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
    price: 13.2,
    copyright:
      "Vithushan Sutharsan. All Rights Reserved - Standard Copyright License",
    contributors: "By: Fyodor Dostoevsky, Translated by: Constance Garnett",
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
    sortingCategory: "Classic Fiction",
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
    price: 23.4,
    copyright:
      "Vithushan Sutharsan. All Rights Reserved - Standard Copyright License",
    contributors: "By: Fyodor Dostoevsky, Translated by: Constance Garnett",
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
    sortingCategory: "Classic Fiction",
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
    price: 13.92,
    paper: "60# Cream — Uncoated",
    copyright:
      "Vithushan Sutharsan. All Rights Reserved - Standard Copyright License",
    contributors: "By: Jules Verne, Translated by: George Makepeace Towle",
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
    sortingCategory: "Classic Fiction",
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
    price: 22.08,
    copyright:
      "Vithushan Sutharsan. All Rights Reserved - Standard Copyright License",
    contributors:
      "By: Charlotte Brontë, Illustrated by: Frederick Henry Townsend",
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
    sortingCategory: "Classic Fiction",
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
    contributors: "By: Oscar Wilde",
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
  e7d475j: {
    sortingCategory: "Classic Fiction",
    image: "/wuthering-heights/front.png",
    coverparts: {
      front: "/wuthering-heights/front.png",
      back: "/wuthering-heights/back.png",
      spine: "/wuthering-heights/spine.png",
    },
    title: "Wuthering Heights",
    paper: "60# Cream — Uncoated",
    author: "Emily Brontë",
    description: `Wuthering Heights is a house on the wild Yorkshire moors in which the protagonist, Heathcliff, is raised by the Earnshaw family.

The novel follows the life of Heathcliff, from his childhood to his death. Heathcliff was adopted, and he rises in this family until he was lowered to the status of a servant. Heathcliff then runs away when the woman he loved, Catherine, had decided to marry someone else. He then returns wealthier to seek revenge on both families. His passion for Catherine is so great that he inevitably causes immense destruction as his revenge.`,
    cover: {
      height: 8,
      width: 5,
      spine: 0.873,
    },
    id: "e7d475j",
    price: 14.32,
    copyright:
      "Vithushan Sutharsan. All Rights Reserved - Standard Copyright License",
    contributors: "By: Emily Brontë",
    category: "Fiction",
    language: "English",
    pages: 361,
    binding: "Paperback Perfect Bound",
    dimensions: "Novella (5 x 8 in / 127 x 203 mm)",
    explicit: false,
    keywords: [
      "heathcliff",
      "catherine earnshaw",
      "edgar linton",
      "hindley earnshaw",
      "isabella linton",
      "hareton earnshaw",
      "cathy linton",
      "linton heathcliff",
      "nelly dean",
      "mr. lockwood",
      "joseph",
      "revenge",
      "obsessive love",
      "social class",
      "redemption",
      "cycle of violence",
      "supernatural",
      "forgiveness",
      "yorkshire moors",
      "wuthering heights",
      "gothic",
      "unreliable narrator",
      "byronic hero",
      "gothic romance",
      "class struggle",
      "victorian",
    ],
    buyLinks: [
      {
        from: "Lulu Bookstore",
        link: "https://www.lulu.com/shop/emily-bront%C3%AB-and-vithushan-sutharsan/wuthering-heights/paperback/product-e7d475j.html",
        price: 14.32,
      },
    ],
  },
  jed8z4p: {
    sortingCategory: "Classic Non-Fiction",
    image: "/nicomachean/front.png",
    coverparts: {
      front: "/nicomachean/front.png",
      back: "/nicomachean/back.png",
      spine: "/nicomachean/spine.png",
    },
    title: "The Nicomachean Ethics",
    paper: "60# White — Uncoated",
    author: "Aristotle",
    description: `The Nicomachean Ethics is Aristotle’s most well known work on ethics, followed by The Eudemian Ethics (a work that shares similar themes but is less complete). 

The work is centered around how to live best, treating ethics as a practical science. It has been highly influential, along with The Metaphysics and the likes, in the works of many philosophers who came centuries after Aristotle, most famously in St. Thomas Aquinas, such that the influence still remains in the Catholic Church today, although they fell out of favor with those outside the Church during the enlightenment.`,
    cover: {
      height: 8,
      width: 5,
      spine: 0.871,
    },
    id: "jed8z4p",
    price: 16.8,
    copyright:
      "Vithushan Sutharsan. All Rights Reserved - Standard Copyright License",
    contributors: "By: Aristotle, Translated by: William Daniel Ross",
    category: "Reference",
    language: "English",
    pages: 360,
    binding: "Paperback Perfect Bound",
    dimensions: "Novella (5 x 8 in / 127 x 203 mm)",
    explicit: false,
    keywords: [
      "Eudaimonia",
      "The Human Good",
      "Final End",
      "Function Argument",
      "Telos",
      "Virtue Ethics",
      "Arete",
      "Virtue",
      "Excellence",
      "Character",
      "Hexis",
      "State of Character",
      "Habit",
      "Practical Wisdom",
      "Phronesis",
      "Intellectual Virute",
      "Moral Virtue",
      "Ethical Virtue",
      "Virtue of Character",
      "Golden Mean",
      "Doctrine of the Mean",
      "Intermediate",
      "Deficiency",
      "Excesss",
      "Voluntary Action",
      "Involuntary Action",
      "Choice",
      "Prohairesis",
      "Deliberation",
      "Wish",
      "Rational Principle",
      "Logos",
      "Practical Reasoning",
      "Contemplation",
      "Theoria",
      "Theoretical Wisdom",
      "Sophia",
      "Pleasure",
      "Pain",
      "Friendship",
      "Philia",
      "Types of Friendship",
      "Utility",
      "Goodness",
      "Complete Friendship",
      "Injustice",
      "Justice",
      "Particular Justice",
      "Distributive Justice",
      "Reciprocity",
    ],
    buyLinks: [
      {
        from: "Lulu Bookstore",
        link: "https://www.lulu.com/shop/aristotle-and-william-daniel-ross-and-vithushan-sutharsan/the-nicomachean-ethics/paperback/product-jed8z4p.html",
        price: 16.8,
      },
    ],
  },

  "458eyp8": {
    sortingCategory: "Classic Non-Fiction",
    image: "/augustine-confessions/front.png",
    coverparts: {
      front: "/augustine-confessions/front.png",
      back: "/augustine-confessions/back.png",
      spine: "/augustine-confessions/spine.png",
    },
    title: "Confessions",
    paper: "60# Cream — Uncoated",
    author: "Augustine of Hippo",
    description: `“Too late loved I Thee, O Thou Beauty of ancient days, yet ever new! too late I loved Thee! And behold, Thou wert within, and I abroad, and there I searched for Thee; deformed I, plunging amid those fair forms which Thou hadst made. Thou wert with me, but I was not with Thee. Things held me far from Thee, which, unless they were in Thee, were not at all. Thou calledst, and shoutedst, and burstest my deafness. Thou flashedst, shonest, and scatteredst my blindness. Thou breathedst odours, and I drew in breath and panted for Thee. I tasted, and hunger and thirst. Thou touchedst me, and I burned for Thy peace.”`,
    cover: {
      height: 8,
      width: 5,
      spine: 0.722,
    },
    id: "458eyp8",
    price: 15.22,
    copyright:
      "Vithushan Sutharsan. All Rights Reserved - Standard Copyright License",
    contributors:
      "By: Augustine of Hippo, Translated by: Edward Bouverie Pusey",
    category: "Religion & Spirituality",
    language: "English",
    pages: 294,
    binding: "Paperback Perfect Bound",
    dimensions: "Novella (5 x 8 in / 127 x 203 mm)",
    explicit: false,
    keywords: [
      "confession",
      "sin",
      "grace",
      "conversion",
      "redemption",
      "providence",
      "free will",
      "predestination",
      "evil",
      "theodicy",
      "restlessness",
      "memory",
      "time",
      "eternity",
      "love",
      "creation",
      "materialism",
      "neoplatonism",
      "monica",
      "patricius",
      "adeodatus",
      "ambrose",
      "faustus",
      "manicheans",
      "autobiography",
      "prayer",
      "memoir",
      "spiritual journey",
      "intellectual journey",
      "biblical exegesis",
      "theology",
      "pear theft",
      "death of a friend",
      "tolle lege",
      "garden conversion",
      "vision at ostia",
      "original sin",
      "concupiscence",
      "asceticism",
      "weill",
      "flesh",
      "spirit",
      "heart",
      "truth",
      "search for God",
      "inner self",
      "vice",
      "virtue",
      "happiness",
      "late antiquity",
    ],
    buyLinks: [
      {
        from: "Lulu Bookstore",
        link: "https://www.lulu.com/shop/augustine-of-hippo-and-edward-bouverie-pusey-and-vithushan-sutharsan/confessions/paperback/product-458eyp8.html",
        price: 15.22,
      },
    ],
  },
  "95jp2k6": {
    paper: "60# Cream — Uncoated",
    dimensions: "Novella (5 x 8 in / 127 x 203 mm)",
    image: "/frankenstein/front.png",
    coverparts: {
      front: "/frankenstein/front.png",
      back: "/frankenstein/back.png",
      spine: "/frankenstein/spine.png",
    },
    title: "Frankenstein",
    author: "Mary Shelley",
    description:
      "A gothic novel about the scientist, Victor Frankenstein, who creates a sentient being. This invention of his haunts him for the rest of his life. The novel portrays his story through the lens of Robert Walton, who writes to Mrs. Saville on his voyage.",
    cover: {
      height: 8,
      width: 5,
      spine: 0.75,
    },
    id: "95jp2k6",
    price: 21.77,
    sortingCategory: "Classic Fiction",
    binding: "Hardcover Case Wrap",
    copyright:
      "Vithushan Sutharsan. All Rights Reserved - Standard Copyright License",
    contributors: "By: Mary Shelley",
    category: "Fiction",
    language: "English",
    pages: 219,
    explicit: false,
    keywords: [
      "Victor Frankenstein",
      "Mary Shelley",
      "Frankenstein",
      "Gothic",
      "Science Fiction",
      "Science",
      "Technology",
      "Victor",
      "Frankenstein's monster",
      "Monster",
      "Monsters",
      "Creature",
      "Creatures",
      "Frankenstein's monster",
      "Monster",
      "Monsters",
      "Creature",
      "Creatures",
    ],
    buyLinks: [
      {
        from: "Lulu Bookstore",
        link: "https://www.lulu.com/shop/mary-shelley/frankenstein/hardcover/product-95jp2k6.html",
        price: 21.77,
      },
    ],
  },

  "84j2zek": {
    title: "St. Francis of Assisi & St. Thomas Aquinas",
    author: "G. K. Chesterton",
    description: `A compilation of two biographies of two great saints written by G.K. Chesterton.

"This book makes no pretence to be anything but a popular sketch of a great historical character who ought to be more popular. Its aim will be achieved, if it leads those who have hardly even heard of St. Thomas Aquinas to read about him in better books. But from this necessary limitation certain consequences follow, which should perhaps be allowed for from the start." - G.K. Chesterton (introductory note to St. Thomas Aquinas)`,
    cover: {
      height: 8,
      width: 5,
      spine: 0.875,
    },
    id: "84j2zek",
    price: 22.73,
    copyright:
      "Vithushan Sutharsan. All Rights Reserved - Standard Copyright License",
    contributors: "By: G. K. Chesterton",
    category: "Biography",
    language: "English",
    pages: 259,
    binding: "Hardcover Case Wrap",
    dimensions: "Novella (5 x 8 in / 127 x 203 mm)",
    explicit: false,
    keywords: [
      "St. Francis of Assisi",
      "St. Thomas Aquinas",
      "G. K. Chesterton",
      "Biography",
      "Biographies",
      "Thomas Aquinas",
      "Francis of Assisi",
      "Francisco de Assis",
      "Francisco de Assisi",
      "Franciscus de Assisi",
      "Franciscus de Assis",
      "Assisi",
      "Assis",
      "Aquinas",
      "Aquino",
      "Aquino",
    ],
    buyLinks: [
      {
        from: "Lulu Bookstore",
        link: "https://www.lulu.com/shop/gk-chesterton/st-francis-of-assisi-st-thomas-aquinas/hardcover/product-84j2zek.html",
        price: 22.73,
      },
    ],
    coverparts: {
      spine: "/francis-and-thomas/spine.png",
      front: "/francis-and-thomas/front.png",
      back: "/francis-and-thomas/back.png",
    },
    image: "/francis-and-thomas/front.png",
    paper: "60# White — Uncoated",
    sortingCategory: "Classic Non-Fiction",
  },
};
