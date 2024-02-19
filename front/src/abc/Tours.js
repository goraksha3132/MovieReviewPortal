import Card from "./Card";
import React from "react";
import './Card.css'
function Tours({tours,removehandle}){
   
    return(     
        <>
      <div className="map">
        <h1 style={{textAlign:"center", color:'white'}}>Welcome to view latest movie review</h1>  
        
      </div>
      <div className="card1">
       
        {
          tours.map((tour)=>{
            return <Card {...tour} removehandle={removehandle}></Card>
        })
        }

       
      </div>
      </>
    );

};

export default Tours;