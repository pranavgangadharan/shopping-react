import React, {useState} from 'react'
import './items.css'

function ItemList() {
    
        const [items, setCart] = useState([{itemcode: 1, name: 'TV', image: 'https://i.gadgets360cdn.com/products/large/oneplus-tv-q1-pro-800x552-1569512163.jpg?downsize=*:180&output-quality=80&output-format=webp' }, 
        {itemcode: 2, name: 'Phone', image: 'https://i.gadgets360cdn.com/large/oneplus_9_pro_image_1616073743295.jpg?downsize=950:*&output-quality=80&output-format=webp'}]);
      
        return (
          <div>
            <table>
                <tr>
                    <td>
                        <div class="card">
                            <img src= {items[0].image} alt="TV" style={{width:'100%', height:'40%'}}></img>
                            <div class="container">
                                <h4><b>{items[0].name}</b></h4> 
                                <p>OnePlus</p> 
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
          </div>
        );
      
}

export default ItemList;