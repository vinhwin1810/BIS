import VerticalTiles from "./components/animata/preloader/vertical-tiles";

export default function Home() {
  return (
    <main className="h-screen w-full">
      <VerticalTiles
        animationDelay={0.2}
        animationDuration={0.5}
        minTileWidth={32}
        stagger={0.05}
        tileClassName="bg-gradient-to-r from-zinc-100 to-zinc-300"
      />
    </main>
  );
}
