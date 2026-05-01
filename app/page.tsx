export default function Home() {
  const products = [
    {
      name: "Biology Master Deck",
      price: "$5",
      desc: "High-yield biology flashcards for fast exam prep.",
      tag: "Best Seller",
    },
    {
      name: "Math Essentials Deck",
      price: "$7",
      desc: "Core formulas + problem solving mastery.",
      tag: "Top Rated",
    },
    {
      name: "English Vocabulary Deck",
      price: "$4",
      desc: "Academic + daily-use vocabulary builder.",
      tag: "New",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="px-6 py-20 text-center">
        <h1 className="text-6xl font-bold tracking-tight">
          Anki Deck Store
        </h1>

        <p className="mt-5 text-zinc-400 text-lg max-w-xl mx-auto">
          Premium flashcard decks designed to help you learn faster and retain more.
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <button className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition">
            Browse Decks
          </button>
          <button className="px-6 py-3 rounded-full border border-zinc-700 hover:border-zinc-400 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">

          {products.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 hover:border-zinc-600 transition hover:scale-[1.02]"
            >

              {/* TAG */}
              <span className="text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-300">
                {p.tag}
              </span>

              {/* NAME */}
              <h2 className="text-xl font-semibold mt-4">
                {p.name}
              </h2>

              {/* DESC */}
              <p className="text-zinc-400 mt-2 text-sm leading-relaxed">
                {p.desc}
              </p>

              {/* FOOTER */}
              <div className="mt-6 flex items-center justify-between">
                <span className="text-green-400 font-bold text-lg">
                  {p.price}
                </span>

                <button className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-zinc-200 transition">
                  Buy Now
                </button>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-xs text-zinc-500 pb-10">
        Built with Next.js • Anki Store
      </footer>

    </main>
  );
}