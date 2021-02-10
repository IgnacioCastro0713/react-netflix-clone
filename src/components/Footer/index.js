import React from 'react';
import { Break, Column, Container, Link, Row, Text, Title } from "./styles/Footer";


export default function FooterComponent({ children, ...restProps }) {
  return <Container { ...restProps }>{ children }</Container>
}

FooterComponent.Row = ({ children, ...restProps }) => <Row { ...restProps }> { children }</Row>;

FooterComponent.Column = ({ children, ...restProps }) => <Column { ...restProps }> { children }</Column>;

FooterComponent.Link = ({ children, ...restProps }) => <Link { ...restProps }> { children }</Link>;

FooterComponent.Title = ({ children, ...restProps }) => <Title { ...restProps }> { children }</Title>;

FooterComponent.Text = ({ children, ...restProps }) => <Text { ...restProps }> { children }</Text>;

FooterComponent.Break = ({ children, ...restProps }) => <Break { ...restProps }> { children }</Break>;