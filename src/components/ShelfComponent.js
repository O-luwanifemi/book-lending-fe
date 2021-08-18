import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getShelfAsync} from '../redux/actions/getShelfAction';
import HeaderComponent from './layouts/HeaderComponent';

const ShelfComponent = () => {
    const dispatch = useDispatch();
    const [shelf, setShelf] = useState([]);
    const shelfData = useSelector((state) => state.shelfReducer?.data) // Get the data to the reducer.
    
    useEffect(() => {
        dispatch(getShelfAsync());
    }, [dispatch]);
    
    useEffect(() => {
        const retrievedShelf = shelfData.data;
        if (retrievedShelf){
            setShelf(retrievedShelf.book)
        }
    }, [shelfData]);

    return (
        <>
        <HeaderComponent title="Books in shelf"/>
            <div className="text-center">
                {
                    shelf.map((list) => (
                    <fieldset key={list._id}>
                        <legend>{list.book.title}</legend>
                        <p>
                            Author: {list.book.author} <br/>
                            <em>{list.book.description}</em> <br/>
                            Borrow Date: {list.createdAt} <br/>
                            </p>
                    </fieldset>
                    ))
                }
            </div>
        </>
    );
};
                    // Genre: {list.book.category.name} <br/>

export default ShelfComponent;