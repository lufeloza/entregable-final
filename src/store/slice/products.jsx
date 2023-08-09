import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {setIsLoading} from './isLoading'

export const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProducts : (state, action) =>{
            return action.payload
        }
       
    }
})

// THUNK -> Middleware
/*
export const nameThunk = (data) => (dispatch) => {
    // logica, instrucciones, peticiones
    dispatch (actionName())
    dispatch (actionName2())
}
*/
export const getProductsThunk =()=>(dispatch)=>{
    // traer la información del rpoducto
    dispatch (setIsLoading(true))
    axios
        .get ('https://e-commerce-api-v2.academlo.tech/api/v1/products')
        .then (resp => dispatch( setProducts(resp.data) ))
        .catch(error => console.error(error))
        .finally (() => dispatch(setIsLoading(false)))
}

export const filterProductsCategoryThunk =(id)=>(dispatch)=>{
    // traer la información del rpoducto
    dispatch (setIsLoading(true))
    axios
        .get (`https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`)
        .then (resp => dispatch( setProducts(resp.data) ))
        .catch(error => console.error(error))
        .finally (() => dispatch(setIsLoading(false)))
}

export const searchProductsThunk =(value)=>(dispatch)=>{
    // traer la información del rpoducto
    dispatch (setIsLoading(true))
    axios
        .get (`https://e-commerce-api-v2.academlo.tech/api/v1/products?title=${value}`)
        .then (resp => dispatch( setProducts(resp.data) ))
        .catch(error => console.error(error))
        .finally (() => dispatch(setIsLoading(false)))
}



export const { setProducts } =productsSlice.actions;

export default productsSlice.reducer;
