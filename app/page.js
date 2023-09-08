import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-white md:max-w-2xl mx-auto shadow-lg md:rounded-lg md:mt-8 overflow-hidden">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-8">
        <h1 className="font-bold text-xl "> Nekhu Masu Pasal </h1>
        <p className="text-opacity-90 text-slate-700 mt-4">
          Transaction History
        </p>
      </div>
      <div className="bg-gray-100 px-8 py-3 flex">
        <div className="grow"></div>
        <div>
          <Link
            href={'/transaction/new'}
            className="bg-blue-500 py-1 px-4 rounded-md text-white text-opacity-90"
          >
            Add Transaction
          </Link>
        </div>
      </div>
      <div>Table to add transaction from backend todo</div>
    </main>
  );
}
