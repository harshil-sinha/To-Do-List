import React, { useState, useEffect } from "react";
import "../ToDoListApp/App.css";
import ListToDo from "./ListToDo";
import axios from "axios";

const Load = () =>{
  return (
    <>
       <div className="spinner-border text-center text-warning load" role="status">
         <span className="sr-only"></span>
       </div>
    </>
  )
}
const App = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch data from Firebase when the component mounts
    fetchItems();
  }, []);

  const fetchItems = () => {
    setIsLoading(true);
    // Make a GET request to Firebase to fetch the current items
    axios.get("https://react-app-ff034-default-rtdb.firebaseio.com/todos.json")
      .then((response) => {
        const data = response.data;
        if (data) {
          const todoItems = Object.values(data).map((item) => item.text);
          setItems(todoItems);
        } else {
          setItems([]);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        alert("Error fetching data:", error);
        setIsLoading(false);
      });
  };


  const addItem = () => {
    if (inputValue.trim() !== "") {
      // Make a POST request to Firebase to add a new item
      axios
        .post(
          "https://react-app-ff034-default-rtdb.firebaseio.com/todos.json",
          { text: inputValue }
        )
        .then(() => {
          // After successfully adding the item, fetch the updated data
          fetchItems();
        })
        .catch((error) => {
          alert("Error adding data:", error);
        });

      setInputValue("");
    }
  };

  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col col-md-3 text-center m-auto mt-5 col2">
          <h1 className="mt-2">ToDo List</h1>
          <div className="main">
            <input
              type="text"
              className="w-50 mt-2 text-center form-control"
              placeholder="Add an Item"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              style={{ marginLeft: '55px' }}
              className="btn2"
              onClick={addItem}
            >
              <i className="fa fa-plus-square para"></i>
            </button>
          </div>
          <div className="listt">
          {isLoading ? (<Load/>) : (
            <ul className="list-group list-group-flush mt-4 text-start">
              {items.map((item, index) => (
                <ListToDo item={item} index={index} fun={removeItem} key={index} />
              ))}
            </ul>
          )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
