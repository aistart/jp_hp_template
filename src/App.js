import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import CompanyPage from './pages/CompanyPage';
import ContactPage from './pages/ContactPage';
import './styles/App.css';

// 简单的加载组件
const Loading = () => (
  <div style={{ textAlign: 'center', padding: '50px' }}>
    Loading...
  </div>
);

function App() {
  // const { i18n } = useTranslation();

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/company" element={<CompanyPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App; 