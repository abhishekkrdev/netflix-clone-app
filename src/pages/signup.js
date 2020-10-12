import React, { Fragment, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { HeaderContainer, FooterContainer } from '../containers';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

function SignUp() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Normal Validation
  const isInvalid = firstName === '' || password === '' || emailAddress === '';

  const handleSignUp = (event) => {
    event.preventDefault();

    // Firebase works here!
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) => {
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1
          })
          .then(() => {
            history.push(ROUTES.BROWSE);
          });
      })
      .catch((err) => {
        setFirstName('');
        setEmailAddress('');
        setPassword('');
        setError(err.message);
      });
  };

  return (
    <Fragment>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignUp} method='POST'>
            <Form.Input
              placeholder='First Name'
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
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
            Already a user ?{''}
            {''}
            <Form.Link to='/signin'> Sign In</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a bot .Learn more
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </Fragment>
  );
}

export default SignUp;
