import data from "./data";
import { useState } from "react";
import QuestionCSS from "../questions/Question.module.css";

const Question = () => {
  const [moreInfo1, setMoreInfo1] = useState(false);
  const [moreInfo2, setMoreInfo2] = useState(false);
  const [moreInfo3, setMoreInfo3] = useState(false);
  const [moreInfo4, setMoreInfo4] = useState(false);
  const [allInfo, setAllInfo] = useState(false);

  const info1 = data[0].content;
  const info2 = data[1].content;
  const info3 = data[2].content;
  const info4 = data[3].content;

  const handleMoreInfo1 = () => {
    setMoreInfo1(!moreInfo1);
  };

  const handleMoreInfo2 = () => {
    setMoreInfo2(!moreInfo2);
  };

  const handleMoreInfo3 = () => {
    setMoreInfo3(!moreInfo3);
  };

  const handleMoreInfo4 = () => {
    setMoreInfo4(!moreInfo4);
  };

  const displayAllInfo = () => {
    setAllInfo(!allInfo);
    if (allInfo === true) {
      setMoreInfo1(false);
      setMoreInfo2(false);
      setMoreInfo3(false);
      setMoreInfo4(false);
    } else if (allInfo === false) {
      setMoreInfo1(true);
      setMoreInfo2(true);
      setMoreInfo3(true);
      setMoreInfo4(true);
    }
  };

  return (
    <section className={QuestionCSS.QuestionsWrapper}>
      <div>
        <h1>Frequently Asked Question</h1>
        <p>
          Here are some of our FAQs. If you have any other questions you'd like
          answered please feel free to email us.
        </p>
        <div className={QuestionCSS.QuestionsExtra}>
          <div className={QuestionCSS.line}></div>
          {/* Start of one */}
          <div
            className={QuestionCSS.QuestionText}
            onClick={() => handleMoreInfo1()}
          >
            <h4>{data[0].title}</h4>
            <img
              src="/images/icon-arrow.svg"
              alt="arrow"
              className={`${
                moreInfo1 ? QuestionCSS.rotateState : QuestionCSS.normalState
              }`}
            />
          </div>
          <p
            className={`${
              moreInfo1 ? QuestionCSS.OnInfo : QuestionCSS.OffInfo
            }`}
          >
            {info1}
          </p>
          {/* End of one */}
          <div className={QuestionCSS.line}></div>
          {/* Start of two */}
          <div
            className={QuestionCSS.QuestionText}
            onClick={() => handleMoreInfo2()}
          >
            <h4>{data[1].title}</h4>
            <img
              src="/images/icon-arrow.svg"
              alt="arrow"
              className={`${
                moreInfo2 ? QuestionCSS.rotateState : QuestionCSS.normalState
              }`}
            />
          </div>
          <p
            className={`${
              moreInfo2 ? QuestionCSS.OnInfo : QuestionCSS.OffInfo
            }`}
          >
            {info2}
          </p>
          {/* End of two */}
          <div className={QuestionCSS.line}></div>
          {/* Start of three */}
          <div
            className={QuestionCSS.QuestionText}
            onClick={() => handleMoreInfo3()}
          >
            <h4>{data[2].title}</h4>
            <img
              src="/images/icon-arrow.svg"
              alt="arrow"
              className={`${
                moreInfo3 ? QuestionCSS.rotateState : QuestionCSS.normalState
              }`}
            />
          </div>
          <p
            className={`${
              moreInfo3 ? QuestionCSS.OnInfo : QuestionCSS.OffInfo
            }`}
          >
            {info3}
          </p>
          {/* End of three */}
          <div className={QuestionCSS.line}></div>
          {/* Start of Four */}
          <div
            className={QuestionCSS.QuestionText}
            onClick={() => handleMoreInfo4()}
          >
            <h4>{data[3].title}</h4>
            <img
              src="/images/icon-arrow.svg"
              alt="arrow"
              className={`${
                moreInfo4 ? QuestionCSS.rotateState : QuestionCSS.normalState
              }`}
            />
          </div>
          <p
            className={`${
              moreInfo4 ? QuestionCSS.OnInfo : QuestionCSS.OffInfo
            }`}
          >
            {info4}
          </p>
          {/* End of Four */}
          <div className={QuestionCSS.line}></div>
        </div>
        <button onClick={() => displayAllInfo()}>More info</button>
      </div>
    </section>
  );
};
export default Question;
