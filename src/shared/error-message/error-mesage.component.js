import React from 'react';
import './error-message.component.scss';

export const ErrorMessage = ({ error }) => {
  return (
    <div className="error-message">
      {error !== null &&
        <div>
          <h5>Error code: {error.errorCode}</h5>
          <p>Error message: {error.errorMessage}</p>
        </div>
      }
    </div>
  )
};
