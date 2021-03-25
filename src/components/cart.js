import React, {useState} from 'react'
import './cart.css'
import {Link} from 'react-router-dom'

    function Example(props) {
        
        const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cartlist")));


        function sum() {
          let sum = 0;
          for(let i = 0; i < cart.length; i++) {
              sum = sum + parseInt(cart[i].quantity) * parseFloat(cart[i].price);
          }
          console.log(sum);
          return sum;
        }


        function remove(index) {
          let key = index;
          console.log(key);
          let item = JSON.parse(localStorage.getItem("cartlist"));
          item.splice(key, 1);
          console.log(item);
          localStorage.setItem("cartlist", JSON.stringify(item));
          setCart(item);
          props.cartFun(item.length);
        }
        

        function changeQuantity(index, op) {
          let item = JSON.parse(localStorage.getItem("cartlist"));
          let qty = item[index].quantity;
          if(qty >= 1) {
            if(op === '+') {
              qty = qty + 1;
            }
            if(op === '-' && qty !== 1) {
              qty = qty -1;
            }
          }
          item[index].quantity = qty;
          localStorage.setItem("cartlist", JSON.stringify(item));
          setCart(item);
          }

        

       
      
        return (
          <div>
            <table>
            <tbody>

              {
                cart !== null && cart.length !== 0 ?
                cart.map((item,index) => (
                <tr key={index}>
                        <td>
                        <b>{item.name}</b>
                        </td>
                        <td>
                        ₹{item.price}
                        </td>
                        <td>
                          <button onClick={() => changeQuantity(index, '-')} className='qty'>-</button>
                          <b>{item.quantity}</b>
                          <button onClick={() => changeQuantity(index, '+')} className='qty'>+</button>
                        </td>
                        <td>
                          <button id="remove" className="button button2" onClick={() => remove(index)}>Remove from Cart</button>
                        </td>
                        </tr>

                    )
                    )
                    :
                    <p><b><Link to='/'>Add items to the Cart</Link></b></p>
                    }

                {
                  cart !== null && cart.length !== 0 &&
                  <tr>
                    <td><b>Total:</b></td>
                    <td colSpan='2'><b>
                    ₹{sum()}
                    </b></td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        );
      }


export default Example;