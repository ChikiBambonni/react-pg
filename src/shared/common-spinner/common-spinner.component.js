import React from "react";
import PropTypes from "prop-types";
import GridLoader from "react-spinners/GridLoader";

import { warning$1 } from '@styles/variables';
import { useStyles } from './common-spinner.styles';

export const CommonSpinner = ({ loading }) => {
  const classes = useStyles();

  return (
    <div
      className={classes.loadingShade} 
      style={{
        display: loading ? 'flex' : 'none'
      }}
    >
      <GridLoader
        color={warning$1}
        loading={loading}>
      </GridLoader>
    </div>
  );
}

CommonSpinner.propTypes = {
  loading: PropTypes.bool
}
