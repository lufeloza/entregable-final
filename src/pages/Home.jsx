
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductCard from '../components/ProductCard';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux'
import { useState,useEffect } from 'react';
import {getProductsThunk, filterProductsCategoryThunk, searchProductsThunk} from '../store/slice/products'
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';

const Home = () => {

    const products = useSelector( state =>state.products)
    const dispatch = useDispatch()
    const [categories, setCategories] = useState ([])
    const [searchProduct, setSearchProduct] =useState('')

    useEffect (() =>{
        dispatch(getProductsThunk())
        getCategories()
    }, [])

    const getCategories =()=>{
        axios
            .get('https://e-commerce-api-v2.academlo.tech/api/v1/categories/')
            .then(resp => setCategories(resp.data))
            .catch(error =>console.error(error))
    }

    
  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(searchProductsThunk(searchProduct))

  };




    return(

        <main>
               <Row  >
                    <Col md={4} lg={3}>
                        {
                            categories?.map(category =>(
                                <ListGroup.Item 
                                key={category.id}
                                onClick={() => dispatch(filterProductsCategoryThunk(category.id))}
                                >{category.name}</ListGroup.Item>
                            ))
                        }
                    </Col>
                    <Col md ={8} lg ={9}>
                        Listado de productos
                        <Row>
                            <Col>
                            <InputGroup className="mb-3">
                                <Form.Control
                                placeholder="Buscar producto..."
                                aria-label="Buscar producto..."
                                aria-describedby="basic-addon2"
                                value={searchProduct}
                                onChange={e=> setSearchProduct(e.target.value)}
                                />
                                <Button type="submit" onClick={handleSubmit} >
                                    Buscar
                                </Button>
                               
                            </InputGroup>
                            </Col>
                        </Row>
                        <Row xs={1} md={2} lg={3}>
                           {
                            products?.map(product =>(
                                <Col key={product.id}>
                                     <ProductCard data ={product} />
                                </Col>
                            ))
                           }
                            
                                                       
                        </Row>
                    </Col>
                    
                </Row>
            
        </main>
    )
}

export default Home