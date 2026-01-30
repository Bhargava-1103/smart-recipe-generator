
import { useEffect, useState } from "react";
import data from "./recipes.json";

export default function App() {
  const [ingredients, setIngredients] = useState("");
  const [diet, setDiet] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [maxTime, setMaxTime] = useState("");
  const [serving, setServing] = useState(1);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ratings, setRatings] = useState(() => JSON.parse(localStorage.getItem("ratings")||"{}"));
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem("favorites")||"[]"));

  useEffect(()=>localStorage.setItem("ratings", JSON.stringify(ratings)),[ratings]);
  useEffect(()=>localStorage.setItem("favorites", JSON.stringify(favorites)),[favorites]);

  const generate = () => {
    setLoading(true);
    const userIng = ingredients.split(",").map(i=>i.trim().toLowerCase()).filter(Boolean);
    const res = data.filter(r => {
      const ingMatch = userIng.length ? r.ingredients.every(i=>userIng.includes(i)) : true;
      const dietMatch = diet ? r.diet===diet : true;
      const diffMatch = difficulty ? r.difficulty===difficulty : true;
      const timeMatch = maxTime ? r.time<=maxTime : true;
      return ingMatch && dietMatch && diffMatch && timeMatch;
    });
    setTimeout(()=>{ setRecipes(res); setLoading(false); }, 400);
  };

  return (
    <div className="container">
      <h1>🍲 Smart Recipe Generator</h1>

      <div className="controls">
        <input placeholder="Ingredients (comma separated)" value={ingredients} onChange={e=>setIngredients(e.target.value)} />
        <select value={diet} onChange={e=>setDiet(e.target.value)}>
          <option value="">Any Diet</option>
          <option value="vegan">Vegan</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="gluten-free">Gluten Free</option>
          <option value="non-vegetarian">Non Vegetarian</option>
        </select>

        <select value={difficulty} onChange={e=>setDifficulty(e.target.value)}>
          <option value="">Any Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
        </select>
        <input type="number" placeholder="Max cooking time" value={maxTime} onChange={e=>setMaxTime(e.target.value)} />
        <select value={serving} onChange={e=>setServing(+e.target.value)}>
          <option value={1}>1x Serving</option>
          <option value={2}>2x Serving</option>
          <option value={3}>3x Serving</option>
        </select>
        <button onClick={generate}>Generate Recipes</button>
      </div>

      {loading && <p>Loading...</p>}
      {!loading && recipes.map(r => (
        <div key={r.id} className="card">
          <h3>{r.name}</h3>
          <div>
            <span className="badge">{r.diet}</span>
            <span className="badge">{r.difficulty}</span>
            <span className="badge">{r.time} min</span>
          </div>
          <p>Calories: {r.calories * serving} | Protein: {r.protein}</p>
          <p className="small">Substitutions: soy sauce → tamari, paneer → tofu</p>
          <ul>{r.steps.map((s,i)=><li key={i}>{s}</li>)}</ul>
          <div>
            {[1,2,3,4,5].map(v=>(
              <span key={v} className="star" onClick={()=>setRatings(prev=>({...prev,[r.id]:v}))}>{(JSON.parse(localStorage.getItem("ratings")||"{}")[r.id]||0)>=v ? "⭐":"☆"}</span>
            ))}
            <button onClick={()=>setFavorites(prev=>prev.includes(r.id)?prev.filter(x=>x!==r.id):[...prev,r.id])} style={{marginLeft:8}}>
              {(JSON.parse(localStorage.getItem("favorites")||"[]")).includes(r.id) ? "❤️ Saved" : "🤍 Save"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
