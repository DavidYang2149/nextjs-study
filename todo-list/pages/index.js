import Head from "next/head";

export default function Home() {
  return (
    <div className="py-8 px-16">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-4xl font-bold">TO-DO List</h1>

      <div>
        <input type="text" className="border p-1" />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
          추가
        </button>
      </div>

      <ul className="list-disc">
        <li>
          할 일 내용
          <button className="ml-2 text-xs text-red text-red-500">[삭제]</button>
        </li>
      </ul>
    </div>
  );
}

// 26:07
