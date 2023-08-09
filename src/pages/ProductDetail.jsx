import { useParams } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import {useSelector, useDispatch} from 'react-redux'
import { filterProductsCategoryThunk } from "../store/slice/products";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import { addFavoriteThunk } from "../store/slice/favorites";

const ProdutDetail = () =>{

    const {id} =useParams()
    const [productDetail, setProductDetail] =useState({})
    const allProduts = useSelector (state => state.products)
    const dispatch = useDispatch()

    useEffect (() =>{
        getDetail()
        
    }, [id])

    const getDetail =()=>{
        axios
            .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`)
            .then(resp => {
                console.log(resp.data)
                setProductDetail(resp.data)
                dispatch(filterProductsCategoryThunk(resp.data.category.id))
            })
            .catch(error =>console.error(error))
    }

    const [quantity, setquantity] = useState(1)
    const decrement = ()=> {

        if( quantity > 1){
            setquantity (quantity - 1)
        }

    }
    const increment = ()=> {
        setquantity( quantity + 1)
    }
    const addProduct =() => {
        const data = {
            quantity : quantity,
            productId : productDetail.id

        }
        dispatch (addFavoriteThunk(data))
    }

    return(
        <main>
              
            
            
            <Row>
                <Col>
                <Carousel>
                    <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={productDetail.images?.[0].url}
                            style={{height: 300, objectFit : "contain"}} 
                            alt="First slide"
                            />                         
                           
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={productDetail.images?.[1].url}
                            style={{height: 300, objectFit : "contain"}} 
                            alt="Second slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={productDetail.images?.[2].url}
                            style={{height: 300, objectFit : "contain"}} 
                            alt="Third slide"
                            />

                        </Carousel.Item>
                    </Carousel>
                    
                </Col>
                <Col>
                    <h1>{productDetail.title}</h1> 
                    <p>{productDetail.description}</p>
                    <div className="d-grid gap-2">

                        <Button onClick={decrement}>-</Button>
                            {quantity}
                        <Button onClick={increment}>+</Button>
                        <Button onClick={addProduct} className="btn btn-lg btn-primary" type="button">Add to Cart</Button>
                        
                    </div>
                    
                </Col>
            </Row>
            <Row>
            
                    <h1>productos relacionados</h1>
                    {
                        allProduts.map(product=>(
                            <Col key ={product.id} >
                                <Card className="card border-primary mb-3" >
                                    <Card.Img variant="top"
                                    src={product.images?.[0].url}
                                    style={{height: 200, objectFit : 'cover' }} />
                                    <Card.Body  >

                                        <Card.Title>{product.title}</Card.Title>
                                        <Card.Title>Price</Card.Title>
                                        <Card.Title> $ {product.price}</Card.Title>
                                        <Button variant="primary">COMPRAR</Button>
                                        
                                    </Card.Body>
                                    </Card>                                
                                
                            </Col>
                            
                        ))
                    }
                    
                
            </Row>
            


        </main>
    )
}

export default ProdutDetail