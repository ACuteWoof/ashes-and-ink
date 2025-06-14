import type { Metadata } from "next";
import "./globals.css";
import { sans } from "./fonts";

export const metadata: Metadata = {
  title: "Ashes & Ink",
  description:
    "At Ashes & Ink, we aim for the best quality we could get with the design of each book, and for the benefit of you, fellow rebel, we also print books that you may request, in case we missed out on a valuable piece of writing in our store.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.className} antialiased scroll-smooth`}>
        {children}
      </body>
    </html>
  );
}
