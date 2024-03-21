import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProduct } from '../../asyncMock';

export default function SingleProduct() {
  const { prodId } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(getProduct(prodId));
  }, [prodId]);

  return (
    <>
      <div>
        <h1>{product.category}{prodId}</h1>
        <h3>Nombre: {product.title}</h3>
        <img src={product.image} alt={product.title} />
        <p>Precio $ {product.price}</p>
      </div>
    </>
  );
}
