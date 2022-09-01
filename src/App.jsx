import GlobalStyle from './GlobalStyles';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Container from './components/Container';
import Card from './components/Card';
import Loading from './components/Loading';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://inshorts.deta.dev/news?category=technology')
      .then((response) => {
        setPosts(response.data.data);
        setLoading(false);
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
        {loading ? (
          <Loading />
        ) : (
          posts.map((post) => {
            return (
              <Card
                key={post.id}
                date={post.date}
                title={post.title}
                content={post.content}
                url={post.readMoreUrl}
              />
            );
          })
        )}
      </Container>
    </>
  );
}

export default App;
