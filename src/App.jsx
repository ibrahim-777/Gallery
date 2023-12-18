import {Routes,Route} from 'react-router-dom'
import Photo from './Photo';
import Home from './Home';
// import axios  from 'axios';
function App() {
  // const [state, setstate] = useState([]);
  // const getData = async ()=> {
  //   const response = await axios.get('https://picsum.photos/v2/list?page=3&limit=9')
  //   setstate(response.data)
  // }
 
  return (
    <div className="App">
<Routes>
  <Route exact path='/' element={<Home/>}/>
  <Route exact path='/photo/:id' element={<Photo/>}/>
</Routes>
    </div>
  );
}
export default App;
