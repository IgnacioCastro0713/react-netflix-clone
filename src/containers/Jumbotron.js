import React from 'react';
import jumboData from '../fixtures/jumbo';
import { JumbotronComponent } from '../components';


export function JumbotronContainer() {
  return (
    <JumbotronComponent.Container>
      { jumboData.map(item =>
        <JumbotronComponent key={ item.id } direction={ item.direction }>
          <JumbotronComponent.Pane>
            <JumbotronComponent.Title>{ item.title }</JumbotronComponent.Title>
            <JumbotronComponent.SubTitle>{ item.subTitle }</JumbotronComponent.SubTitle>
          </JumbotronComponent.Pane>
          <JumbotronComponent.Pane>
            <JumbotronComponent.Image src={ item.image } alt={ item.alt }/>
          </JumbotronComponent.Pane>
        </JumbotronComponent>) }
    </JumbotronComponent.Container>
  );
}


