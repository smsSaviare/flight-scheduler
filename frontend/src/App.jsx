import { Routes, Route, Link } from "react-router-dom";

function Aviones() {
  return <h2>Página de Aviones ✈️</h2>;
}

function Pilotos() {
  return <h2>Página de Pilotos 👨‍✈️</h2>;
}

function Lider() {
  return <h2>Página del Líder 🛠️</h2>;
}

function App() {
  return (
    <div>
      <h1>Flight Scheduler</h1>
      <nav>
        <Link to="/">Aviones</Link> |{" "}
        <Link to="/pilotos">Pilotos</Link> |{" "}
        <Link to="/lider">Líder</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Aviones />} />
        <Route path="/pilotos" element={<Pilotos />} />
        <Route path="/lider" element={<Lider />} />
      </Routes>
    </div>
  );
}

export default App;
