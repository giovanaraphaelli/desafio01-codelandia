import GlobalStyle from './GlobalStyles';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Container from './components/Container';
import Card from './components/Card';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('https://inshorts.deta.dev/news?category=technology')
      .then((response) => {
        setPosts(response.data.data);
      })
      .catch(() => {
        console.log('Deu errado');
      });
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        {posts.map((post) => {
          return (
            <Card
              key={post.id}
              date={post.date}
              title={post.title}
              content={post.content}
            />
          );
        })}
      </Container>
    </>
  );
}

export default App;
