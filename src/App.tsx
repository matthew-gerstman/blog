import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { ProgressBar } from './components/ProgressBar';
import { SearchModal } from './components/SearchModal';
import { FindInPage } from './components/FindInPage';
import { Home } from './pages/Home';
import { Article } from './pages/Article';
import { Talks } from './pages/Talks';
import { Career } from './pages/career/Career';
import { About } from './pages/career/About';
import { Datadog } from './pages/career/Datadog';
import { Bluecore } from './pages/career/Bluecore';
import { Dropbox } from './pages/career/Dropbox';
import { TodayTix } from './pages/career/TodayTix';
import { Zetta } from './pages/career/Zetta';
import { DanceMarathon } from './pages/career/DanceMarathon';
import { Skills } from './pages/career/Skills';
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
    <BrowserRouter basename="/">
      <ProgressBar />
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} posts={posts} />
      <FindInPage isOpen={findOpen} onClose={() => setFindOpen(false)} />
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="/tech/:slug" element={<Article posts={posts} />} />
        <Route path="/talks" element={<Talks />} />
        <Route path="/career" element={<Career />} />
        <Route path="/about" element={<About />} />
        <Route path="/career/datadog" element={<Datadog />} />
        <Route path="/career/bluecore" element={<Bluecore />} />
        <Route path="/career/dropbox" element={<Dropbox />} />
        <Route path="/career/todaytix" element={<TodayTix />} />
        <Route path="/career/zetta" element={<Zetta />} />
        <Route path="/career/dance-marathon" element={<DanceMarathon />} />
        <Route path="/career/skills" element={<Skills />} />
        <Route path="*" element={<Home posts={posts} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
