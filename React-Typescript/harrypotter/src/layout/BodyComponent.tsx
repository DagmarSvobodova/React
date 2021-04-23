import { runInContext } from 'node:vm';
import React from 'react';
import { useState, useEffect } from 'react';
import FetchingComponent from '../GeneralComponents/FetchingComponent';





const BodyComponent = () => {

   




  return (
    <div className="body">
        
        <FetchingComponent url="http://hp-api.herokuapp.com/api/characters" pageNumber = {1} />
     
      
    </div>
  );
};

export default BodyComponent;