const CharacterCard = ({ character }) => {
  const { id, name, image, status, species, location, episode } = character;
  return (
    <div>
      <img src={image} alt={name + " image"} />
      <div>
        <span>
          <h3>{name}</h3>
          <p>
            * {status} - {species}
          </p>
        </span>
        <span>
          <p>Last known location:</p>
          <p>{location.name}</p>
        </span>
        <span>
          <p>First seen in:</p>
          <p>{episode[0].name}</p>
        </span>
      </div>
    </div>
  );
};

export default CharacterCard;
