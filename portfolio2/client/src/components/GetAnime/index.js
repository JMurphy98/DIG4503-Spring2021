import Axios from 'axios';
import {useState} from 'react';

//Note to self refer back to Lab11 or Lab12 if stuck
//MOST recent error in Insomnia "Error: Couldn't connect to server"

function GetAnime() {

const[number, setNumber] = useState("");   
const[title, setTitle] = useState("");    
const[licensors, setLicensors] = useState("");
const[source, setSource] = useState("");

const getAnime = async() => {
  const response = await Axios.get("http://localhost:45035/anime/" + number, {
    title:title,
    licensors:licensors,
    source:source
  });
  console.log(response.data);
}

return(
  <div>
    <p className="Question">Get a Anime here.</p>
    <input className="Input" type = "text" placeholder= "Title Here" 
      value={title} onChange={(event) => setTitle(event.target.value)}/>

    <input className="Input" type = "text" placeholder="Licensors Name Here" 
      value={licensors} onChange={(event) => setLicensors(event.target.value)}/>

    <input className="Input" type = "text" placeholder= "Number Here" 
      value={number} onChange={(event) => setNumber(event.target.value)}/>

    <input className="Input" type = "text" placeholder="Source Here" 
      value={source} onChange={(event) => setSource(event.target.value)}/>

    <p className="Submit">Get the Anime</p>
    <button className="Button" onClick = {() => {getAnime()}}>Get</button>
    </div>
  );
}

export default GetAnime;