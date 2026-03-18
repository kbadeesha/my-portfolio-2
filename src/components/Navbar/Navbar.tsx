import React, { useState } from 'react';
import { Home, User, BookOpen, Mail } from 'lucide-react';
import './Navbar.css';

interface NavLink {
  name: string;
  href: string;
  isButton?: boolean;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const navLinks: NavLink[] = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Projects', href: '/projects', icon: BookOpen },
  { name: 'About', href: '/about', icon: User },
  { name: 'Contact', href: '/contact', icon: Mail },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">MyApp</div>

        {/* Hamburger menu */}
        <button
          className={`navbar-toggle ${isOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        ></button>

        {/* Nav Links */}
        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => {
            const Icon = link.icon!;
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`${link.isButton ? 'btn-primary' : ''} link-class`}
                  onClick={() => setIsOpen(false)} // close menu on click
                >
                  <Icon />
                  <div className="link-name">{link.name}</div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
