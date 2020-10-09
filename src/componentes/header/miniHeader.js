import React from 'react';
import './estilos.css'


const MiniH = (props) => (
	<header style={{height:25}} className="miniheader">
		<p>{props.text}</p>
	</header>
);

export default MiniH;
