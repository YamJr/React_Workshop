import {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
       axios.get("https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=oZ0RJr1hqmfXJtCBIb1aQG8GBIRuqS0I").then(res=>{
          console.log(res.data);
          setBooks(res.data.results.lists)
          setLoading(false);
        }).catch(err=>console.log(err))
  },[])
  return (
  
    <div className='container'>
        <h2>Book Listing App</h2>
        {loading ? "Loading...": ""}
          {books.map((book,key)=>
          <div className='row'>
            <h3>{book.display_name}</h3>
            {/* <div className='col-md-4'> */}
              {book.books.map((_book,key)=>{
              return <div className='col-md-4'>
                  <img src={_book.book_image} alt='books' className='images' />
                  <p>Title:{_book.title}</p>
                  <p>Author:{_book.author}</p>
                  <p>Publisher:{_book.publisher}</p>
              </div>
           })}
            </div> 
          // </div>
             )}
    </div>
  );
}

export default App;
