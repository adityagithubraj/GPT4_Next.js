
import Head from 'next/head';
import Chat from './Chat';

export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Pro Chat</title>
      </Head>
      <Chat />
    </div>
  );
}
// hi