export default function ValidateQuickForm(values) {
    let errors = {}
    //First Name 
    if (!values.full_name.trim()) {
        errors.full_name = "Full Name Required.."
    } else if (values.full_name.length < 3) {
        errors.full_name = "Input Valid Full Name "
    } else if (!/^[A-Za-z]+$/i.test(values.full_name)) {
        errors.full_name = "Only character Allowed.."
    }

    /*Email*/
    if (!values.email.trim()) {
        errors.email = "Email Is Required.."
    } else if (!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(values.email)) {
        errors.email = "Email Is Invalid.."
    }

    //PhoneNumber
    if (!values.contact_number.trim()) {
        errors.contact_number = "Contact Number is Required.."
    } else if (values.contact_number.length < 10) {
        errors.contact_number = "Invalid Contact Number.."
    } else if (!/^\d{10}$/i.test(values.contact_number)) {
        errors.contact_number = "Please put 10 digit Contact number"
    }
    else if (/^[A-Za-z]+$/i.test(values.contact_number)) {
        errors.contact_number = "Only Numbers Allowed."
    }

    //Frief Requirement
    if (!values.brief_your_requirement.trim()) {
        errors.brief_your_requirement = "Brief Requirement is Required..."
    }

    // if (!values.expected_salary.trim()) {
    //     errors.expected_salary = "Expected Salary is Required.."
    // } else if (/^[A-Za-z]+$/i.test(values.expected_salary)) {
    //     errors.expected_salary = "Only Numbers Allowed."
    // }

    return errors;
}
