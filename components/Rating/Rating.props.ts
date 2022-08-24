import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export interface IRating extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isEdited?: boolean;
  rating: number;
  setRating?: (rating: number) => void;
  error?: FieldError;
}
