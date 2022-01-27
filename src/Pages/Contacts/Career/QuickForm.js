import React, { useState } from 'react'
import QuickFormContact from './QuickFormContact';
import { Navigate } from 'react-router-dom';

function QuickForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    function submitForm(isSuccess) {
        setIsSubmitted(isSuccess);
    }
    
    return (
        <>
      
        {!isSubmitted ? (
                <QuickFormContact submitForm={submitForm} />
            ) :
            (<div >
                <Navigate to="/Success"/>
            </div>)
            }
            
        </>
    )
}

export default QuickForm
