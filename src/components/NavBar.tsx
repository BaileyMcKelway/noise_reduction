import React from 'react';

export interface INavBarProps {}

export default function NavBar(props: INavBarProps) {
  return (
    <header style={{ border: '3px solid rgb(0, 0, 0)' }}>
      <h1>
        <span className="orange">MEDIA</span> EDITS
      </h1>
    </header>
  );
}
