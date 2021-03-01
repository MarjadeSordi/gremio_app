import { Header } from '../src/components/Header';
import Head from 'next/head';




export default function Home() {
  return (
    <div> 
   
      <Head>
        <title> Grêmio App</title>
        <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet" /> 
      </Head>
      <Header />
        </div>

);
}
