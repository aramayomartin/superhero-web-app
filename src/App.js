import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Detail from './components/Detail/Detail';
import MyTeam from './components/MyTeam/MyTeam';
import axios from 'axios';


function App() {
  // STATES 
  const [searched, setSearched] = useState([]);
  const [favs, setFavs] = useState([]);
  const [goodCounter, setGoodCounter] = useState(0);
  const [badCounter, setBadCounter] = useState(0);
  // FUNCTIONS
  async function getSuperheroByName(name) {
    var superheroFounded = await axios.get(`https://www.superheroapi.com/api.php/7091252890915481/search/${name}`);
    if (!superheroFounded.data.results) {
      alert('Superhero not founded, try again!');
      setSearched([]);
    }
    else {
      setSearched(superheroFounded.data.results);
    }
  }
  function addFavorite(superhero) {
    if (superhero.biography.alignment === 'good' && goodCounter < 3) {
      const aux = favs.concat(superhero);
      alert(`${superhero.name} ha sido agregado.`)
      setFavs(aux);
      return setGoodCounter(goodCounter+1);
    }else if(superhero.biography.alignment === 'bad' && badCounter < 3){
      const aux = favs.concat(superhero);
      alert(`${superhero.name} ha sido agregado.`)
      setFavs(aux);
      return setBadCounter(badCounter+1);
    } 
    if(badCounter ===3 || goodCounter === 3){
      alert('Solo se permiten 3 villanos y 3 heroes.')
    }
  }
  function deleteFromMyTeam(id) {
    const auxToCounter = favs.filter(e=>e.id===id);
    const aux = favs.filter(e => e.id !== id);
    if(auxToCounter[0].biography.alignment==='good'){setGoodCounter(goodCounter-1);}
    else {setBadCounter(badCounter-1);}
    setFavs(aux);
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route
            exact path='/home'
            element={<Home
              searched={searched}
              setSearched={setSearched}
              favs={favs}
              setFavs={setFavs}
              getSuperheroByName={getSuperheroByName}
              addFavorite={addFavorite}
              deleteFromMyTeam={deleteFromMyTeam}
            />}
          />
          <Route path='/:id' element={<Detail />} />
          <Route path='/myTeam' element={<MyTeam team={favs}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
