import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import Link from 'next/link';
import Image from 'next/image';

export interface IToolCardProps {
  content: any;
}

export default function ToolCard({ content }: IToolCardProps) {
  const uniqueClass = `toolcard toolcard${content.id}`;
  return (
    <Link href={content.link}>
      <Paper elevation={3} className={uniqueClass}>
        <h1>{content.title}</h1>
        <img src={content.image} alt="noise reduction tool" />
        {/* <Image
          src={content.image}
          alt="noise reduction tool"
          className="card_image"
          layout="responsive"
          width={400}
          height={100}
          quality={100}
        /> */}
      </Paper>
    </Link>
  );
}
