import React, {useState, useContext, useEffect} from 'react';
import { initalContext, FeedsContext } from '../context/feedsContext';

const Filter = props => {
  const [feeds, setFeeds] = useContext(FeedsContext);
  //const [feeds, setFeeds] = useState([feeds, setFeeds] ) 
  const [lastTag, setLastTag] = useState("");

  useEffect(() => {
  }, []);

  const handleButtonClick = (event) => {
    //  console.log('initalContext', {...initalContext});
    
    setFeeds({...initalContext});
    if (event.target.value === lastTag){
      setLastTag((feeds) => "");
      return;
    }

    //setFeeds(initalContext);
    let filtedData = feeds.photoFeeds.filter(el => {
      //console.log(el)
      return el.tags.includes(event.target.value);
    })
    setLastTag(event.target.value);
    //console.log(filtedData);
    setFeeds({ photoFeeds: filtedData });
  }

  const handleResetClick = (event) => {
    //console.log(initalContext)
    setFeeds(initalContext);
  }

  return (
    <div className="container">
      {/* <h1>{feeds.photoFeeds.length}</h1> */}
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
