import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import {useState} from 'react';


const App = () => {
  const [word, setWord] = useState('');

  const handleSearchSubmit = (e) =>{
    e.preventDefault();
    console.log(e.target[0].value);
  };

  console.log(word);
  return (
    
    <div>
      <Header title="Images Gallery"/>
      <Search word= {word} setWord={setWord} handleSearchSubmit={handleSearchSubmit}/>
    </div>
    
  );
}

export default App;
