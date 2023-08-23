import React from 'react';

const LifecycleExFuncThird = (props) => {
    console.log(props);
    return <h2>This is a component that receives a [{props.pValue}]</h2>;
    
};

export default LifecycleExFuncThird;