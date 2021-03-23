import React from 'react';
import Link from 'next/link';

export default function NavBar() {
  return (
    <header>
      <Link href="/">
        <h1>MediaEdits.io</h1>
      </Link>
      <div className="nav_border" />
      <div className="nav_links">
        <Link href="/">
          <a className="nav_link">Home</a>
        </Link>
        <Link href="/noisereduction">
          <a className="nav_link">Noise Reduction</a>
        </Link>
        <Link href="/contact">
          <a className="nav_link">Contact</a>
        </Link>
      </div>
    </header>
  );
}
