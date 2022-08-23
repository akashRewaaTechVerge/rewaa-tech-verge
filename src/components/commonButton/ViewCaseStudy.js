import React from 'react'
import './ButtonStyle.css'
function ViewCaseStudy({ color, link }) {
    const handleRedirect = () => {
        window.open(link, "_blank", "noopener,noreferrer");
    }

    return (
        <>
            <button onClick={handleRedirect} style={{
                borderRadius: '25px', border: 'none', background: color, padding: '8px', color: '#FFFFFF', fontFamily: 'Poppins', fontSize: '12px', wordWrap: 'break-word', position: 'absolute', bottom: '30%',
                right: '33%', margin: '0px -50px -15px 0px'

            }} className='button_cont'>
                View Case Study
            </button>
        </>
    )
}

export default ViewCaseStudy