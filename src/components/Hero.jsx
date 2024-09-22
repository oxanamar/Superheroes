function Hero({
  name,
  universe,
  alterego,
  occupation,
  friends,
  superpowers,
  url,
}) {
  return (
    <li className="hero-card">
      <h2>{name}</h2>
      <p>
        <strong>Вселенная:</strong>
        {universe}
      </p>
      <p>
        <strong>Альтер эго:</strong>
        {alterego}
      </p>
      <p>
        <strong>Род деятельности:</strong>
        {occupation}
      </p>
      <p>
        <strong>Друзья:</strong>
        {friends}
      </p>
      <p>
        <strong>Суперсилы:</strong>
        {superpowers}
      </p>
      <img src={url} alt={name}></img>
    </li>
  );
}

export default Hero;
