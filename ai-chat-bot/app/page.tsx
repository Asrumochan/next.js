
"use client";

import { useState } from "react";
import generateTextAction from "./actions/aiActions";

export default function Home() {
  const [prompt, setPrompt] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSendPrompt = async () => {
    if (!prompt.trim()) return;

    try {
      setLoading(true);
      setError("");

      const response = await generateTextAction(prompt);

      setOutput(response);
      setPrompt("");
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex h-screen w-full flex-col items-center bg-gray-50 px-6 py-6">

      {output && (
        <div className="w-full max-w-3xl rounded-xl bg-white p-6 shadow-md">
          <h1 className="mb-4 text-2xl font-bold">
            AI Response:
          </h1>
          <p className="whitespace-pre-wrap text-gray-700">
            {output}
          </p>
        </div>
      )}

      {error && (
        <p className="text-red-500">{error}</p>
      )}

      <div className="fixed bottom-6 flex w-full max-w-3xl items-center gap-3 rounded-2xl border border-gray-200 bg-white p-3 shadow-lg">

        <input
          type="text"
          value={prompt}
          placeholder="Type your message..."
          className="flex-1 rounded-lg border border-gray-200 px-4 py-3 text-gray-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSendPrompt();
          }}
          disabled={loading}
        />

        <button
          className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          onClick={handleSendPrompt}
          disabled={loading || !prompt.trim()}
        >
          {loading ? "Generating..." : "Send"}
        </button>

      </div>
    </main>
  );
}
