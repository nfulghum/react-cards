import React, { useState, useEffect } from 'react';

const useFlip = (initialState = true) => {
    const [isFlipped, setIsFlipped] = useState(initialState);

    const flip = () => {
        setIsFlipped(isUp => !isUp);
    };

    return [isFlipped, flip];
}

export default useFlip;