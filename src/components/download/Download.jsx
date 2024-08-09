import DonwloadCSS from "./Download.module.css";

const Download = () => {
  return (
    <section className={DonwloadCSS.DonwloadWrapper}>
      <div className={DonwloadCSS.DonwloadText}>
        <h1>Download the extension</h1>
        <p>
          We have got more browsers in the pipeline. Please do let us know if
          you have got a favourite you would like us to prioritize.
        </p>
      </div>
      <div className={DonwloadCSS.DonwloadComponents}>
        <div>
          <img
            src="/public/images/logo-chrome.svg"
            alt="chrome-logo"
            className={DonwloadCSS.browserLogo}
          />
          <h2>Add to Chrome</h2>
          <p>Minimum version 62</p>
          <img
            src="/public/images/bg-dots.svg"
            alt="dots"
            className={DonwloadCSS.dots}
          />
          <button>Add & install Extension</button>
        </div>
        <div>
          <img
            src="/public/images/logo-firefox.svg"
            alt="firefox-logo"
            className={DonwloadCSS.browserLogo}
          />
          <h2>Add to Firefox</h2>
          <p>Minimum version 55</p>
          <img
            src="/public/images/bg-dots.svg"
            alt="dots"
            className={DonwloadCSS.dots}
          />
          <button>Add & install Extension</button>
        </div>
        <div>
          <img
            src="/public/images/logo-opera.svg"
            alt="opera-logo"
            className={DonwloadCSS.browserLogo}
          />
          <h2>Add to Opera</h2>
          <p>Minimum version 46</p>
          <img
            src="/public/images/bg-dots.svg"
            alt="dots"
            className={DonwloadCSS.dots}
          />
          <button>Add & install Extension</button>
        </div>
      </div>
    </section>
  );
};
export default Download;
