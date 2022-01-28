import React from 'react'
const Mailto=({email, subject = '', body = '', children,classN})=>{
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  
    return <a href={`mailto:${email}${params}`} className={classN}>{children}</a>;

};
export default Mailto
