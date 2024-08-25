import heroImage from "/hero_image.png";
const Header = () => {
  return (
    <header>
      <div></div>
      <h1>The Rick and Morty API</h1>
      <img src={heroImage} alt="Hero Image (Banner)" />
    </header>
  );
};

export default Header;
