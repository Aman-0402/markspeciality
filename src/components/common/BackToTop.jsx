import { ArrowUp } from 'lucide-react';
import useScrollState from '../../hooks/useScrollState.js';

export default function BackToTop() {
  const isVisible = useScrollState(480);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      className={`back-to-top ${isVisible ? 'is-visible' : ''}`}
      onClick={handleClick}
      aria-label="Back to top"
    >
      <ArrowUp size={20} aria-hidden="true" />
    </button>
  );
}
