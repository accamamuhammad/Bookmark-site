import data from "./data";
import { useState } from "react";
import FeaturesCSS from "../features/Features.module.css";

const Features = () => {
  const [activeTab, setActiveTab] = useState(false);
  const [tabOne, setTabOne] = useState(true);
  const [tabTwo, setTabTwo] = useState(false);
  const [tabThree, setTabThree] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(data[0].title);
  const [currentContent, setCurrentContent] = useState(data[0].content);
  const [currentImageUrl, setCurrentImageUrl] = useState(data[0].imageUrl);
  const [currentAlt, setCurrentAlt] = useState(data[0].imageAlt);

  const handleTabOne = () => {
    setTabOne(true);
    setTabTwo(false);
    setTabThree(false);
    setCurrentTitle(data[0].title);
    setCurrentContent(data[0].content);
    setCurrentImageUrl(data[0].imageUrl);
    setCurrentAlt(data[0].imageAlt);
  };

  const handleTabTwo = () => {
    setTabOne(false);
    setTabTwo(true);
    setTabThree(false);
    setCurrentTitle(data[1].title);
    setCurrentContent(data[1].content);
    setCurrentImageUrl(data[1].imageUrl);
    setCurrentAlt(data[1].imageAlt);
  };

  const handleTabThree = () => {
    setTabOne(false);
    setTabTwo(false);
    setTabThree(true);
    setCurrentTitle(data[2].title);
    setCurrentContent(data[2].content);
    setCurrentImageUrl(data[2].imageUrl);
    setCurrentAlt(data[2].imageAlt);
  };

  return (
    <section className={FeaturesCSS.FeaturesWrapper}>
      <h1>Features</h1>
      <p>
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>
      <div className={FeaturesCSS.FeaturesBar}>
        <div
          className={`${tabOne ? FeaturesCSS.Active : FeaturesCSS.InActive}`}
          onClick={() => handleTabOne()}
        >
          <h4>Simple Bookmarking</h4>
        </div>
        <div
          className={`${tabTwo ? FeaturesCSS.Active : FeaturesCSS.InActive}`}
          onClick={() => handleTabTwo()}
        >
          <h4>Speedy Searching</h4>
        </div>
        <div
          className={`${tabThree ? FeaturesCSS.Active : FeaturesCSS.InActive}`}
          onClick={() => handleTabThree()}
        >
          <h4>Easy Sharing</h4>
        </div>
      </div>
      <div className={FeaturesCSS.FeaturesTextContainer}>
        <div className={FeaturesCSS.FeaturesIllustration}>
          <img src={currentImageUrl} alt={currentAlt} />
        </div>
        <div className={FeaturesCSS.FeaturesText}>
          <div>
            <h1>{currentTitle}</h1>
            <p>{currentContent}</p>
            <button>More info</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
