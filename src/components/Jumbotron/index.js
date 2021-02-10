import React from 'react';
import { Container, Image, Inner, Item, Pane, SubTitle, Title } from './styles/Jumbotron';


export default function JumbotronComponent({ children, direction = 'row', ...restProps }) {
  return (
    <Item { ...restProps }>
      <Inner direction={ direction }>{ children }</Inner>
    </Item>
  );
}

JumbotronComponent.Container = ({ children, ...restProps }) => <Container { ...restProps }>{ children }</Container>;

JumbotronComponent.Pane = ({ children, ...restProps }) => <Pane { ...restProps }>{ children }</Pane>;

JumbotronComponent.Title = ({ children, ...restProps }) => <Title { ...restProps }>{ children }</Title>;

JumbotronComponent.SubTitle = ({ children, ...restProps }) => <SubTitle { ...restProps }>{ children }</SubTitle>;

JumbotronComponent.Image = ({ ...restProps }) => <Image { ...restProps }/>;
