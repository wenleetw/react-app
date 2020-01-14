import React, {useState, useContext, useEffect, useRef} from 'react';
import { FeedsContext } from '../context/feedsContext';
import Filter from './filter';
import Spinner from 'react-bootstrap/Spinner';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

const Shelf = () => {
  const initailFeeds = useContext(FeedsContext);
  const [feeds, setFeeds] = useContext(FeedsContext);

  useEffect(() => {
    console.log('render');
  }, []);

  const handleInputChange = (event) => {
    let filtedData = feeds.photoFeeds.filter(el => {
      if ((el.title.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1) ||
        (el.content.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1)) {
        return el;
      }
    })

    
    //console.log(initailFeeds)
    if (event.target.value === '') {
      setTimeout(() => setFeeds(initailFeeds), 500);
    } else {
      setTimeout(() => setFeeds({photoFeeds : filtedData}), 500);
    } 
  }

  return (
    <div>
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
    </div>
  );
}

const ItemList = ({items}) => {
  return (
    <div className="row">
    {items.photoFeeds.map(article => (
      <Item key={ article.id } article={article}/>
    ))}
  </div>
  )
}

const Item = ({article}) => {
  return (
    <div key={article.id} className="col-6 col-sm-4 p-1" >
      <h3>{article.title}</h3>
      <img src={`${article.image}`} alt={article.title}></img>
      {/* <Spinner animation="border" variant="primary" /> */}
      <p>
        {article.content}
        <br></br>
        <small><i>{article.tags.map((tag) => tag + ' ' )}</i></small>
      </p>
   </div>
  )
}

// const handleModalOpen = () => {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Launch demo modal
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

export default Shelf;
