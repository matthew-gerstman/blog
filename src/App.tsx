import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { SearchModal } from './components/SearchModal';
import { FindInPage } from './components/FindInPage';
import { TechRedirect } from './components/TechRedirect';
import { BlogPostRedirect } from './components/BlogPostRedirect';
import { Home } from './pages/Home';
import { Article } from './pages/Article';
import { Talks } from './pages/Talks';
import { Resume } from './pages/resume/Resume';
import { About } from './pages/resume/About';
import { Obvious } from './pages/Obvious';
import { ShimmerShowcase } from './pages/ShimmerShowcase';
import { useTheme } from './hooks/useTheme';
import { useKeyboard } from './hooks/useKeyboard';
import { useAnalytics } from './hooks/useAnalytics';
import posts from './data/posts';
import { projectsMap } from './data/projects';
import { talks } from './data/talks';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Smooth scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return null;
}

function AppContent() {
  const { theme, toggleTheme } = useTheme();
  const [searchOpen, setSearchOpen] = useState(false);
  const [findOpen, setFindOpen] = useState(false);
  const location = useLocation();

  // Track page views on route changes
  useAnalytics();

  // Convert projects map to array for search
  const projectsArray = Object.values(projectsMap);

  // Only enable find-in-page (/) on article pages
  const isArticlePage =
    location.pathname.startsWith('/writing/') &&
    location.pathname !== '/writing' &&
    location.pathname !== '/writing/';

  useKeyboard({
    onSearch: () => setSearchOpen(true),
    onEscape: () => {
      setSearchOpen(false);
      setFindOpen(false);
    },
    // Only enable slash shortcut on article pages
    onFindInPage: isArticlePage ? () => setFindOpen(true) : undefined,
  });

  return (
    <>
      <ScrollToTop />
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        posts={posts}
        projects={projectsArray}
        talks={talks}
      />
      <FindInPage isOpen={findOpen} onClose={() => setFindOpen(false)} />
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="/writing" element={<Home posts={posts} />} />
        <Route path="/writing/:slug" element={<Article posts={posts} />} />

        <Route path="/talks" element={<Talks />} />
        <Route path="/talks/:talkId" element={<Talks />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/about" element={<About />} />
        <Route path="/obvious" element={<Obvious />} />
        <Route path="/shimmer" element={<ShimmerShowcase />} />
        <Route path="/hello-there" element={<About />} />

        {/* Redirect /tech to /writing */}
        <Route path="/tech" element={<Navigate to="/writing" replace />} />

        {/* Redirect /tech/* to /writing/* */}
        <Route path="/tech/:slug" element={<TechRedirect />} />

        {/* Catch-all for potential blog post slugs at root level */}
        <Route path="/:slug" element={<BlogPostRedirect />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
