import axios from 'axios';
import { GetStaticProps } from 'next';
import React from 'react';

import { Button, Htag, Ptag, Tag, Rating, Input, Textarea } from '../components';
import { API } from '../helpers/api';
import { MenuItem } from '../interfaces/menu.interface';
import { withLayout } from '../layouts/Layout';

const Home = ({ menu, firstCategory }: IHome): JSX.Element => {
  const [rating, setRating] = React.useState<number>(4);

  return (
    <>
      <Htag tag="h1">asdfasdfasdf</Htag>
      <Button appearance="primary" arrow="down" className="sdfgsdfgsdf">
        primary
      </Button>
      <Button appearance="ghost" arrow="right" className="sdfgsdfgsdf">
        ghost
      </Button>
      <Ptag size="s">sdgfadfgasdgasdg</Ptag>
      <Ptag size="m">sdgfadfgasdgasdg</Ptag>
      <Ptag size="l">sdgfadfgasdgasdg</Ptag>
      <Tag size="s" color="green">
        first
      </Tag>
      <Tag size="m" color="primary">
        second
      </Tag>
      <Tag size="m" color="gray">
        another
      </Tag>
      <Rating rating={rating} isEdited setRating={setRating} />
      <Input placeholder="name" />
      <Textarea placeholder="Текст отзыва" />
    </>
  );
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps<IHome> = async () => {
  const firstCategory = 0;

  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory,
  });

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface IHome extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
