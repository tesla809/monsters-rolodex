import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super(); // call parent's constructor
    // set state in constructor
    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  // custom method, set context of this with this syntax
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    //  check if whats in search field inside of monsters array
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;

/*
Classes allow us to use state

set state in constructor 

.setState()
modify with setState, 
takes properties that you want to change + new state
CANNOT modify state without using .setState().
Needed to keep uni-directional data flow
.setState() re-renders and updates everything.

fetch - 
Natuve web API to get data

Lifecycle methods:
Methods that are called at different stages 
when the component gets rendered. 

componentDidMount - 
when component loads on DOM the first time.

props.children
stuff passed in between component tags,
like text or other components

key - 
Uses key to distinguish between
similar items when one of them changes,
and only updates the changed item

Fundamental thing about React:
Components should only care about a single concern
Similar to a function with a single concern

When do we break things down into components?
Just like functions. When it starts to do
too many things, when a portion is re-used alot.
Allows for flexibilty, re-useabilty, easy to test.

The component name tells you what it does,
just like functions.
Combine function/component with concerns

To be a great react dev
1. Decide on components
Similar to functions. Simple Got it.
Composibilty is good

2. Decide where state goes
Similar to functions, where to scope information.
Scope as close to local as possible.

3. What changes what state
More complex, but like Rust
Don't want to touch all state?
Want clear ownership of where data is being touched.
Goes unidirectional

State vs props
Pattern state -> prop
State lives only in one location.
State usually changes because of user interaction
Its passed into props (trickles down component tree).

setState() -
Second additional argument in setState is for 
letting you use data after async call
of updateing state, so its not behind.
Its like a promise.
Its called right after setState

Beware, you need to call 
setState() inside an anonymous function.
setState calls render, and render 
will then call set state.
This will create an infinite loop,
if setState() is not placed in a anonymous function.

If setState is placed on an event, 
then the anonymous function will be called and 
then its called. Only when the event is fired off.

Events - 
React has Synthetic Events that allows
you to use events across different browsers
with out manual configuration.

React normalizes events so that 
they have consistent properties 
across different browsers.

Synthetic event tells the app
something happened and it allows it 
to react to it and update the state.

They are also camel cased.

`this` keyword - 
Reference the instance of the class.

`this` gets bounded differently 
depending on how we define the class method.

Methods in classes
Lifecycle methods are bounded already
since they are inherited from the React.Component class
To bound our methods we need to reference them
in the constructor.

To do so, we `.bind()` our function 
to the context of this
ie, our current component in the constructor.

Or we can do it another way
setting the context in the function definition
inside the class with an arrow function.
See handleChange as an example
handleChange = (e) => {...}

Arrow functions get lexical scoping, 
having their `this` bounded to the place 
they were defined in, ie this class.

Good rule of thumb is this: 
Use arrow functions on any class methods 
you define and aren't part of React 
(i.e. render(), componentDidMount()). 
*/
