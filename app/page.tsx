"use client"
import Image from 'next/image';
import BingoCaller from './BingoCaller';

export default function Home() {

  return (
    <main className="overflow-hidden">
      <div>
        <h1>WALDO Bingo Caller</h1>
        <BingoCaller />
      </div>
    </main>
  )
}
