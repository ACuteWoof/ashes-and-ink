import Header from "@/components/header";
import Footer from "../sections/footer";

export default function Page() {
  return (
    <main className="bg-white min-h-screen flex flex-col gap-0">
      <Header page={1} />
      <div className="h-screen"></div>
      <Footer />
    </main>
  );
}
