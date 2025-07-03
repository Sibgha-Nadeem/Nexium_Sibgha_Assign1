"use client";

import { useState } from "react";

export default function QuoteGeneratorPage() {
  const [topic, setTopic] = useState("");
  const [quotes, setQuotes] = useState<string[]>([
    "Life is what happens when you’re busy making other plans.",
    "Get busy living or get busy dying.",
    "Dream big and dare to fail.",
    "Your time is limited, don’t waste it.",
  ]);

  const handleGetQuotes = () => {
    // TODO: Replace this with API logic
    console.log(`Fetching quotes for topic: ${topic}`);
  };

  return (
    <div className="min-h-screen bg-[#f5f0e6] text-[#2f2f2f] font-sans">
      {/* Header */}
      <header className="bg-[#3e2f1c] text-white text-center py-5 text-xl font-semibold tracking-wide">
        MY QUOTE GENERATOR
      </header>

      {/* Banner */}
      <div
        className="bg-cover bg-center text-center text-white py-6 px-4"
        style={{
          backgroundImage: "url('banner.jpeg')", // <-- Put your banner image in /public
        }}
      >
        <h2 className="text-xl md:text-2xl font-light leading-relaxed">
          Quickly generate meaningful <br />
          quotes to brighten your day!
        </h2>
      </div>

      {/* Input Section */}
      <section className="py-10 text-center">
        <label className="block text-lg mb-3 font-medium">Enter Topic:</label>
        <div className="flex justify-center items-center gap-2 flex-wrap">
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="enter topic like life, inspiration etc"
            className="bg-[#6c5a50] placeholder-[#e5e5e5] text-white px-4 py-2 rounded-md shadow-md w-72 focus:outline-none"
          />
          <button
            onClick={handleGetQuotes}
            className="bg-[#3e2f1c] hover:bg-[#5a422d] text-white px-4 py-2 rounded-md shadow-md"
          >
            Get Quotes
          </button>
        </div>
      </section>

      {/* Quotes Display */}
      <section className="px-6 md:px-12 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quotes.map((quote, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-md relative shadow-sm"
            >
              <span className="text-[#c9a66b] text-3xl absolute top-[-10px] left-[-10px]">“</span>
              <p className="text-md pl-4 pr-2">{quote}</p>
              <span className="text-[#c9a66b] text-3xl absolute bottom-[-10px] right-[-10px]">”</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
