import React, { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [affix, setAffix] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setAffix(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Função universal para scroll suave
  const handleSmoothScroll = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <nav className={`nav${affix ? ' affix' : ''}`}> {/* affix class for shrink effect */}
      <div className="container">
        <div id="mainListDiv" className={`main_list${menuOpen ? ' show_list' : ''}`}
          style={menuOpen ? { display: 'block' } : {}}>
          <ul className="navlinks">
            {NAV_LINKS.map(link => (
              <li key={link.id}>
                <a href={`#${link.id}`} onClick={e => { e.preventDefault(); handleSmoothScroll(link.id); }}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <span className={`navTrigger${menuOpen ? ' active' : ''}`} onClick={() => setMenuOpen(m => !m)} aria-label="menu" tabIndex={0} role="button">
          <i></i>
          <i></i>
          <i></i>
        </span>
      </div>
    </nav>
  );
}