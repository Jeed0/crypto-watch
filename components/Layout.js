// == component NEXT
import Head from "next/head";
import Link from "next/link";

export default function Layout({ children, page }) {
    return (
      <div className="bg-blue-50 pt-5 text-center min-h-screen">
        <Head>
                <title>{page}</title>
        </Head>
        <header className="container-lg">
        <h1 className="text-5xl mb-2">CRYPTO WATCH</h1>
        <div className="inline-grid gird-cols-2 gap-x-10 p-4">
        </div>
        </header>
            {children}
        </div>
    );
}