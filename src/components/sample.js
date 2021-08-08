//     import React, { useState, useEffect } from 'react';

//     const url = 'https://api.github.com/users';

//     // second argument

//     const UseEffectFetchData = () => {
//     const [users, setUsers] = useState([]);

//     const getUsers = async () => {
//         const response = await fetch(url);
//         const users = await response.json();
//         setUsers(users);
//         // console.log(users);
//     };

//     useEffect(() => {
//         getUsers();
//     }, []);
//     return (
//         <>
//         <h3>github users</h3>
//         <ul className='users'>
//             {users.map((user) => {
//             const { id, login, avatar_url, html_url } = user;
//             return (
//                 <li key={id}>
//                 <img src={avatar_url} alt={login} />
//                 <div>
//                     <h4>{login}</h4>
//                     <a href={html_url}>profile</a>
//                 </div>
//                 </li>
//             );
//             })}
//         </ul>
//         </>
//     );
//     };

//     export default UseEffectFetchData;

// export const Book = (props) => {
//     const clickHandler = () => {
//         alert('Hello World');
//     }
//     const { img, title, author } = props
//     return(
//         <article className = 'book'>
//             <img src={img} alt='' />
//             <h1 onClick={() => console.log(title)}>{title}</h1>
//             <h4>{author}</h4>
//             <button type='button' onClick={clickHandler}>Example</button>
//         </article>
//     );  
//     }



//     import React, { useState, useEffect } from 'react';
// import '../components/booklistComponent.css'
// import Books from '../components/bookSample.js'


//     const Booklist = () => {
//     const [books, setBooks] = useState([]);

//     const getBooks= async () => {
//         const response = await fetch(Books);
//         const books = await response.json();
//         setBooks(books);
//         // console.log(users);
//     };

//     useEffect(() => {
//         getBooks();
//     }, []);
//     return (
//         <>
//         <div>
//         <ul className='users'>
//             {books.map((book) => {
//             const { id, img, title, author, category, description, year  } = book;
//             return (
//                 <article className = 'book'>
//                 <li key={id}>
//                 <div>
//                 <img src={img} alt='' />
//                 <h4>{title}</h4>
//                 <h4>{author}</h4>
//                 <h4>{category}</h4>
//                 <h4>{description}</h4>
//                 <h4>{year}</h4>
//                 <button onClick={() => console.log(category)}>ADD TO WISHLIST</button>
//                 </div>
//                 </li>
//                 </article>
//             );
//             })}
//         </ul>
//         </div>
//         </>
//     );
//     };

//     export default Booklist;