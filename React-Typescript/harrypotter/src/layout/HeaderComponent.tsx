import { runInContext } from 'node:vm';
import React from 'react';
import { useState, useEffect } from 'react';
import { Header, Image, Route } from '../GeneralComponents/Interfaces';
import HPimage from '../images/HARRY-POTTER-HOGWARTS-LEGACY.jpeg'
import { Link } from "react-router-dom";




const HeaderComponent = () => {
    
    const [routes, setRoutes] = useState<Route[]>(
        [ {link: '/all',
        label: 'All characters'}, {link: '/students',
        label: 'Students'}, {link: '/staff',
        label: 'Hogwarts staff'}  ]
        
      );

   const newImage: Image = {
       path: HPimage,
       alt: 'Castle picture',
        
      };
    
  const newHeader: Header = {
    heading: 'Hogwarts side',
    image: newImage,
    navigation: routes,
    
  };


  return (
    <div className="header">
        
        <h1>{newHeader.heading}</h1>
        <img className="header_img" src={newImage.path} alt={newImage.alt} />

<div className="navigation">
        {routes.map((route, index) =>
          <Link to={route.link} className="route" key={index}>
    
              <p>{route.label}</p>
          </Link>
           ) } 
           
           </div>
      
          
         
          
     
      
    </div>
  );
};

export default HeaderComponent;