import React from 'react';

const Nav = props => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <nav className="nav nav-pills nav-justified m-3">
            <h4>Home</h4>
            {/* <a class="nav-link active" href="#">Active</a>
            <a class="nav-link" href="#">Longer nav link</a>
            <a class="nav-link" href="#">Link</a>
            <a class="nav-link disabled" href="#">Disabled</a> */}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Nav;
