'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import quotes from './quotes'; 

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
    <div className="min-h-screen bg-[#f7faff] text-[#1f3b73] font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#1f3b73] to-[#274c9b] text-white py-6 px-4 shadow-md sticky top-0 z-50">
  <div className="max-w-7xl mx-auto flex items-center justify-between">
    {/* Logo + Title */}
    <div className="flex items-center space-x-3">
      <span className="text-3xl">S:Q</span>
      <h1 className="text-2xl sm:text-3xl font-bold font-[Playfair Display] tracking-wide">
        Quote Generator
      </h1>
    </div>
  </div>
</header>


      {/* Banner */}
      <div className="relative w-full h-52 md:h-64 mt-4">
        <img
          src="/banner.jpeg"
          alt="Banner"
          className="object-cover w-full h-full opacity-100"
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
        {/* Intro Section */}
        <section className="mt-12 mb-16 text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1f3b73] mb-6 font-[Playfair Display]">
            Free Quote Generator
          </h2>
          <p className="text-lg md:text-xl text-[#3d5b8d] max-w-3xl mx-auto leading-relaxed font-[Playfair Display]">
            Crafting clear, engaging Quotes has never been easier. With our AI Quote generator, you can instantly create beautifully structured lines for essays, blog posts, research papers, emails, and more.
          </p>
        </section>

        {/* Input + Button */}
        <label className="block text-4xl mb-6 font-bold text-[#1f3b73] font-[Playfair Display]">
          Enter Topic:
        </label>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-2 mb-10">
          <Input
            placeholder="Enter a topic (e.g., life, success, happiness)"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="bg-white text-[#1f3b73] placeholder-[#8aa4c4] placeholder:text-base w-full sm:w-[400px] h-[64px] px-6 text-xl rounded-xl border border-[#d0dff5] shadow-sm focus:ring-2 focus:ring-[#4a90e2] font-[Playfair Display]"
          />

          <Button
            onClick={handleSubmit}
            className="bg-[#1f3b73] hover:bg-[#274c9b] text-white px-8 h-[64px] text-lg rounded-xl font-[Playfair Display] shadow-md"
          >
            Get Quotes
          </Button>
        </div>

        {/* Results Section */}
        <section className="mt-10 space-y-6 text-left font-[Playfair Display]">
          {results.length > 0 ? (
            results.map((quote, i) => (
              <div
                key={i}
                className="relative bg-white border border-[#d0dff5] p-6 rounded-2xl shadow-md transition hover:shadow-lg"
              >
                <span className="text-[#4a90e2] text-4xl absolute top-[-10px] left-[-10px]">“</span>
                <p className="text-[#1f3b73] text-lg md:text-xl pl-4 pr-2 leading-relaxed">
                  {quote}
                </p>
                <span className="text-[#4a90e2] text-4xl absolute bottom-[-10px] right-[-10px]">”</span>
              </div>
            ))
          ) : (
            <p className="text-[#7a8ca9] text-lg italic text-center">
              No quotes found. Try another topic.
            </p>
          )}
        </section>

        {/* Features Section */}
        <section className="mt-20 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1f3b73] mb-12 font-[Playfair Display]">
            Work with the industry-leading <br /> Quotes generator
          </h2>

          <p className="text-center max-w-4xl mx-auto text-lg md:text-xl text-[#3d5b8d] mb-16">
            Sibgha’s free quotes generator helps you create impactful, well-structured quotes tailored to your content—whether it’s an essay, research paper, blog post, or business report.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto text-center">
            {[
              {
                title: "Free to use",
                desc: "Generate quotes at no cost—no ads, no hidden fees.",
              },
              {
                title: "Simple and fast",
                desc: "Enter your topic and get a quote in seconds.",
              },
              {
                title: "Saves time",
                desc: "Skip the research—get a strong quote instantly and keep moving.",
              },
              {
                title: "Engaging and clear",
                desc: "Content is easy to read and crafted to make an impact.",
              },
              {
                title: "Versatile",
                desc: "Use for blog posts, essays, reports, captions, and more.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-md transition duration-300 hover:shadow-xl border border-[#d0dff5] hover:-translate-y-1"
              >
                <div className="text-3xl mb-4 text-[#4a90e2]">✔</div>
                <h3 className="text-xl font-semibold mb-2 text-[#1f3b73]">{item.title}</h3>
                <p className="text-base text-[#3d5b8d] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Inspiration Section */}
        <section className="mt-24 px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1f3b73] leading-snug font-[Playfair Display] mb-6">
            Find inspiration in these quotes examples
          </h2>
          <p className="text-lg md:text-xl text-[#3d5b8d] max-w-3xl mx-auto leading-relaxed mb-12">
            Start your writing with confidence using our quotes generator. Get quotes according to your topic
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
            {[
              "Life is not about finding yourself; it's about creating yourself.",
              "Inspiration exists, but it has to find you working.",
              "Every moment is a fresh beginning, waiting to be written.",
            ].map((quote, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-md border border-[#d0dff5] relative font-[Playfair Display]"
              >
                <span className="text-[#4a90e2] text-3xl absolute top-[-10px] left-[-10px]">“</span>
                <p className="text-md text-[#1f3b73] leading-relaxed pl-4 pr-2">
                  {quote}
                </p>
                <span className="text-[#4a90e2] text-3xl absolute bottom-[-10px] right-[-10px]">”</span>
              </div>
            ))}
          </div>
        </section>
</main>
    </div>
  )
}
