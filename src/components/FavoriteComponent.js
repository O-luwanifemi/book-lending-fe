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
        <h2> Favorites Books</h2>
        <Favorite />

        </div>
    );
};
                    // Genre: {list.book.category.name} <br/>

export default FavoriteComponent;