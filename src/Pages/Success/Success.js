import React from 'react'

import Lottie  from 'react-lottie';
import animationData from '../../Pages/Contacts/Career/success.json'

function Success(props) {
 
  const defaultStyle={
    color:'#2babe3',
    fontSize: 30,
    marginBottom:70,
    justifyItem:'center',
    textAlign:'center',
    fontWeight:'bold'
  }
  const lottieStyle={
    marginTop:50
  }
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    },
  };
  if(props.value==="1"){
    console.log("SuccessRe")
  }else{
    console.log("faild")
  }
  return (
    <>
      <Lottie options={defaultOptions} style={lottieStyle}
        height={400}
        width={400}
      />
      <p style={defaultStyle}>Thanks for contacting us!  We will be in touch with you shortly.</p>
    </>
    
  )
}
export default Success
