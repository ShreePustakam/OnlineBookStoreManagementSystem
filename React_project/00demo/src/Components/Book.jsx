import './Styles/bookDiv.css';
//import axios from 'axios';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';


function Book() {

  const [Book ] = useState({"Image":"http://172.18.4.178:3000/book1.jpg","Title":"Description Title","Desc":"Your description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Nulla sagitis mi vitae nunc lobortis, ac fermentum libero fringilla. Proin eleifendjusto vel ex euismod, non tincidunt dolor luctus.","Price":"200"});
  //const [Books, setBooks ] = useState({"Image":"","Title":"","Desc":"","Price":""});
    return ( 
        <>
      <div className="container  DivStyle">
  <div className="row">
    
    <div className="col-md-6">
      <img src ={Book.Image} className="img-fluid"/>
    </div>

   
    <div className="col-md-6">
      <h2 id='BookTitle'>{Book.Title}</h2>
        <div className='DivDesc' >
        <p id='BookDesc'>{Book.Desc} 
      </p>
        </div>

      <div className='transparent-div col-md-10 relative-bottom'>
      <button className="btn btn-success my-2 my-sm-0 mx-sm-3 btn-lg" type="submit">Buy Now</button>
      <h5 id='DiscountPrice' className="text-left text-dark mx-sm-3 fs-3 text-decoration-line-through">₹ {Book.Price*2}</h5>
      <h3 id='BookPrice' className="text-left text-dark font-weight-bold mx-sm-3 fs-1">₹ {Book.Price}</h3>
      <button className="btn btn-warning my-2 my-sm-0 mx-sm-3" type="submit">Add to cart</button>
      <button className="btn btn-primary my-2 my-sm-0 mx-sm-3" type="submit">Add to wishlist</button>
      
      

      </div>
    </div>
  </div>
</div>
    {/* <div className="image-description-container">
      <div className="image-container">
        <img src='http://localhost:3000/book1.jpg' alt="Description" />
      </div>
      <div className="description-container">
        <p>Ankur Warikoo is an entrepreneur and content creator whose deep, witty and brutally honest thoughts on success and failure, money and investing, self-awareness and personal relationships have made him one of India’s top personal brands. In his first book, Ankur puts together the key ideas that have fuelled his journey – one that began with him wanting to be a space engineer and ended with him creating content that has been seen and read by millions. His thoughts range from the importance of creating habits for long-term success to the foundations of money management, from embracing and accepting failure to the real truth about learning empathy. This is a book to be read, and reread, a book whose lines you will underline and think about again and again, a book you will give your family and friends and strangers. Ankur hopes for this book to become the most gifted book ever!</p>
      </div> */}
    
            


               
                
        </>
     );
}

export default Book;