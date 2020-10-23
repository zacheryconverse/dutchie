import React from 'react';
import Content from 'components/layout/content';
import PageWrapper from 'components/layout/page-wrapper';

export default function ProductCardPage() {
  return (
    <PageWrapper heading='The Challenge' icon='menu'>
      <Content.List>
        <b>Your tasks:</b>
        <Content.ListItem>Display your new components and their children at the 'the-result' route.</Content.ListItem>
        <Content.ListItem>
          Write a GraphQL query to get a list of products and their data. The GraphQL service is running at{' '}
          <a href='http://localhost:5000'>localhost:5000</a> and can be explored with the GraphiQL UI at that route.
          Apollo client is already in place pointing to that URL, so you'll just need to grab the data to display in the
          new component.
        </Content.ListItem>
        <Content.ListItem>
          Display the products in the style of the design mockup shown in the image below.
        </Content.ListItem>
        <Content.ListItem> List the products in a column layout on mobile and row on desktop. </Content.ListItem>
        <Content.ListItem>
          On click of a product card, toggle a new view. There is no mockup for this and it can be a similar styled
          card, a new modal, page, or whatever you're feeling. You can be creative with this view, but keep the asthetic
          close to the mockup.
        </Content.ListItem>
        <Content.ListItem>
          The new view should display at least the Description, Effects, and Type data also not in the mockup.
        </Content.ListItem>
        <Content.ListItem>
          When the user clicks the new view, it should toggle back to the original one.
        </Content.ListItem>
      </Content.List>
      <Content.Image src='/static/example-product-card.png' />
    </PageWrapper>
  );
}
