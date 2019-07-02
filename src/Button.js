import React, { useState } from 'react';

const Button = () => {
    const [buttonText, setButtonText] = useState('click here', 'please')
    return (
        <button
            onClick={() => setButtonText('Thanks', 'Been Clicked')} 
            type='button'
        >
            {buttonText}
        </button>
    )
}

export default Button;