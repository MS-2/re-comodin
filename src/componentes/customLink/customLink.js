import React from 'react'
import { Link } from "react-router-dom";
import Paper from '@material-ui/core/Paper';

function IconButtonLink(props) {
    return (
      <Paper className="cubo" elevation={3}>
        <Link to={props.to}>{props.icono}</Link>
      </Paper>
    );
  }

export default IconButtonLink;