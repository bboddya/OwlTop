import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ITag extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size: 's' | 'm';
  color: 'ghost' | 'red' | 'green' | 'gray' | 'primary';
  link?: string;
  children: ReactNode;
}
