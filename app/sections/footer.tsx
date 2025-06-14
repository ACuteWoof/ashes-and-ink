import { caligraphy } from "../fonts";
import Contact from "./contact";

export default function Footer() {
  return (
    <footer className="p-8 flex flex-col items-center bg-stone-100">
      <div className="flex flex-col items-center justify-center py-12">
        <div className="border-y-2 border-y-stone-950 md:min-w-md text-center w-fit py-8 px-12">
          <h1 className={"text-3xl " + caligraphy.className}>
            {"About Ashes & Ink"}
          </h1>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col items-center">
          <div className="prose prose-stone text-justify">
            <h2 className={caligraphy.className}>What We Do</h2>
            <p>
              We take public domain texts from the internet and publish them as
              paperback or hardback books that are printed on demand when you
              place an order meaning we <b>never</b> run out of stock.
            </p>
            <h2 className={caligraphy.className}>You Can Request a Book!</h2>
            <p>
              If a book that you would love to have is not available in our
              store, you can request it to be made by us for you as long as the
              content you want in the book is under the public domain in the US,
              UK, and the EU.
            </p>
            <p>
              If you want a book to be made for you alone and do not want it to
              be published on our site, the content can be anything that you
              have the rights to.
            </p>
            <p>
              If you want a book to be made for you alone and do not want it to
              To request a book, you can contact us from the contact form, or
              through any of our socials.
            </p>
            <h2 className={caligraphy.className}>Libri Latini</h2>
            <p>
              The books in the store for Latin and Greek books linked at the
              header as "Libri Latini" does not fall under any of the "about us"
              or copyright information found here. It is only linked as it is
              run by the same person. There are however plans for the future to
              merge the content of that store with {"Ashes & Ink"}.
            </p>
            <h2 className={caligraphy.className}>Copyright</h2>
            <p>
              The content (the ASCII text alone) by themselves are not protected
              by copyright. The texts are in the public domain and can be found
              on the internet.
            </p>
            <p>
              The cover design overall and the formatting are protected by
              copyright, but each book is different so you are advised to use
              the title-verso page to identify the copyright information for the
              book in question.
            </p>
          </div>
        </div>
        <Contact />
      </div>
    </footer>
  );
}
