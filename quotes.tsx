'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { quotes } from './quotes'

export default function Home() {
  const [topic, setTopic] = useState("")
  const [results, setResults] = useState<string[]>([])

  const handleSubmit = () => {
    const filtered = quotes
      .filter(q => q.topic.toLowerCase() === topic.trim().toLowerCase())
      .slice(0, 3)
      .map(q => q.text)
    setResults(filtered)
  }

  return (
    <div className="min-h-screen bg-[#f5f0e6] text-[#2f2f2f] font-sans">
      {/* Header */}
      <header className="bg-[#3e2f1c] text-white text-center py-5 text-xl font-semibold tracking-wide">
        WELCOME TO MY QUOTE GENERATOR
      </header>

      {/* Banner */}
      <div className="relative w-full h-48 md:h-64 mt-4">
        <img
          src="/banner.jpeg"
          alt="Banner"
          className="object-cover w-full h-full opacity-75"
        />
        <div className="absolute inset-0 flex items-center justify-start px-4 text-left">
          <h2 className="text-white drop-shadow-lg text-2xl md:text-4xl font-bold leading-snug">
            Quickly generate meaningful <br />
            quotes to brighten your day!
          </h2>
        </div>
      </div>

      {/* Main Content */}
      <main className="px-6 py-10 max-w-4xl mx-auto text-center">

        <label className="block text-4xl mb-6 font-bold text-[#3e2f1c] font-[Playfair Display]">
          Enter Topic:
        </label>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-2 mb-10">
          <Input
  placeholder="enter topic like life, inspiration etc"
  value={topic}
  onChange={(e) => setTopic(e.target.value)}
  className="bg-[#6c5a50] text-[#f5f0e6] placeholder-[#d7cbbf] placeholder:text-xl w-full sm:w-[400px] h-[64px] px-6 text-xl rounded-xl font-[Playfair Display] shadow-md border-none"
/>

          <Button
            onClick={handleSubmit}
            className="bg-[#3e2f1c] hover:bg-[#5a422d] text-white px-8 h-[64px] text-lg rounded-xl font-[Playfair Display] shadow-md"
          >
            Get Quotes
          </Button>
        </div>

        {/* Results */}
        <section className="mt-10 space-y-4 text-left font-[Playfair Display]">
          {results.length > 0 ? (
            results.map((quote, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-md relative shadow-sm"
              >
                <span className="text-[#c9a66b] text-3xl absolute top-[-10px] left-[-10px]">“</span>
                <p className="text-md pl-4 pr-2">{quote}</p>
                <span className="text-[#c9a66b] text-3xl absolute bottom-[-10px] right-[-10px]">”</span>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-lg italic">No quotes found. Try another topic.</p>
          )}
        </section>
      </main>
    </div>
  )
}
