import Hero from "./Hero";

function Card({ heroes }) {
  return (
    <ul className="hero-grid">
      {heroes.map((hero) => (
        <Hero {...hero} key={hero.name} />
      ))}
    </ul>
  );
}

export default Card;
