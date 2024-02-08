import { Post } from './components/Post'
import { Header } from './components/header';
import { SideBar } from './components/Sidebar';
import './global.css';

import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatar_url: 'https://avatars.githubusercontent.com/u/111546608?v=4',
      name: 'Geraldo Ferraz',
      role: 'Web Developer',
    },
    content: [
      {type:"paragraph", content: 'Fala galeraa 👋',},
      {type:"paragraph", content: 'Meu Nome é Geraldo Ferraz e esse é o meu primeiro projeto em conjunto com a Rocketseat, utilizando Reactjs 🚀',},
      {type:"link", content: 'Visite aqui o meu', URL:'Github' , src: 'https://github.com/geraldoferraz'},
    ],

    publishedAt: new Date('2024-02-06T18:00:00Z')
  },

  {
    id: 2,
    author: {
      avatar_url: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Software Engineer',
    },
    content: [
      {type:"paragraph", content: 'Fala galera 👋',},
      {type: "paragraph", content: 'Meu Nome é Mayk Brito e venho aqui agradecer a presença de todos na NLW Week!',},
      {type: "link", content: 'para acompanhar mais projetos, ', URL: 'Acesse aqui 🚀' , src: 'https://github.com/maykbrito'},
    ],

    publishedAt: new Date('2024-02-06T10:00:00Z')
  },
]

export function App() {

  return (
    <div>
      <Header />

    <div className={styles.wrapper}>
      <SideBar />

      <main>
        {posts.map(post => {
          return (
          <Post 
            key = {post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
          />
        )
        })}
      </main>

    </div>
    </div>
  )
}

export default App
