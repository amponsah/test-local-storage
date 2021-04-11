import dynamic from 'next/dynamic';

const HomePage = dynamic(() => import('../components/Home'), {
  ssr: false,
});

function Home() {
  return <HomePage />;
}

export default Home;
