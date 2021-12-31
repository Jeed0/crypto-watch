// == component NEXT
import Head from "next/head";
import Link from "next/link";

import Image from "next/image";

export default function Layout({ children, page }) {
    return (
        <div className="bg-blue-50 pt-5 text-center min-h-screen">
            <Head>
                <title>{page}</title>
            </Head>

            <header className="container-lg">
                <h1 className="text-5xl mb-2">CRYPTO WATCH</h1>

                <div className="inline-grid grid-cols-2 gap-x-10 p-4">

                    <Link href="/" passHref>
                        <button className="bg-blue-200 p-3 m-2 rounded-3xl  hover:shadow-md border-2 border-blue-300">
                            Accueil
                        </button>
                    </Link>

                    <Link href="/about" passHref>
                        <button className="bg-blue-200 p-3 m-2 rounded-3xl  hover:shadow-md border-2 border-blue-300">
                            A propos
                        </button>
                    </Link>
                </div>

                <div>
                    <Image
                        src="/Bitcoin.jpg"
                        alt="Bitcoin decoration"
                        width="400" height="25"
                        className="rounded-3xl object-cover"
                        quality={5}
                    />
                </div>

            </header>
            <main className="pt-4 mx-20" >
                {children}
            </main>

            <footer className="p-10">
                <Image
                    src="/Bitcoin.jpg"
                    alt="Bitcoin decoration footer"
                    width="1000" height="40"
                    className="rounded-3xl object-cover"
                    quality={100}
                />
                <ul className="pt-10 pb-4 flex justify-around">
                    <li>A propos</li>
                    <li>Qui sommes nous</li>
                    <li>Powered by Jeed0</li>
                </ul>
                <p>
                    Reprehenderit veniam incididunt do do commodo et ea eu aute aliqua laborum do. Ipsum enim et ea esse eiusmod aliqua est sit. Adipisicing dolore occaecat officia qui dolore ea exercitation commodo. Et deserunt sit enim dolor adipisicing.
                </p>
            </footer>

            <style jsx>{`
                p {
                    color: grey;
                }
            `}</style>


        </div>
    );
}