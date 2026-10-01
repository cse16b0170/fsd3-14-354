const b1 = {
  picUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=500&auto=format&fit=crop",
  bname: "The Art of Cinema",
  price: 899,
  quantity: 14,
  rating: 4.9,
};

const b2 = {
  picUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=500&auto=format&fit=crop",
  bname: "Legends of Rock & Roll",
  price: 1299,
  quantity: 7,
  rating: 4.8,
};

const b3 = {
  picUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=500&auto=format&fit=crop",
  bname: "Sci-Fi & Fantasy Worlds",
  price: 1099,
  quantity: 11,
  rating: 5.0,
};

const b4 = {
  picUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=500&auto=format&fit=crop",
  bname: "Stage & Spotlight",
  price: 949,
  quantity: 9,
  rating: 4.7,
};

function Book(props) {
  const { rating, quantity, price, bname, picUrl } = props.book;
  return (
    <div>
      <img src={picUrl} alt={bname} />
      <h1>{bname}</h1>
      <h2>Price: {price}</h2>
      <h3>Quantity: {quantity}</h3>
      <h4>Rating: {rating}</h4>
      
      {/* Yahan '<' missing tha, jo theek kar diya hai */}
      <div className="btn-container">
        <button className="cart-btn" onClick={() => alert(`Added ${bname} to cart!`)}>
          Add to Cart
        </button>
        <button className="buy-btn" onClick={() => alert(`Buying ${bname}!`)}>
          Buy Now
        </button>
      </div>
    </div>
  )
}

export default function App(){
  return (
    <>
      <h1>Online Book Store</h1>
      <div className="container">
        <Book book={b1} />
        <Book book={b2} />
        <Book book={b3} />
        <Book book={b4} />
      </div>
    </>
  )
}