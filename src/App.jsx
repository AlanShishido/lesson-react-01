import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'

import './global.css'


const posts = [
  {
      id: 1,
      author: {
          avatar: "https://github.com/alanshishido.png",
          name: "Alan Hideyuki Shishido",
          role: "Electrical Engineer"
      },
      content: [
          {type: 'paragraph', content: 'Fala galeraa 👋'},
          {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
          {type: 'link', content: 'jane.design/doctorcare'}
      ],
      publishedAt: new Date('2024-01-17 20:00:00'),
  },
  {
      id: 2,
      author: {
          avatar: "https://github.com/diego3g.png",
          name: "Diego Fernandes",
          role: "CTO @Rockeseat"
      },
      content: [
          {type: 'paragraph', content: 'Fala galeraa 👋'},
          {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
          {type: 'link', content: 'jane.design/doctorcare'}
      ],
      publishedAt: new Date('2024-01-16 20:00:00'),
  },
  {
      id: 3,
      author: {
          avatar: "https://github.com/maykbrito.png",
          name: "Mayk Brito",
          role: "Educator @Rockeseat"
      },
      content: [
          {type: 'paragraph', content: 'Fala galeraa 👋'},
          {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
          {type: 'link', content: 'jane.design/doctorcare'}
      ],
      publishedAt: new Date('2024-01-12 20:00:00'),
  },
]

function App() {
  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
    
  )
}

export default App
