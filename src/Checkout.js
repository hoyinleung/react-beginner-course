import Title from "./Title"
import {Link} from 'react-router-dom'
import QuantityBtn from "./QuantityBtn"

export default function Checkout() {

    let cartItem = 
    {
        "cartItems": 
        [
            {
                "id": 5,
                "name": "藍梅",
                "image": "blueberry.jpg",
                "price": 10,
                "description": "新鮮藍梅50克，補眼之寶",
                "quantity": 3
            },
            {
                "id": 4,
                "name": "西瓜",
                "image": "watermelon.jpg",
                "price": 20,
                "description": "新鮮西瓜2公斤，夏季必備",
                "quantity": 1
            }
        ]
    }
    let {cartItems} = cartItem
    let cartEmpty = cartItems.length<=0 ? true : false

    let grandTotal = cartItems.reduce((total, product)=>{
        return total += product.price*product.quantity
    },0)
    const freeShippingPrice = 99

    return (
        <div>
            <Title mainTitle="你的購物車" />

            {
                cartEmpty && 
                <div>
                    購物車現在沒有商品<br/>
                    <Link to="/">去產品頁看看吧</Link>
                </div>
            }

            {
                !cartEmpty &&
                <div>
                    <div id="cartSection">
                        {
                            /* 產品列表 */
                            cartItems.map(product=>(
                                <div key={product.id}>
                                    <img src={process.env.PUBLIC_URL+'/img/'+product.image} alt={product.name}/>
                                    {product.name}
                                    {product.description}
                                    {product.price}
                                    購買數量{product.quantity}
                                    <QuantityBtn/>
                                </div>
                            ))
                        }
                    </div>
                    <div id="checkOutSection">

                        {/* 價錢總數 */}
                        <div>全部貨品總共</div>
                        <div>{grandTotal}元</div>

                        {
                            /* 免費送貨 */
                            grandTotal >= freeShippingPrice ?
                            <div>我們免費送貨</div> :
                            <div>滿${freeShippingPrice}免費送貨<br/>
                            還差${freeShippingPrice-grandTotal}</div>
                        }
                    </div>
                </div>
            }

        </div>
    )
}
