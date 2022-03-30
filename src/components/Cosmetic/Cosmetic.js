import React from 'react';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const {name,age,_id,picture}=props.cosmetic
    return (
        <div className='cosmetic'>
            <h2>name:{name}</h2>
            <p>Age:{age}</p>
         <p>id:{_id}</p>
       
        
          <img src={picture} alt="" />

          </div>
           
           
      
       
    );
};

export default Cosmetic;