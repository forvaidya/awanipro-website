import { useState } from 'react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export function Header({ darkMode, toggleDarkMode }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm">
      <nav className="container-max py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="/media/awanipro-final-logo.svg" 
            alt="AwaniPro Logo" 
            className="h-12 w-auto object-contain dark:invert"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('about')} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
            About
          </button>
          <button onClick={() => scrollToSection('services')} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
            Services
          </button>
          <button onClick={() => scrollToSection('contact')} className="btn-primary">
            Contact Us
          </button>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="container-max py-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection('about')} className="text-left text-gray-600 dark:text-gray-300 hover:text-blue-600 py-2">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-left text-gray-600 dark:text-gray-300 hover:text-blue-600 py-2">
              Services
            </button>
            <button onClick={() => scrollToSection('contact')} className="btn-primary w-full text-center">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
