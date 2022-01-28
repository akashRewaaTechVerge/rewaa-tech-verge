import { useState, useContext } from "react";
import { AppContext } from "../../../utils/Context";

const useQuickForm = (callback, validate) => {
    const { insertUser } = useContext(AppContext);
    const [values, setValues] = useState({
        full_name: '',
        email: '',
        country_code: '',
        choose_country: '',
        contact_number: '',
        type_of_development: 'Website',
        brief_your_requirement: ''

    })
    const [errors, setErrors] = useState({

    })

    const [isSubmitting] = useState(false);

    // const handleFileChange = (e, field, name) => {
    //     setValues(prevState => {
    //         return {
    //             ...prevState,
    //             [field]: e.target.files[0],
    //             [name]: Date.now() + "_" + e.target.files[0].size,
    //         }
    //     })
    //     console.log("files " + name)
    // }

    const handleChange = (e, field) => {
        setValues({
            ...values,
            [field]: e.target.value,
        });
    };

    const countryChange = (value) => {
        setValues(prevState => {
            return {
                ...prevState,
                choose_country: value
            }
        })
    }
    const handleMobileNumberChange = (value, code) => {
        setValues(prevState => {
            return {
                ...prevState,
                contact_number: value,
                country_code: code
            }
        })
    };


    const handleFlagChange = (code) => {
        setValues(prevState => {
            return {
                ...prevState,
                country_code: code,
            }
        })
    };
    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validate(values));
        //setIsSubmitting(true);
        if (Object.keys(validate(values)).length === 0)
            insertUser(values, validate(values), callback, isSubmitting);
    }

    return { handleFlagChange, handleMobileNumberChange, countryChange, handleChange, values, handleSubmit, errors }
}

export default useQuickForm