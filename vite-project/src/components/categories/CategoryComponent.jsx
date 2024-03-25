import { useParams } from 'react-router-dom';
import { getProducts } from '../../asyncMock';
import { useEffect, useState } from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} className="card-img-top img-fluid imgProduct" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">Precio: ${product.price}</p>
      </div>
    </div>
  );
};

export default function CategoryComponent() {
  const { catName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts;
      if (catName === 'Maquinarias' || catName === 'Repuestos') {
        const filteredProducts = data.filter(product => product.category === catName);
        setProducts(filteredProducts);
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
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
