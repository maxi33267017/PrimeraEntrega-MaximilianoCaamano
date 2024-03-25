import { useNavigate } from 'react-router-dom';
import { getProducts } from '../../asyncMock';
import { useEffect, useState } from 'react';

export default function ProductsComponent() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts.then((data) => setProducts(data));
    console.log('Recibiendo datos!!!');
  }, []);

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };  

  return (
    <>
    <div>
      <h1>Productos</h1>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4">
            <div className="card">

            <img src={product.image} className="card-img-top img-fluid imgProduct" alt={product.title} />

              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">Precio $ {product.price}</p>
                <button className="btn custom-button" onClick={() => handleClick(product.id)}>Ver detalles</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
