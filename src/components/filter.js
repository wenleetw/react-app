import React, {useState, useContext, useEffect} from 'react';
import { initalContext, FeedsContext } from '../context/feedsContext';

const Filter = props => {
  const [feeds, setFeeds] = useContext(FeedsContext);
  const [nowTag, setNowTag] = useState("");

  useEffect(() => {
  }, []);
 
  const handleButtonClick = (event) => {
    //console.log(nowTag)
    if (event.target.value === nowTag) {
      setNowTag("");
      setFeeds(initalContext);
      return;
    }

    let filtedData = feeds.newsFeeds.filter(el => {
      return el.tags.includes(event.target.value);
    })
    setNowTag(event.target.value);
    setFeeds({newsFeeds: filtedData});

  }

  const handleResetClick = (event) => {
    //console.log(initalContext)
    setFeeds(initalContext);
  }

  return (
    <div className="container">
      {/* <h1>{feeds.newsFeeds.length}</h1> */}
      <div className="row">
        <div className="col-sm-12">
          <button className="m-2" onClick={handleButtonClick} value="AAA">AAA</button>
          <button className="m-2" onClick={handleButtonClick} value="BBB">BBB</button>
          <button className="m-2" onClick={handleButtonClick} value="CCC">CCC</button>
          <button className="m-2" onClick={handleButtonClick} value="DDD">DDD</button>
        </div>
        <div className="col-sm-12">
          <button className="m-2" onClick={handleResetClick}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
