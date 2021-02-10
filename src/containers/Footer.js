import React from 'react';
import { FooterComponent } from '../components';


export default function FooterContainer() {
  return (
    <FooterComponent>
      <FooterComponent.Title>Questions? Contact us.</FooterComponent.Title>
      <FooterComponent.Break/>
      <FooterComponent.Row>
        <FooterComponent.Column>
          <FooterComponent.Link href="#">FAQ</FooterComponent.Link>
          <FooterComponent.Link href="#">Investor Relations</FooterComponent.Link>
          <FooterComponent.Link href="#">Ways to Watch</FooterComponent.Link>
          <FooterComponent.Link href="#">Corporate Information</FooterComponent.Link>
          <FooterComponent.Link href="#">Netflix Originals</FooterComponent.Link>
        </FooterComponent.Column>
        <FooterComponent.Column>
          <FooterComponent.Link href="#">Help Centre</FooterComponent.Link>
          <FooterComponent.Link href="#">Jobs</FooterComponent.Link>
          <FooterComponent.Link href="#">Terms of Use</FooterComponent.Link>
          <FooterComponent.Link href="#">Contact Us</FooterComponent.Link>
        </FooterComponent.Column>
        <FooterComponent.Column>
          <FooterComponent.Link href="#">Account</FooterComponent.Link>
          <FooterComponent.Link href="#">Redeem gift cards</FooterComponent.Link>
          <FooterComponent.Link href="#">Privacy</FooterComponent.Link>
          <FooterComponent.Link href="#">Speed Test</FooterComponent.Link>
        </FooterComponent.Column>
        <FooterComponent.Column>
          <FooterComponent.Link href="#">Media Centre</FooterComponent.Link>
          <FooterComponent.Link href="#">Buy gift cards</FooterComponent.Link>
          <FooterComponent.Link href="#">Cookie Preferences</FooterComponent.Link>
          <FooterComponent.Link href="#">Legal Notices</FooterComponent.Link>
        </FooterComponent.Column>
      </FooterComponent.Row>
      <FooterComponent.Break/>
      <FooterComponent.Text>Netflix United Kingdom</FooterComponent.Text>
    </FooterComponent>
  );
}