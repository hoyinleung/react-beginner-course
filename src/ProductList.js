import {Link} from "react-router-dom"
import styles from './ProductList.module.css'
import {useState} from "react"  //React Hook
import Title from "./Title"

export default function ProductList() {

    let [productList, setProductList] = useState([])
    
    console.log(productList)

    fetch('https://hoyinleung.github.io/demoapi/react-basic-product.json')
        .then(response => response.json())
        .then(data => setProductList(data))

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
                            <img src={process.env.PUBLIC_URL+'/img/'+product.image} alt={product.name} />
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
