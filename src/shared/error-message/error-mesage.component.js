import React from "react";
import PropTypes from 'prop-types';

import { useStyles } from "./error-message.styles";

export function ErrorMessage ({error}) {
  const classes = useStyles();

  return (
    <div className={classes.errorMessage}>
      {error !== null && (
        <div>
          <h5>Error code:{error.errorCode}</h5>
          <p>Error message:{error.errorMessage}</p>
        </div>
      )}
    </div>
  );
}

ErrorMessage.propTypes = {
  error: PropTypes.exact({
    errorCode: PropTypes.number,
    errorMessage: PropTypes.string
  })
}
