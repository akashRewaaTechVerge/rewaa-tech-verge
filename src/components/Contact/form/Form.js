import React, { useState } from 'react'
import FormContact from './FormContact';
import { Navigate } from 'react-router-dom';

function Form() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    function submitForm(isSuccess) {
        setIsSubmitted(isSuccess);
    }
    
    return (
        <>
      
        {!isSubmitted ? (
                <FormContact submitForm={submitForm} />
            ) :
            (<div >
                <Navigate to="/Success"/>
            </div>)
            }
            
        </>
    )
}

export default Form
