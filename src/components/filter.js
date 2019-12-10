import React, {useContext, useEffect} from 'react';
//import { FeedsContext } from '../context/feedsContext';

const Filter = props => {
  //const [feeds, setFeeds] = useContext(FeedsContext);

  useEffect(() => {
    //console.log(`${feeds}` );
  }, []);
 
  const handleButtonClick =  (event) => {
  //   let filtedData = initialContext.filter(el => {
  //     if (el.title.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1) return el;
  //    })
  //    setTimeout(() => setData(filtedData), 500);
  }

  return (
    <div className="container">
      <div>
        {/* find: {data} */}
      </div>
      <div className="row">
        <div className="col-sm-12">
          <button className="m-2" onClick={handleButtonClick}>AAA</button>
          <button className="m-2" onClick={handleButtonClick}>BBB</button>
          <button className="m-2" onClick={handleButtonClick}>CCC</button>
          <button className="m-2" onClick={handleButtonClick}>DDD</button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
