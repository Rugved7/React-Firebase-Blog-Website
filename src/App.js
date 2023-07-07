import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Post from './components/Post'
import Login from './components/Login'
import { useState } from 'react'
function App() {
  const [isAuth,setIsAuth] = useState(false)

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Post' element={<Post />} />
        <Route path='/Login' element={< Login setIsAuth={setIsAuth}/>} />


      </Routes>
    </Router>
  );
}

export default App;
