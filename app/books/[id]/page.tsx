import { books } from "@/app/books";
import { caligraphy } from "@/app/fonts";
import Footer from "@/app/sections/footer";
import HomeBooks from "@/app/sections/home-books";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import BookStack from "./bookstack";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id }: { id: string } = await params;
  const book = books[id];
  const { image, title, author, description, cover } = book;

  return {
    title: `${title} - ${author}`,
    description,
    authors: [{ name: author }],
    openGraph: {
      images: [
        { url: image, width: cover.width * 600, height: cover.height * 600 },
      ],
    },
  };
}

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
    illustrator,
    copyright,
    contributors,
    category,
    paper,
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
      <div className="p-12 lg:pr-0 grid grid-cols-1 lg:grid-cols-2 gap-12">
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
                )}{" "}
                {illustrator && (
                  <span className={"text-sm " + caligraphy.className}>
                    <span>Illustrated by</span> {illustrator}
                  </span>
                )}
              </span>
            </h1>
            <div className="prose prose-stone">
              <h4>Buy at: </h4>
              <div className="flex gap-2 flex-wrap">
                {buyLinks &&
                  buyLinks.map((linkInfo, i) => (
                    <Link key={i} href={linkInfo.link} target="_blank">
                      <Button>
                        {linkInfo.from} for ${linkInfo.price}
                      </Button>
                    </Link>
                  ))}
              </div>
            </div>
            <Image
              src={image}
              alt={`${title} - ${author}`}
              width={cover.width * 600}
              height={cover.height * 600}
              className={`object-contain lg:hidden`}
            />
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
                <strong>Paper Type:</strong> {paper}{" "}
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
            backImage={coverparts.back}
            spines={new Array(3).fill([coverparts.spine, cover.spine])}
          />
        </div>
      </div>
      <HomeBooks />
      <Footer />
    </main>
  );
}
