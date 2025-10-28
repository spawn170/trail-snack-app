const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

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

app.get("/snack", (req, res) => {
  const { weather, length } = req.query;
  res.json({ suggestion: getSnack(weather, length) });
});

app.listen(PORT, () => console.log(`🥾 Server running on http://localhost:${PORT}`));
