import { Post } from "./Post"
import { Header } from "./components/Header"

import './global.css'

function App() {
  return (
    <>
      <Header />
      <Post
        author="Alan Hideyuki Shishido"
        content="lorien alguma coisa"
      />
      <Post
        author="Aline Lopes Pascoal"
        content="Lorien Revealed"
      />
      <Post/>
      <Post/>
      <Post/>
    </>
    
  )
}

export default App
