import Head from 'next/head'
import { useContext, useEffect, useState } from 'react'

import Welcome from '../components/Welcome'
import { AppContext } from '../contexts/AppContext';
import Register from './register';

export default function Home() {
  const { isLoading, completeOnBoarding } = useContext(AppContext);

  return (
    <div className='w-full h-full'>
      <Head>
        <title>Heritteens</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='w-full h-full overflow-hidden'>
        {isLoading ? (
          <Welcome />
        ):(
          <Register />
        )}

      </main>
    </div>
  )
}
