import './Hero.css'; // Make sure to link the CSS file below

const Hero = () => {
  return (
    <section className="hero-split-container">
      {/* Left Column: Typography & Branding Details */}
      <div className="hero-left-content">
        <div className="hero-text-wrapper">
          <span className="hero-tagline">Available for freelance</span>
          <h1 className="hero-heading">
            Building digital spaces that balance structure with aesthetic.
          </h1>
          <p className="hero-description">
            I design and implement highly dynamic interfaces, responsive
            interactive platforms, and robust functional workflows. Take a look
            through my latest featured builds below.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              Explore Work
            </a>
            <a href="#contact" className="btn-secondary">
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Right Column: Visual Frame */}
      <div className="hero-right-image">
        <img
          src="https://picsum.photos/1000/1200?random=10"
          alt="Creative workspace and minimalist desk setup portfolio feature"
          loading="eager"
        />
      </div>
    </section>
  );
};

export default Hero;
