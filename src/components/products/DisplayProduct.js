import { useEffect, useState } from 'react';
import ProductCard from '../ui/ProductCard';
import axios from 'axios';
import parseImageUrl from '../../utils/imageParser.utils';

const DisplayProduct = () => {
  const [products, setProducts] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 12;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`);
        if (offset === 0) {
          setProducts(res.data);
        } else {
          setProducts((prevProducts) => [...prevProducts, ...res.data]);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, [offset]);

  const loadMore = () => {
    setOffset(offset + limit);
    console.log(products)
  };
  

  return (
    <div className="container-fluid">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {products.map((product) => (
          <ProductCard key={product.id} 
          image={parseImageUrl(product.images[0])} 
          title={product.title} 
          price={product.price} 
          id={product.id} />
        ))}
      </div>
      <div className="d-flex justify-content-center mt-4">
        <button className="btn btn-warning" onClick={loadMore}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default DisplayProduct;
