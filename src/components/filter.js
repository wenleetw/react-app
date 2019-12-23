import React, {useState, useContext, useEffect} from 'react';
import { initalContext, FeedsContext } from '../context/feedsContext';

const Filter = props => {
  const [feeds, setFeeds] = useContext(FeedsContext);
  const [lastTag, setLastTag] = useState("");

  useEffect(() => {
  }, []);

  const handleButtonClick = (event) => {
    if (event.target.value === lastTag){
      setLastTag("");
      setFeeds(initalContext);
      return;
    }

    let filtedData = feeds.newsFeeds.filter(el => {
      //console.log(el)
      return el.tags.includes(event.target.value);
    })
    setLastTag(event.target.value);
    //console.log(filtedData);
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
        <br></br>
        <br></br>
        <div className="col-sm-12">
          <button className="m-2" onClick={handleResetClick}>Reset All</button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
