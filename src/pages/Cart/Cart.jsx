import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);

    const navigate= useNavigate();

    const totalCartAmount = getTotalCartAmount();
    const deliveryFee = 2;
    const finalTotal = totalCartAmount + deliveryFee;

    return (
        <div className='cart'>
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {food_list.map((item) => {
                    if (cartItems[item.id] > 0) {
                        return (
                            <div key={item.id}>
                                <div className="cart-items-item">
                                    <img src={item.image} alt={item.name} />
                                    <p>{item.name}</p>
                                    <p>${item.price.toFixed(2)}</p>
                                    <p>{cartItems[item.id]}</p>
                                    <p>${(item.price * cartItems[item.id]).toFixed(2)}</p>
                                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                                </div>
                                <hr />
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                </div>
                <hr />
                <div className="cart-total-details">
                    <p>Subtotal</p>
                    <p>${totalCartAmount.toFixed(2)}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                    <p>Delivery fee</p>
                    <p>${deliveryFee.toFixed(2)}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                    <p>Total</p>
                    <p>${finalTotal.toFixed(2)}</p>
                </div>
                <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cart-promocode">
                <div>
                    <p>If you have a promo code, enter it here:</p>
                    <div className="cart-promocode-input">
                        <input type="text" placeholder='Promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
