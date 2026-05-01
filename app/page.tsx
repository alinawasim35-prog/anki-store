export default function Home() {
  const products = [
    {
      name: "Biology Anki Deck",
      price: "$5",
      file: "/decks/sample.apkg",
    },
  ];

  return (
    <main style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>📚 Anki Deck Store</h1>
      <p>Buy and download premium study decks instantly.</p>

      <div style={{ marginTop: 30 }}>
        {products.map((p, i) => (
          <div key={i} style={{ marginBottom: 20 }}>
            <h2>{p.name}</h2>
            <p>Price: {p.price}</p>

            <a
              href={p.file}
              download
              style={{
                display: "inline-block",
                padding: "10px 15px",
                background: "black",
                color: "white",
                borderRadius: "8px",
                textDecoration: "none",
              }}
            >
              Download Deck
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}