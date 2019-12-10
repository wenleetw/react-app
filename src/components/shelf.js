import React, {useState, useContext, useEffect} from 'react';
import { FeedsContext } from '../context/feedsContext';
import Filter from './filter';

const Shelf = () => {
  //const initailFeeds = useContext(FeedsContext);
  const initailFeeds = useContext(FeedsContext);
  const [feeds, setFeeds] = useState(initailFeeds);

  useEffect(() => {
    console.log('render');
  }, []);

  const handleInputChange =  (event) => {
    let filtedData = feeds.newsFeeds.filter(el => {
      if (el.title.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1) {
        return el;
      }
    })

    //console.log(initailFeeds)
    if (event.target.value === '') {
      setTimeout(() => setFeeds(initailFeeds), 500);
    } else {
      setTimeout(() => setFeeds({newsFeeds : filtedData}), 500);
    }
  }

  return (
    <React.Fragment>
      {/* search input */}
      <div className="container-fluid">
        <form>
          <div className="form-group row">
            <div className="col-sm-8">
              <input type="text" className="form-control" id="searchInput" 
              aria-describedby="searchHelp" placeholder="What do you want to search?"
              onChange={handleInputChange}/>
            </div>
            <button type="submit" className="btn btn-primary col-sm-2">Search</button>
          </div>
        </form>
      </div>
      {/* result */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3">
            <Filter />
          </div>
          <div className="col-sm-8 mt-5">
            <h3>Feeds</h3>
            <hr/>
            <div className="row">
              {feeds.newsFeeds.map(article => (
                <div key={article.id} className="col-6 col-sm-4">
                  <h3>{article.title}</h3>
                  <img src={`${article.image}?random&img=${article.id}`} alt={article.title}></img>
                  <p>{article.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Shelf;
