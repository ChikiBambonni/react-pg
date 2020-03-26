import React from 'react';

import { useStyles } from './error-message.styles';

export const ErrorMessage = ({ error }) => {
  const classes = useStyles();

  return (
    <div className={classes.errorMessage}>
      {error !== null &&
        <div>
          <h5>Error code: {error.errorCode}</h5>
          <p>Error message: {error.errorMessage}</p>
        </div>
      }
    </div>
  )
};
