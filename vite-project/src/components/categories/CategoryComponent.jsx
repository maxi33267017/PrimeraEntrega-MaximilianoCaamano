import { useParams, useNavigate } from 'react-router-dom';
import { getProducts } from '../../asyncMock';
import { useEffect, useState } from 'react';

const ProductCard = ({ product, handleClick }) => {
  return (
    <div className="card">
      <img src={product.image} className="card-img-top img-fluid imgProduct" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">Precio: ${product.price}</p>
        <button className="btn custom-button" onClick={() => handleClick(product.id)}>Ver detalles</button>
      </div>
    </div>
  );
};

export default function CategoryComponent() {
  const { catName } = useParams();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  
  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts; // Invoke getProducts as a Promise
        if (catName === 'Maquinarias' || catName === 'Repuestos') {
          const filteredProducts = data.filter(product => product.category === catName);
          setProducts(filteredProducts);
        } else {
          // Handle case when category name doesn't match
          setProducts([]);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        // Handle error as necessary
      }
    };

    fetchData();
  }, [catName]);

  return (
    <div>
      <h2>Productos en la categoría {catName}:</h2>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4">
            <ProductCard product={product} handleClick={handleClick} />
          </div>
        ))}
      </div>
    </div>
  );
}
