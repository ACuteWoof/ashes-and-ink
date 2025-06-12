import Footer from "@/app/sections/footer";
import Header from "@/components/header";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <main className="bg-white min-h-screen flex flex-col gap-0">
      <Header page={2} />
      <div className="h-screen">{id}</div>
      <Footer />
    </main>
  );
}
