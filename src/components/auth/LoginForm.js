import React from 'react';
import PropTypes from 'prop-types';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import LoginIcon from '@material-ui/icons/Person';

import { Auth as AUTH } from '../../constants';
import { 
  IonCard, 
  IonCardHeader,
  IonCardContent,
  IonInput,
  IonButton } from '@ionic/react';

const LoginForm = (props) => {
  const {
    handleOnChange,
    handleOnSubmit,
    fields: {
      username,
      password,
    },
    isFetching,
  } = props;

  const { IDENTIFIER, PASSWORD } = AUTH.FIELDS;

  const enableSubmit = username.isValid && password.isValid;

  return (
    <form onSubmit={handleOnSubmit}>
      <IonCard>
        <IonCardHeader
          avatar={
            <Avatar>
              <LoginIcon />
            </Avatar>
          }
          title={
            <Typography variant="h6">
              Please Log In
            </Typography>
          }
        />
        <IonCardContent>
          <IonInput
            name="username"
            value={username.value}
            onChange={handleOnChange}
            placeholder="Email or username"
            error={username.error !== ''}
            helperText={username.error}
            autoFocus
            fullWidth
            margin="normal"
            inputProps={{
              maxLength: IDENTIFIER.MAX_LENGTH,
            }}
            required
          />
          <IonInput
            type="password"
            name="password"
            value={password.value}
            onChange={handleOnChange}
            placeholder="Password"
            error={password.error !== ''}
            helperText={password.error}
            fullWidth
            margin="normal"
            inputProps={{
              maxLength: PASSWORD.MAX_LENGTH,
            }}
            required
          />
        </IonCardContent>
        <CardActions>
          <IonButton
            type="submit"
            variant="contained"
            //disabled={isFetching || !enableSubmit}
            full
            fill ="outline"
           // onChange={handleOnSubmit}
          >
            Login
          </IonButton>
        </CardActions>
        <CardActions>
          <IonButton
            href="/passwordreset/"
            fullWidth
          >
            Forgot password?
          </IonButton>
        </CardActions>
      </IonCard>
    </form>
  );
};

LoginForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  fields: PropTypes.objectOf(PropTypes.any).isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default LoginForm;
