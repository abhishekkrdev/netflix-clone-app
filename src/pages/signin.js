import React, { Fragment, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { HeaderContainer, FooterContainer } from '../containers';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

function SignIn() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Form Validation
  const isInvalid = password === '' || emailAddress === '';

  const handleSignIn = (event) => {
    event.preventDefault();

    // Firebase works here!
    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((err) => {
        setEmailAddress('');
        setPassword('');
        setError(err.message);
      });
  };

  return (
    <Fragment>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignIn} method='POST'>
            <Form.Input
              placeholder='Email address'
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type='password'
              autoComplete='off'
              placeholder='Password'
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type='submit'>
              Submit
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            New to Netflix ?{''}
            {''}
            <Form.Link to='/signup'> Sign Up Now</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a bot.Learn more
          </Form.TextSmall>
        </Form>
      </HeaderContainer>

      <FooterContainer />
    </Fragment>
  );
}

export default SignIn;
