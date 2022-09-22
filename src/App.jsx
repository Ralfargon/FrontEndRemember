import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css'
import styles from './App.module.css';

const post = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Ralfargon.png',
      name: 'Rafael C',
      role: 'Dev',
    },
    content: [
      { type: 'paragraph', content: "Fala galeraa 👋", },
      { type: 'paragraph', content: "Acabei de subir mais um projeto no meu portifa.", },
      { type: 'link', content: "jane.design/doctorcare" }
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/Ralfargon.png',
      name: 'Felipe C',
      role: 'Dev 5',
    },
    content: [
      { type: 'paragraph', content: "Fala galera", },
      { type: 'paragraph', content: "Acabei de subir mais um projeto no meu portifa.", },
      { type: 'link', content: "jane.design/doctorcare" }
    ],
    publishedAt: new Date('2022-05-10 20:00:00')
  },
];


export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {post.map(post => {
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