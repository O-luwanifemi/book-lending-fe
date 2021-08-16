import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getFavoriteAsync} from '../redux/actions/FavoriteAction';
import Favorite from '../pages/sidebar/Favourite'


const FavoriteComponent = () => {
    const dispatch = useDispatch();
    const [favorite, setFavorite] = useState([]);
    const favoriteData = useSelector((state) => state.FavoriteReducer?.data) 
    
    useEffect(() => {
        dispatch(getFavoriteAsync());
    }, [dispatch]);
    
    useEffect(() => {
        const retrievedFavorite = favoriteData.data;
        if (retrievedFavorite){
            setFavorite(retrievedFavorite.book)
        }
    }, [favoriteData]);
    return (
        <div className="text-center">
        <h2> Favorited Books</h2>
        <Favorite />
        </div>
    );
    /* to be included inplace of line 25 above <Favorite>
    {
        favorite.map((list) => (
        <fieldset key={list._id}>
            <legend>{list.book.title}</legend>
            <p>
                Author: {list.book.author} <br/>
                <em>{list.book.description}</em> <br/>
                Borrow Date: {list.createdAt} <br/>
                </p>
        </fieldset>
        ))
    }*/
};


export default FavoriteComponent;