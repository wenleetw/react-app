import React, {useState, useContext, useEffect, useReducer } from 'react';
import { initalContext, FeedsContext } from '../context/feedsContext';


const Filter = props => {

  const [feeds, setFeeds] = useContext(FeedsContext);
  const [lastTag, setLastTag] = useState("");
  const [state, dispatch] = useReducer(reducer, initalContext);

  function reducer(state, action) {
    switch(action.type) {
      case 'FILTER':
        return { photoFeeds: action.value.filter(el => el["tags"].includes(action.button))};
      case 'RESET':
        return { photoFeeds: action.value }
      default:
        return state;
    }
  }
  useEffect(() => {
    setFeeds(state);
  }, [state]);

  const handleButtonClick = (event) => {
    if (event.target.value === lastTag) {
      dispatch({type : "RESET", value: initalContext.photoFeeds});
      return;
    }
    dispatch({type : "FILTER", value: initalContext.photoFeeds, button: event.target.value});
    setLastTag(event.target.value);
  }

  const handleResetClick = (event) => {
    dispatch({type : "RESET", value: initalContext.photoFeeds});
    setLastTag("");
  }

  return (
    <div className="container">
      <small>{`counts:${feeds.photoFeeds.length} selected:${lastTag}`}</small>
      <div className="row">
        <div className="col-sm-12">
          <button className="m-2 btn btn-light" onClick={handleButtonClick} value="AAA">AAA</button>
          <button className="m-2 btn btn-light" onClick={handleButtonClick} value="BBB">BBB</button>
          <button className="m-2 btn btn-light" onClick={handleButtonClick} value="CCC">CCC</button>
          <button className="m-2 btn btn-light" onClick={handleButtonClick} value="DDD">DDD</button>
        </div>
        <br></br>
        <br></br>
        <div className="col-sm-12">
          <button className="m-2 btn btn-secondary" onClick={handleResetClick}>Reset All</button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
