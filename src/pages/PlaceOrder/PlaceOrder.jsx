import React, { useContext } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../Context/StoreContext';

const PlaceOrder = () => {
    const { getTotalCartAmount } = useContext(StoreContext);

    const totalCartAmount = getTotalCartAmount();
    const deliveryFee = 2;
    const finalTotal = totalCartAmount + deliveryFee;

    return (
        <form className='place-order'>
            <div className="place-order-left">
                <p className="title">Delivery Information</p>
                <div className="multi-fields">
                    <input type="text" placeholder='First name' />
                    <input type="text" placeholder='Last name' />
                </div>
                <input type="email" placeholder='Email address' />
                <input type="text" placeholder='Street' />
                <div className="multi-fields">
                    <input type="text" placeholder='City' />
                    <input type="text" placeholder='State' />
                </div>
                <div className="multi-fields">
                    <input type="text" placeholder='Zip code' />
                    <input type="text" placeholder='Country' />
                </div>
                <input type="text" placeholder='Phone' />
            </div>
            <div className="place-order-right">
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
                <button>PROCEED TO PAYMENT</button>
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
        </form>
    );
};

export default PlaceOrder;
