import React, { useState } from "react";

function App() {
  const [weather, setWeather] = useState("");
  const [length, setLength] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [loading, setLoading] = useState(false);

  const getSnack = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuggestion("");

    try {
      const response = await fetch(`http://localhost:4000/snack?weather=${weather}&length=${length}`);
      const data = await response.json();
      setSuggestion(data.suggestion);
    } catch (error) {
      setSuggestion("Error fetching snack suggestion.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 font-sans">
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-green-800 text-center mb-4">🥾 Trail Snack Picker</h1>
        <form onSubmit={getSnack} className="space-y-4">
          <div>
            <label className="block font-semibold mb-1">Weather</label>
            <select
              value={weather}
              onChange={(e) => setWeather(e.target.value)}
              className="w-full border p-2 rounded"
            >
              <option value="">Select...</option>
              <option value="hot">Hot</option>
              <option value="cold">Cold</option>
              <option value="rainy">Rainy</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-1">Hike Length</label>
            <select
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-full border p-2 rounded"
            >
              <option value="">Select...</option>
              <option value="short">Short</option>
              <option value="long">Long</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded w-full"
          >
            {loading ? "Finding..." : "Get Snack Suggestion"}
          </button>
        </form>

        <div className="mt-6 text-center text-green-900 font-medium text-lg">
          {suggestion && <p>{suggestion}</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
