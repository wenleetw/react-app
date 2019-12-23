import React, {useState, useContext, useEffect, useRef} from 'react';
import { FeedsContext } from '../context/feedsContext';
import Filter from './filter';
import Spinner from 'react-bootstrap/Spinner';


const Shelf = () => {
  const initailFeeds = useContext(FeedsContext);
  const [feeds, setFeeds] = useState(initailFeeds);

  useEffect(() => {
    //console.log('render');
  }, []);

  const handleInputChange = (event) => {
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
    <FeedsContext.Provider value={[feeds, setFeeds]}>
      {/* search input */}
      <div className="container-fluid">
        <form>
          <div className="form-group row">
            <div className="col-12 offset-sm-1 col-sm-8">
              <input type="text" className="form-control form-control-lg" id="searchInput" 
              aria-describedby="searchHelp" placeholder="What do you want to search?"
              onChange={handleInputChange}/>
            </div>
            <button type="submit" className="btn btn-primary btn-lg col-4 col-sm-2">Search</button>
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
            <ItemList items={feeds}/>
          </div>
        </div>
      </div>
    </FeedsContext.Provider>
  );
}

const ItemList = ({items}) => {
  return (
    <div className="row">
    {items.newsFeeds.map(article => (
      <Item key={ article.id } article={article}/>
    ))}
  </div>
  )
}

const Item = ({article}) => {
  return (
    <div key={article.id} className="col-6 col-sm-4 p-1">
      <h3>{article.title}</h3>
      <img src={`${article.image}?random&img=${article.id}`} alt={article.title}></img>
      {/* <Spinner animation="border" variant="primary" /> */}
      <p>{article.content}</p>
   </div>
  )
}

export default Shelf;
