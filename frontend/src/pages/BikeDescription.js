import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styled from "styled-components";

const BikeDescription = () => {

     const Container = styled.div`
          width: 100vw;
          height: 100%;
          margin:10px;
`;


    const Info = styled.div`
          font-family: "Gilda Display", serif;
          text-align: center;
          padding-left: 490px;
`;
   const Button = styled.div`
          border-radius: 3px;
`;
   
    const Div = styled.div`
          color: yellow;
          display: block;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: flex-end;
          align-items: flex-end;
          align-content: space-around;
          padding-top: 20px;
          
          
`;
          
               

          
          
    const Span = styled.div`
    //    display: flex;
          color: yellow;
        
       
`;
              

     const Commentaire = styled.div`
          margin: auto;
          width: 80%;
          border: 2px solid white;
          padding: 20px;
         border-radius: 17px;
`;
    


           
          
const DvToo = styled.div`
     margin: auto;
     width: 80%;
     border: 2px solid white;
     padding: 20px;
     border-radius: 17px;
 

`;

const DivThree = styled.div`
     margin: auto;
     width: 80%;
     border: 2px solid white;
     padding: 20px;
     border-radius: 17px;
`;

const P = styled.div`
    display: flex;

   
    
    
`;
     

 
  
    


   
  return (
      <>
       <Navbar />
      

       <Container className='container'>
            <Info className="row">
            <div className="col-12">    
            <h3>Description : </h3>
          <p>Lorem Ipsum is simply dummy text of the printing.
                and <br/>typesetting industry.Lorem Ipsum has been the industry<br/> standard dummy text  since the 1500s,
               when an unknown<br/> printer took a galley of type and scrambled it to make a type <br/>specimen book.
               It has survived not only five centuries.</p>
              
              <button>RESERVER</button>
              </div>
              </Info>
     </Container>

 
           <Span> <i className="fas fa-star star-on"></i>
                  <i className="fas fa-star star-on"></i>
                  <i className="fas fa-star star-on"></i>  
            </Span>
           <P>25 commentaire</P>

          
              <Commentaire>
              <span>Evan D. </span>
              <br />
               <p>Trop bien !!!!!</p>
              <Div>
                  <i className="fas fa-star star-on"></i>
                  <i className="fas fa-star star-on"></i>
                  <i className="fas fa-star star-on"></i>
                  <i className="fas fa-star star-on"></i>
                  <i className="fas fa-star star-on"></i>
                  </Div>
               </Commentaire>
                <br />
                <br />
                 

                  
              <DvToo>
                   <span>Ahmed E. </span>
                   <br />
                   <p>Ca roule ça roule..</p>
              <Div>
                  <i className="fas fa-star star-on"></i>
                  <i className="fas fa-star star-on"></i>
                  <i className="fas fa-star star-on"></i>
                  <i className="fas fa-star star-on"></i>
                   
                  </Div>
                  </DvToo>
                  <br />
                <br />
             
                  <DivThree>
                  <span>Hanaa W. </span>
                  <br />
                  <p>Oh là là super!</p>

              <Div>
             
                  <i className="fas fa-star star-on"></i>
                  <i className="fas fa-star star-on"></i>
                  <i className="fas fa-star star-on"></i>
                   
                  </Div>
                  </DivThree>
         
                  
                 
               
          
             
                
               
      
       <Footer />
       </>
      
  )
}

export default BikeDescription;
