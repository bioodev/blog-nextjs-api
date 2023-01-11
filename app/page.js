import Link from "next/link";

export default function HomePage() {
  return (
    <div className="container">
      <h1>🏴 Blog</h1>
      <h3>A simple example blog with Nextjs and API</h3>
      <Link className="button" href={"/posts"}>Check list of posts</Link>
    </div>
  );
}
