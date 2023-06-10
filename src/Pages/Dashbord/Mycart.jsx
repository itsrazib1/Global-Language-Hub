

const WelcomePage = () => {
  const heroStyle = {
    backgroundImage: `url(https://i.ibb.co/m0g899s/3545f49ee7278db6a6d44e62e4e9bfeb.jpg)`,
  };

  return (
    <div className="hero h-[500px] p-10" style={heroStyle}>
      <div className="hero-overlay bg-opacity-20"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md pt-72 text-black">
          
          <p className="mb-5">
          Explore and discover amazing content and services.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
