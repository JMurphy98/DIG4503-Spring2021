import { useState } from 'react';
import Search from './component/Search/search.js';
import Location from './component/Location/location.js'
import Axios from 'axios';

function App () {
  return (
    <div>
      <Search/>
      <Location/>
    </div>
  );
}


export default App;

//added import for location, that got rid of two errors, KEEP that change.