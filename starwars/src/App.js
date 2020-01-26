import React from "react";
import axios from "axios";
import './App.css';
import PeopleList from './components/PeopleList';

const App = () => {
  const [page, setPage] = React.useState(1);
  const [people, setPeople] = React.useState([]);

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
  React.useEffect(() => {
    axios
    .get(`https://swapi.co/api/people/?page=${page}`)
    .then(response => {
      setPeople(response.data.results);
    })
    .catch(error => {
      console.log(error)
    });
  }, [page]);
  
  const nextPage = () => {
    setPage(page => page + 1)
  }
  const previousPage = () => {
    if (page > 1) {
      setPage(page => page - 1)
    } else {
      alert('Error: on first page')
    }
  }
  
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <PeopleList
      people={people}
      nextPage={nextPage}
      previousPage={previousPage}
      />
    </div>
  );
}

export default App;
