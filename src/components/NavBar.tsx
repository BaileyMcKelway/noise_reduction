import React from 'react';
import Link from 'next/link';
export interface INavBarProps {}

export default function NavBar(props: INavBarProps) {
  return (
    <header>
      <Link href="/">
        <h1>MediaEdits.io</h1>
      </Link>
    </header>
  );
}
