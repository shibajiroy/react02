import React from "react";
function Youtube(props){
    return (
        <iframe width="560" height="315" src={props.source} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    );
}

export default Youtube;