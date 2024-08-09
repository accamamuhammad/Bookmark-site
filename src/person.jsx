const Person = () => {
  return (
    <div className="wrapper">
      <div className="info-container">
        <div className="profile">
          <img src="/images/image-jeremy.png" alt="" />
        </div>
        <p>Report for</p>
        <h1>Jeremy Robson</h1>
      </div>
      <div className="time-container">
        <p>Daily</p>
        <p>Weekly</p>
        <p>Monthly</p>
      </div>
    </div>
  );
};
export default Person;
