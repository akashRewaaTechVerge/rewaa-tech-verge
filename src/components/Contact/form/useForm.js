import { useState, useContext } from "react";
import { AppContext } from "../../../utils/Context";

const useForm = (callback, validate) => {
    const { insertUser } = useContext(AppContext);
    const [values, setValues] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        experience: "0",
        country_code: '',
        current_salary: '',
        expected_salary: '',
        resume: ''

    })
    const [errors, setErrors] = useState({

    })

    const [isSubmitting] = useState(false);

    const handleFileChange = (e, field, name) => {
        setValues(prevState => {
            return {
                ...prevState,
                [field]: e.target.files[0],
                [name]: Date.now() + "_" + e.target.files[0].size,
            }
        })
        console.log("files " + name)
    }

    const handleChange = (e, field) => {
        setValues({
            ...values,
            [field]: e.target.value,
        });
    };


    

    const handleMobileNumberChange = (value, code) => {
        setValues(prevState => {
            return {
                ...prevState,
                phone_number: value,
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

    return { handleFileChange, handleFlagChange, handleMobileNumberChange, handleChange, values, handleSubmit, errors }
}

export default useForm