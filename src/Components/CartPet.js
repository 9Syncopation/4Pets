import React from 'react'
import {FaAngleUp, FaAngleDown} from 'react-icons/fa'
import {CartContext} from '../Context/CartContext'


export default function CartPet({id, image, name, gender, amount}) {
    console.log('image', image);
    console.log('title', name);
    
    //cart context
   /*TODO change the items and the cart to adoped bought pets*/
    /*TODO change to wish list or follow pets*/
    const {removeItem, increaseAmount, decreaseAmount} = React.useContext(CartContext)
    return(      
    <article className="cart-item">
           <img src ={`/Assets/Img/Cats/${id}.jpg`} alt= {name}/>
           <div>
           <h3>{name}</h3>
           <h5>{gender}</h5>
           <button type ="button" className= "cart-btn remove-btn" onClick= {()=>{
                removeItem(id)
            }}> Remove</button>
           </div>
           <div>
        {/* TODO the increase dercrease is not functinalowith pets*/}
           <button type="button" className="cart-btn amount-btn" onClick = {()=>
                increaseAmount(id)}
                ><FaAngleUp/>
                </button>
                <p className ="item-amount">{amount}</p>
           <button type="button" className="cart-btn amount-btn" onClick = {()=>
                decreaseAmount(id, amount)}
                ><FaAngleDown/>
                </button>
           </div>
           </article>
    )
}
