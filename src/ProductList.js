import {Link} from "react-router-dom"
import React, {useState, useEffect} from "react"  //React Hook
import Title from "./Title"
import QuantityBtn from "./QuantityBtn"

export default function ProductList() {

    let [productList, setProductList] = useState([])

    //useEffect hook
    useEffect(()=>{

        //1 : 無第二個參數 : component每次render都會觸發
        //2 : Dependency Array是空array時 : 只會在第一次網頁render時會觸發
        //3 : Dependency Array是有變數時 : 第一次網頁render時 + 指定的變數改變 會觸發
        fetch('https://hoyinleung.github.io/demoapi/react-basic-product.json')
            .then(response => response.json())
            .then(data => setProductList(data))

    },[]) // <==  Dependency Array

    return (
        //React Fragment簡寫
        <>
            <Title mainTitle="React入門水果店" />
            
            <div className="container">
                {
                    productList.map(product=>(
                        <React.Fragment key={product.id}>

                            <div className="containerItem">
                                <Link to={'/product/'+product.id}>
                                    <img src={process.env.PUBLIC_URL+'/img/'+product.image} alt={product.name} />
                                </Link>

                                <div className="productName">
                                    {product.name}  -  {product.price}元/件
                                </div>
                
                                <QuantityBtn productInfo={product} />
                            </div>

                        </React.Fragment>
                    ))
                }
            </div>
        </>
    )
}
