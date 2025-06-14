import { books } from "@/app/books";
import { caligraphy } from "@/app/fonts";
import Footer from "@/app/sections/footer";
import HomeBooks from "@/app/sections/home-books";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id }: { id: string } = await params;
  const book = books[id];
  const {
    image,
    coverparts,
    title,
    author,
    description,
    cover,
    price,
    copyright,
    contributors,
    category,
    language,
    pages,
    binding,
    dimensions,
    buyLinks,
    explicit,
    translator,
  } = book;

  return (
    <main className="bg-white min-h-screen flex flex-col gap-0 overflow-hidden">
      <Header page={2} />
      <div className="p-12 pr-0 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="flex justify-center">
          <div className="prose prose-stone h-full w-full">
            <h1 className="lg:text-5xl">
              <span className={caligraphy.className}>{title}</span>
              <br />
              <span className="text-2xl flex flex-col">
                <span className={caligraphy.className}>{author}</span>
                {translator && (
                  <span className={"text-sm " + caligraphy.className}>
                    <span>Translated by</span> {translator}
                  </span>
                )}
              </span>
            </h1>
            <div className="prose prose-stone">
              <h4>Buy for ${price} at: </h4>
              <div className="flex gap-2 flex-wrap">
                {buyLinks &&
                  buyLinks.map((linkInfo, i) => (
                    <Link key={i} href={linkInfo.link} target="_blank">
                      <Button>{linkInfo.from}</Button>
                    </Link>
                  ))}
              </div>
            </div>
            <p className="text-justify">{description}</p>
            <h4>Details</h4>
            <ul className="columns-2 md:gap-4 lg:gap-8">
              <li>
                <strong>Author:</strong> {author}{" "}
              </li>
              {translator && (
                <li>
                  <strong>Translator:</strong> {translator}{" "}
                </li>
              )}
              <li>
                <strong>Category:</strong> {category}{" "}
              </li>
              <li>
                <strong>Language:</strong> {language}{" "}
              </li>
              <li>
                <strong>Page Count:</strong> {pages}{" "}
              </li>
              <li>
                <strong>Binding:</strong> {binding}{" "}
              </li>
              <li>
                <strong>Dimensions:</strong> {dimensions}{" "}
              </li>
              <li>
                <strong>Contains Explicit Content:</strong>{" "}
                {explicit ? "Yes" : "No"}{" "}
              </li>
            </ul>
            <h4>Copyright</h4>
            <p>{copyright}</p>
            <h4>Contributors</h4>
            <p>{contributors}</p>
          </div>
        </div>
        <div className="overflow-hidden w-full">
          <BookStack
            title={title}
            author={author}
            coverwidth={cover.width}
            coverheight={cover.height}
            image={image}
            spines={new Array(3).fill([coverparts.spine, cover.spine])}
          />
        </div>
      </div>
      <HomeBooks />
      <Footer />
    </main>
  );
}

function BookStack({
  image,
  title,
  author,
  coverwidth,
  spines,
  coverheight,
  className,
}: {
  image: string;
  spines: any[];
  title: string;
  author: string;
  coverwidth: number;
  coverheight: number;
  className?: string;
}) {
  const widthvh = (80 * coverwidth) / coverheight;
  return (
    <div
      className={
        "h-full max-h-screen flex gap-1 w-full overflow-hidden " + className
      }
    >
      <div
        className={`h-[80vh] bg-stone-300 bg-contain flex border border-stone-200/20 shadow-md shadow-black relative aspect-[${coverheight}/${coverwidth}]`}
      >
        <div className="absolute z-50 border-r border-stone-200/20 w-[5%] h-[80vh] left-0" />
        <Image
          src={image}
          alt={`${title} - ${author}`}
          width={coverwidth * 600}
          height={coverheight * 600}
          className={`z-0 h-[80vh] max-h-[80vh] max-w-[${widthvh}vh] object-fit antialiased aspect-[${coverheight}/${coverwidth}]`}
        />
      </div>
      <div className="flex gap-1">
        {spines &&
          spines.map((spine, i) => (
            <Image
              key={i}
              src={spine[0]}
              alt={`${title} - ${author}`}
              height={coverheight * 600}
              width={(spine[1] as number) * 600}
              className={`z-0 h-[80vh] max-h-[${(80 * spine[1]) / coverheight}vh] w-auto object-contain antialiased aspect-[${coverheight}/${spine[1]}]`}
            />
          ))}
      </div>
    </div>
  );
}
