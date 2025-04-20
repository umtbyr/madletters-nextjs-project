import Link from "next/link";
export default function Page() {
  //database call to get the latest quiz-id...

  return (
    <main className="flex flex-col items-center justify-center h-screen gap-4">
      <h1>Welcome to Quiz App</h1>
      <Link href="/" className="bg-amber-400 rounded-4xl p-4 text-2xl">
        Start today's quiz!
      </Link>
    </main>
  );
}
