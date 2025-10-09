import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { ProgressBar } from './components/ProgressBar';
import { SearchModal } from './components/SearchModal';
import { FindInPage } from './components/FindInPage';
import { Home } from './pages/Home';
import { Article } from './pages/Article';
import { Talks } from './pages/Talks';
import { useTheme } from './hooks/useTheme';
import { useKeyboard } from './hooks/useKeyboard';
import { posts } from './data/posts';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [searchOpen, setSearchOpen] = useState(false);
  const [findOpen, setFindOpen] = useState(false);

  useKeyboard({
    onSearch: () => setSearchOpen(true),
    onEscape: () => {
      setSearchOpen(false);
      setFindOpen(false);
    },
    onFindInPage: () => setFindOpen(true)
  });

  return (
    <BrowserRouter>
      <ProgressBar />
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} posts={posts} />
      <FindInPage isOpen={findOpen} onClose={() => setFindOpen(false)} />
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="/tech/:slug" element={<Article posts={posts} />} />
        <Route path="/talks" element={<Talks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
