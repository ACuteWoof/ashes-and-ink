import type { Metadata } from "next";
import "./globals.css";
import { base } from "./fonts";

export const metadata: Metadata = {
  title: "Ashes & Ink",
  description:
    "At Ashes & Ink, we aim for the best quality we could get with the design of each book, and for the benefit of you, fellow rebel, we also print books that you may request, in case we missed out on a valuable piece of writing in our store.",
  icons: "/icon.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${base.className} antialiased scroll-smooth`}>
        {children}
      </body>
    </html>
  );
}
