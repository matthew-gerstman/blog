import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { ProgressBar } from './components/ProgressBar';
import { SearchModal } from './components/SearchModal';
import { FindInPage } from './components/FindInPage';
import { TechRedirect } from './components/TechRedirect';
import { Home } from './pages/Home';
import { Article } from './pages/Article';
import { Talks } from './pages/Talks';
import { Resume } from './pages/resume/Resume';
import { About } from './pages/resume/About';
import { useTheme } from './hooks/useTheme';
import { useKeyboard } from './hooks/useKeyboard';
import posts from './data/posts';
import { projectsMap } from './data/projects';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [searchOpen, setSearchOpen] = useState(false);
  const [findOpen, setFindOpen] = useState(false);

  // Convert projects map to array for search
  const projectsArray = Object.values(projectsMap);

  useKeyboard({
    onSearch: () => setSearchOpen(true),
    onEscape: () => {
      setSearchOpen(false);
      setFindOpen(false);
    },
    onFindInPage: () => setFindOpen(true),
  });

  return (
    <BrowserRouter basename="/">
      <ProgressBar />
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        posts={posts}
        projects={projectsArray}
      />
      <FindInPage isOpen={findOpen} onClose={() => setFindOpen(false)} />
      <Routes>
        <Route path="/" element={<Resume />} />
        <Route path="/writing" element={<Home posts={posts} />} />
        <Route path="/writing/:slug" element={<Article posts={posts} />} />

        {/* Redirect /tech to /writing */}
        <Route path="/tech" element={<Navigate to="/writing" replace />} />

        {/* Redirect /tech/* to /writing/* */}
        <Route path="/tech/:slug" element={<TechRedirect />} />

        {/* Redirect /hello-there to homepage */}
        <Route path="/hello-there" element={<Navigate to="/" replace />} />

        <Route path="/talks" element={<Talks />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
