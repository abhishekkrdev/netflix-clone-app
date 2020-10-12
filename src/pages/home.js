import React, { Fragment } from 'react';
import { OptForm, Feature } from '../components';
import { JumbotronContainer, FooterContainer, FaqsContainer, HeaderContainer } from '../containers';

function Home() {
  return (
    <Fragment>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited films,Tv programmes and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder='Email Adderess' />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your membership
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </Fragment>
  );
}

export default Home;
