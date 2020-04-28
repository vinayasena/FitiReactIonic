// should catch any API errors and act accordingly
export const apiErrorMiddleware = store => next => action => {
  const result = next(action);

  if (result.payload && result.payload.error) {
    const { error } = result.payload;

    switch (error.status) {

      case 400:

        //store.dispatch(alerts.warning('There was an error in your submission: ' + error.data));
        break;

      case 401:

        // store.dispatch(actions.unauthorized());
        break;

      case 404:

        //store.dispatch(alerts.warning(
        //  'Sorry, an error has occurred: this action is not available'));
        break;

      default:

        //store.dispatch(alerts.warning('Sorry, an error has occurred'));
        break;
    }
  }
  return result;
};
