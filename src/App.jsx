import GlobalStyle from './GlobalStyles';
import { useState, useEffect } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Container from './components/Container';
import Card from './components/Card';
import Loading from './components/Loading';
import Footer from './components/Footer';

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

  useEffect(() => {
    AOS.init({ duration: 800 });
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
              <div data-aos="fade-right" key={post.id}>
                <Card
                  date={post.date}
                  title={post.title}
                  content={post.content}
                  url={post.readMoreUrl}
                />
              </div>
            );
          })
        )}
      </Container>
      <Footer />
    </>
  );
}

export default App;
