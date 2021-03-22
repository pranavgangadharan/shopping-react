import React, {useState} from 'react'
import './items.css'

function ItemList() {
    
        const [items, setItem] = useState([{itemcode: 0, name: 'TV', price: '80000', image: 'https://i.gadgets360cdn.com/products/large/oneplus-tv-q1-pro-800x552-1569512163.jpg?downsize=*:180&output-quality=80&output-format=webp' }, 
        {itemcode: 1, name: 'Phone', price:'40000', image: 'https://i.gadgets360cdn.com/large/oneplus_9_pro_image_1616073743295.jpg?downsize=950:*&output-quality=80&output-format=webp'}]);
        const [cartlist, setCart] = useState([]);

        function addCart(index) {
            let arr = cartlist;
            let check = arr.filter((element, index) => {
              return(index === element.itemcode)
            } );
            console.log(check);
            let name = items[index].name;
            let price = items[index].price;
            let itemcode = items[index].itemcode;
            arr.push({name: name,
              price: price,
              itemcode: itemcode}
            );
            localStorage.setItem("cartlist", JSON.stringify(arr));
        }

        return (
          <div>
            <table>
            <tbody>
                <tr>
                    
                    {items.map((item,index) => (
                        <td key={index}>

                        <div className="card">

                        <img src= {item.image} alt="TV" style={{width:'300px', height:'200px'}}></img>
                        <div className="container">
                        <h4><b>{item.name}</b></h4>
                        <p>{item.brand}</p>
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