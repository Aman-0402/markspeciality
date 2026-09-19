import { useState } from 'react';
import { Check, Copy, Mail, Share2 } from 'lucide-react';

export default function ShareButtons({ title, path }) {
  const [copied, setCopied] = useState(false);
  const url = `https://markspeciality.com${path}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        // Share was cancelled or unsupported; no action needed.
      }
    } else {
      handleCopy();
    }
  };

  return (
    <div className="share-buttons">
      <span className="share-buttons__label">Share this article:</span>
      <button type="button" className="icon-button" onClick={handleNativeShare} aria-label="Share article">
        <Share2 size={18} aria-hidden="true" />
      </button>
      <a
        className="icon-button"
        href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`}
        aria-label="Share via email"
      >
        <Mail size={18} aria-hidden="true" />
      </a>
      <button
        type="button"
        className="icon-button"
        onClick={handleCopy}
        aria-label="Copy article link"
      >
        {copied ? <Check size={18} aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}
      </button>
      {copied ? <span className="share-buttons__status">Link copied</span> : null}
    </div>
  );
}
