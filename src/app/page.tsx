import site from "@/content/site.json";

export default function Home() {
  return (
    <main id="main" className="pt-navbar">
      <h1 className="text-display text-text">{site.name}</h1>
    </main>
  );
}
