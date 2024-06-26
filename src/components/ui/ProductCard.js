import { Link } from "react-router-dom"

const ProductCard = ({ image, title, price, id }) => {
  return (
    <div className="col">
      <div className="card">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p>Price: Rs.{price}</p>
          <Link to={`/product-details/${id}`} className="btn btn-primary">View Details</Link>
        </div>
      </div>
    </div>

  )
}

export default ProductCard