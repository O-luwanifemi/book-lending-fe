import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getBooksAsync} from '../redux/actions/book/getBooksAction';

const BooksComponent = () => {
    const dispatch = useDispatch();
    const [books, setBooks] = useState([]);
    const booksData = useSelector((state) => state.booksReducer?.data) // Get the data to the reducer.
    
    useEffect(() => {
        dispatch(getBooksAsync());
    }, [dispatch]);
    
    useEffect(() => {
        const retrievedBooks = booksData;
        if (retrievedBooks){
            setBooks(retrievedBooks)
        }
    }, [booksData]);
    return (
        <>
        <h2>Books</h2>
        {
            books.map((list) => (
            <fieldset key={list._id}>
                <legend>{list.title}</legend>
                    <p>
                    <em>{list.description}</em> <br/>
                    </p>
            </fieldset>
            ))
        }
        </>
    );
};
export default BooksComponent;