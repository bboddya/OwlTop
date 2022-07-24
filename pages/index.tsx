import { Button, Htag, Ptag, Tag } from '../components';

export default function Home(): JSX.Element {
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
      <Tag size="m" color="grey">
        another
      </Tag>
    </>
  );
}
