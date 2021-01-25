import * as React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
        <li>
          <Link href="/privacy">
            <a>Privacy</a>
          </Link>
        </li>
        <li>
          <Link href="/terms">
            <a>Terms</a>
          </Link>
        </li>
      </ul>
      <small>© Media Edits, 2021–2021</small>
    </footer>
  );
}
