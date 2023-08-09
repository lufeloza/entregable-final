import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import { setIsLoading } from './isLoading';
export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: [],
    reducers: {
        setFavorites : (state, action) =>{
            return action.payload
        }
    }
})


export const getFavoritesThunk = () => dispatch => {
    dispatch(setIsLoading(true))

    axios
        .get ('https://e-commerce-api-v2.academlo.tech/api/v1/cart',getConfig())
        .then(resp => dispatch(setFavorites(resp.data)))
        .catch(error => console.error(error))
        .finally (()=> dispatch(setIsLoading(false)))
}

export const addFavoriteThunk =(data)=> (dispatch) => {
    dispatch(setIsLoading(true))
//() => dispatch(getFavoritesThunk())
    axios
        .post('https://e-commerce-api-v2.academlo.tech/api/v1/cart', data, getConfig())
        .then(() => dispatch(getFavoritesThunk()) )
        .catch( error => console.error(error))
        .finally (()=> dispatch(setIsLoading(false)))
}

export const purchasesCartThunk = () => dispatch =>{
    dispatch(setIsLoading(true))
    axios
        .post('https://e-commerce-api-v2.academlo.tech/api/v1/purchases', {},getConfig())
        .then(() => dispatch(getFavoritesThunk()))
        .catch(error => console.error(error))
        .finally(()=> dispatch(setIsLoading(false)))
}





export const { setFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
