const { useState } = React;

function App() {
  const [weather, setWeather] = useState("");
  const [length, setLength] = useState("");
  const [suggestion, setSuggestion] = useState("");

  function getSnack(weather, length) {
    weather = weather?.toLowerCase();
    length = length?.toLowerCase();

    if (!weather || !length) return "Please select both weather and hike length.";
    if (weather === "hot" && length === "long") return "Pack trail mix, jerky, and water-rich fruit like oranges.";
    if (weather === "hot" && length === "short") return "Bring a granola bar and an electrolyte drink.";
    if (weather === "cold" && length === "long") return "Peanut butter sandwiches, chocolate, and hot cocoa in a thermos.";
    if (weather === "cold" && length === "short") return "Nuts, a small energy bar, and warm tea.";
    if (weather === "rainy") return "Compact snacks like protein bars and dried fruit — avoid soggy items!";
    return "Classic trail mix and plenty of water always work!";
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuggestion(getSnack(weather, length));
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem", maxWidth: "400px", margin: "auto", background: "#f0fff4", borderRadius: "10px" }}>
      <h1 style={{ textAlign: "center", color: "#065f46" }}>🥾 Trail Snack Picker</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1rem" }}>
        <div>
          <label>Weather:</label>
          <select value={weather} onChange={e => setWeather(e.target.value)} style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}>
            <option value="">Select...</option>
            <option value="hot">Hot</option>
            <option value="cold">Cold</option>
            <option value="rainy">Rainy</option>
          </select>
        </div>
        <div>
          <label>Hike Length:</label>
          <select value={length} onChange={e => setLength(e.target.value)} style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}>
            <option value="">Select...</option>
            <option value="short">Short</option>
            <option value="long">Long</option>
          </select>
        </div>
        <button type="submit" style={{ background: "#047857", color: "white", padding: "0.5rem", borderRadius: "5px", border: "none" }}>
          Get Snack Suggestion
        </button>
      </form>
      {suggestion && <p style={{ marginTop: "1rem", textAlign: "center", color: "#065f46", fontWeight: "bold" }}>{suggestion}</p>}
    </div>
  );
}

// Render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
