import React from 'react';
import Book from '../Book/book';

function BookViewer(props){
    return(

        <div className="row row-spacer">
            <div className="col-md-4">
                {<button onClick={() => props.PreviousBook()}>Previous Book</button>}
            </div>
            <div className="col-md-4">
                <Book book={props.book}/> 
                <h1>{props.book.title}</h1>
                <h4>{props.book.author}</h4> 
            </div> 
            <div className="col-md-4"> 
                {<button onClick={() => props.NextBook()}>Next Book</button>} 
            </div>
        </div> 
    )
}

export default BookViewer;