import React, {useState} from 'react'
import './items.css'

function ItemList(props) {
    
        const [items, setItem] = useState([{itemcode: 0, name: 'TV', price: '80000', image: 'https://i.gadgets360cdn.com/products/large/oneplus-tv-q1-pro-800x552-1569512163.jpg?downsize=*:180&output-quality=80&output-format=webp', quantity: 1 }, 
        {itemcode: 1, name: 'Phone', price:'40000', image: 'https://i.gadgets360cdn.com/large/oneplus_9_pro_image_1616073743295.jpg?downsize=950:*&output-quality=80&output-format=webp', quantity: 1},
        {itemcode: 2, name: 'Little Women(Blu-Ray)', price:'400', image: 'http://www.impawards.com/2019/posters/little_women_ver16_xlg.jpg', quantity: 1}
      
      ]);
        const [cartlist, setCart] = useState([]);

        function addCart(index) {
            let name = items[index].name;
            let price = items[index].price;
            let itemcode = items[index].itemcode;
            let quantity = items[index].quantity;
            let item = localStorage.getItem("cartlist");
            let arr;
            item === null ? arr = cartlist : arr = JSON.parse(item);
            
            // let check = arr.filter((element, index) => {
            //   return(index === element.itemcode)
            // } );
            // console.log(check);
            
            arr.push({name: name,
              price: price,
              itemcode: itemcode,
              quantity: quantity}
            );
            setCart(arr);
            localStorage.setItem("cartlist", JSON.stringify(arr));
            alert(`${name} added to the cart`);
            props.cartFun(arr.length);
            // this.props.setCount(arr.length);
        }

        return (
          <div>
            <table>
            <tbody>
                <tr>
                    
                    {items.map((item,index) => (
                        <td key={index}>

                        <div className="card">

                        <img src= {item.image} alt="TV"></img>
                        <div className="container">
                        <h4><b>{item.name}</b></h4>
                        <p>₹{item.price}</p>
                        <button className="button button2" onClick={() => addCart(index)}>Add to Cart</button>
                        </div>
                        </div> 
                        </td>
                    )
                    )}
                        
                    
                </tr>
                </tbody>
            </table>
          </div>
        );
      
}


export default ItemList;