import React from 'react';
import { TopPageComponentProps } from './TopPageComponent.props';

export const TopPageComponent = ({
  firstCategory,
  page,
  products,
}: TopPageComponentProps): JSX.Element => {
  return <>{products && products.length}</>;
};
