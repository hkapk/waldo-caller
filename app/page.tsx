"use client"
import Image from 'next/image';
import BingoCaller from '../components/BingoCaller';

export default function Home() {

  return (
    <main className="overflow-hidden">
      <div>
        <h1 className="sm:text-[64px] text-[50px] font-extrabold p-6">WABA Bingo</h1>
        <BingoCaller />
      </div>
    </main>
  )
}
