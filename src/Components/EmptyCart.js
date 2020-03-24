import React from "react";
import { Link } from "react-router-dom";


//TODO devide css to new folders instead of primary index css
export default function EmptyCart() {
  return (
    <section className="empty-cart section">
      <h2> No pets Yet ...</h2>
      <Link to="/PetsPage" className="btn btn-primary ">
        Find your Pets
      </Link>
    </section>
  );
}
