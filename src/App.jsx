import './App.css'

import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/Navbar';

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer texto='News'/>
    </>
  )
}

export default App;
