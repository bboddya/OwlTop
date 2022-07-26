import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IRating extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isEdited?: boolean;
  rating: number;
  setRating?: (rating: number) => void;
}
