import { Post } from './Post';
import { Header } from './components/Header';

import './global.css';

export function App(){
  return(
    <div>
      <Header />
      <Post
        author="John Doe"
        content="Hello, world!"
      />
      <Post
        author="Jane Doe"
        content="Hello, world!"
      />
      <Post
        author="John Smith"
        content="Hello, world!"
      />
    </div>
  )
}