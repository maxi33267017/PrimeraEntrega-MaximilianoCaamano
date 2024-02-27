// import PropTypes from 'prop-types';

const ItemListContainer = ({ greeting }) => {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">PM ONLINE</h2>
                <p className="card-text">{greeting}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  // ItemListContainer.propTypes = {
  //   greeting: PropTypes.string.isRequired,
  // };

  export default ItemListContainer;