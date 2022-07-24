import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

// extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement - наследование дефолтных настроек тега для того, чтобы использовать их на импортируемом компоненте, а не на самой кнопке
export interface IButton
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  appearance: 'primary' | 'ghost';
  children: ReactNode; // передает все содержание тега
  arrow?: 'down' | 'right' | 'none';
}
