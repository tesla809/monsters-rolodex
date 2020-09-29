import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);

/*
Functional components don't have access to:
- constructors
- internal state
- lifecycle methods 

Used to just render some HTML via JSX

Function components gets some props, 
and returns JSX that turns into HTML
These are called presentational components.

Usually start with functional components
then if you need internal state, 
update to class components.

Functional components are
easier to read, reason and test

Aim for writing smaller and smaller 
reusable components.

Not placing state here is good idea
because the state needs be used 
in another component, ie function.

Scope as tightly as possible,
but can be accessed 
where its needs to be used.
*/
