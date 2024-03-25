import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProducts } from '../../asyncMock';

export default function SingleProduct() {
  const { prodId } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts;
      const productData = data.find(item => item.id === parseInt(prodId));
      setProduct(productData);
    };

    fetchData();
  }, [prodId]);

  return (
    <>
    <div className="card">
      <img src={product.image} className="card-img-top img-fluid imgProduct" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.category} {prodId}</h5>
        <h3>Nombre: {product.title}</h3>
        <p className="card-text">Precio: $ {product.price}</p>
      </div>
    </div>
    </>
  );
}