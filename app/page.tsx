import Image from "next/image";

export default function Home() {
  const products = [
    {
      name: "Biology Master Deck",
      price: "$5",
      desc: "High-yield biology flashcards for exams.",
      file: "/decks/sample.apkg",
    },
    {
      name: "Math Essentials Deck",
      price: "$7",
      desc: "Core formulas + problem solving cards.",
      file: "/decks/sample.apkg",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-zinc-100 text-zinc-900">
      
      {/* HEADER */}
      <div className="max-w-5xl mx-auto px-6 pt-16 text-center">
        <h1 className="text-5xl font-bold tracking-tight">
          📚 Anki Deck Store
        </h1>
        <p className="mt-4 text-lg text-zinc-600">
          Premium study decks to boost your learning speed.
        </p>
      </div>

      {/* PRODUCTS */}
      <div className="max-w-5xl mx-auto px-6 mt-12 grid gap-6 md:grid-cols-2">
        {products.map((p, i) => (
          <div
            key={i}
            className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold">{p.name}</h2>
            <p className="text-zinc-600 mt-2">{p.desc}</p>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-lg font-bold">{p.price}</span>

              <a
                href={p.file}
                download
                className="px-4 py-2 rounded-full bg-black text-white text-sm hover:bg-zinc-800"
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <footer className="text-center text-sm text-zinc-500 mt-16 pb-10">
        Built with Next.js • Anki Store
      </footer>
    </main>
  );
}