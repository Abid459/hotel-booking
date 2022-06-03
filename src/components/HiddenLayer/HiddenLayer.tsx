import React, { useState } from 'react';

const HiddenLayer = () => {
    const [isVisible,setIsVisible] = useState<boolean>(false)
    return (
        <div className={`w-full h-screen bg-slate-300 z-40 `} >
            
        </div>
    );
};

export default HiddenLayer;