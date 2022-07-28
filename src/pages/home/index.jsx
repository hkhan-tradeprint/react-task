import React, { useEffect, useState } from 'react'
import './index.scss'
import TodoItem from '../../components/TodoItem';


/**
 * API ENDPOINT - https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10 
 * API DOCUMENTATION - https://jsonplaceholder.typicode.com
 * 
 * Example todo object:
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
 
 Tasks/Guide
 * NOTE: I've ordered these tasks in the order i'd complete them but feel free to do things differently if that's what you're more comfortable with.

 1. You'll need to send an api request in the useEffect using  fetch. This needs to be a GET request to the api endpoint above.
 2. Store the response in the todos state. You'll need to use setTodos below to store this response in state.
    HINT: You can do this bit inside a .then after the fetch api call e.g. exampleApiCall.then((data) => {
        store todos in state here
    })
 3. Import the TodoItem component (stored in components/TodoItem). 
 4. Map over the todos array that you stored in the state (done in point 2 above) and for each todo object, return an instance of the TodoItem component.
 5. Inside the map in point 4, pass the TodoItem component a prop called todo which would be a todo object
 6. Update the TodoItem component to take the todo prop and from it access the values for the following keys: title and completed. Then render just them. 
 
 You can this style in any way you like using the scss files created.

 ONCE YOU COMPLETE THIS, WE CAN LOOK AT MAKING THIS LOOK EVEN BETTER.
 */
const Home = () => {
const [todos, setTodos] = useState([])
useEffect(() => {

},[])
return (
<div><TodoItem/></div>
)
}

export default Home