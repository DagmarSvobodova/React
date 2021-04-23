import React from 'react';

//layout
export interface Header  { 
    logo?: string;
    heading: string;
    image: Image;
    navigation: Array<Route>;
  }

export interface Body  { 
    content: Array<Person> | string;
    button: string;
   
  }

export interface Footer  { 
    footerText: string;
  }
  

export interface Route  { 
    link: string;
    label: string;
}

export interface Image  { 
    path: any;
    alt: string;
}





//data

export interface Person {
  name: string;
  species: string;
  gender: string;
  house: string;
  dateOfBirth: string;
  yearOfBirth: number;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: Wand;
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alive: boolean;
  image: string;
  
}
export interface Wand  { 
    wood: string;
    corse: string;
    length: number;
  }

export interface State  { 
  results: Array<Person>;
  loading: boolean;
  error: boolean;
}




