import {Link} from "react-router-dom"
import styles from './ProductList.module.css'
import {useState} from "react"  //React Hook
import Title from "./Title"

export default function ProductList() {

    let productList = [
        {"id" : 1,"name" : "蘋果", "price" : 5, "image" : "apple.jpg","description":"新鮮蘋果50克，一日一蘋果，醫生遠離我"},
        {"id" : 2,"name" : "橙", "price" : 3, "image" : "orange.jpg","description":"新鮮橙50克，又甜又好吃"},
        {"id" : 3,"name" : "芒果", "price" : 4, "image" : "mango.jpg","description":"新鮮芒500克，宜做甜品"},
        {"id" : 4,"name" : "西瓜", "price" : 20,"image" : "watermelon.jpg","description":"新鮮西瓜2公斤，夏季必備"},
        {"id" : 5,"name" : "藍梅", "price" : 10,"image" : "blueberry.jpg","description":"新鮮藍梅50克，補眼之寶"},
        {"id" : 6,"name" : "白蘿蔔", "price" : 5,"image" : "white-carrot.jpg","description":"新鮮白蘿蔔1公斤，宜煲湯"}
    ]

    return (
        <div>

            <Title mainTitle="請選擇要購買的水果" />
            
            <div>
                {
                    productList.map(product=>(
                        <div className={styles.productBorder} key={product.id}>
                            {product.name}<br/>
                            {product.price}<br/>
                            <Link to={'/product/'+product.id}>
                            <img src={process.env.PUBLIC_URL+'/img/'+product.image} />
                            </Link>
                            <br/>
                            {product.description}<br/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
