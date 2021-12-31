import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout page="Crypto Watch - Accueil">
    <h1 className="text-4xl">ACCUEIL</h1>
    </Layout>
  )
}


// fetch by server, rendered on a static generation
export async function getStaticProps(context) {
  try {
    const res = await fetch(
      "https://api.nomics.com/v1/currencies/ticker?key=a76a344ed6c9b0bb167f3b7efe6f6aaa&ids=BTC,ETH,XRP&interval=1d,30d,365d"
    ).then((res) => res.json());

    return {
      props: { res },
    };
  } catch (err) {
    console.error(err);
  }
}