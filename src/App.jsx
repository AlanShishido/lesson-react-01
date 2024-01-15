import { Post } from "./Post"
import { Header } from "./components/Header"

import './global.css'
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar"

function App() {
  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Alan Hideyuki Shishido"
            content="lorien alguma coisa"
          />
          <Post
            author="Aline Lopes Pascoal"
            content="Lorien Revealed"
          />
        </main>
      </div>
    </>
    
  )
}

export default App
