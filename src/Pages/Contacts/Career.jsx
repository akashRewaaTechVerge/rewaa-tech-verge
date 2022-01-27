
import './Career.css'

import React from 'react'
import { Action } from './Career/QuickAction'
import { Provider } from '../../utils/Context'
import Form from './Career/QuickForm'
import 'react-intl-tel-input/dist/main.css';
import "react-phone-input-2/lib/style.css";
const Career = () => {
    const data=Action();
    return (
        <Provider value={data}>
        <Form />
    </Provider>
    )
}

export default Career
