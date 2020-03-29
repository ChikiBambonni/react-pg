import React from "react";
import PropTypes from 'prop-types';
import GridLoader from "react-spinners/GridLoader";

import { warning$1, spacing } from '@styles/variables';
import { useStyles } from './common-spinner.styles';

export const CommonSpinner = ({ loading, height, width }) => {
  const classes = useStyles();

  return (
    <div
      className={classes.loadingShade} 
      style={{
        display: loading ? 'flex' : 'none',
        height: height + spacing * 6 * 2,
        width: width + spacing * 6 * 2,
        margin: -1 * spacing * 6}}>
      <GridLoader
        color={warning$1}
        loading={loading}>
      </GridLoader>
    </div>
  );
}

CommonSpinner.propTypes = {
  loading: PropTypes.bool,
  height: PropTypes.number,
  width: PropTypes.number
}
