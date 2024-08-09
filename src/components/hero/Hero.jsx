import HeroCSS from "./Hero.module.css";

const Hero = () => {
  return (
    <main className={HeroCSS.HeroWrapper}>
      <div className={HeroCSS.HeroText}>
        <h1>A Simple Bookmark Manger</h1>
        <p>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className={HeroCSS.HeroBtn}>
          <button className={HeroCSS.chrome}>Get it on Chrome</button>
          <button className={HeroCSS.firefox}>Get it on Firefox</button>
        </div>
      </div>
      <div className={HeroCSS.HeroImage}>
        <img src="/images/illustration-hero.svg" alt="hero-illustration" />
        <div className={HeroCSS.heroImageBg}></div>
      </div>
    </main>
  );
};
export default Hero;
