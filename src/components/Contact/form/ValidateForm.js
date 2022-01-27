export default function ValidateForm(values) {
    let errors = {}
    const docFile=values.resume;
    console.log(docFile);
    //First Name 
    if (!values.first_name.trim()) {
        errors.first_name = "First Name Required.."
    } else if (values.first_name.length < 3) {
        errors.first_name = "Input Valid First Name "
    } else if (!/^[A-Za-z]+$/i.test(values.first_name)) {
        errors.first_name = "Only character Allowed.."
    }
    //Second Name
    if (!values.last_name.trim()) {
        errors.last_name = "Last Name Required.."
    } else if (values.last_name.length < 3) {
        errors.last_name = "Input Valid Last Name"
    } else if (!/^[A-Za-z]+$/i.test(values.last_name)) {
        errors.last_name = "Only character Allowed.."
    }

    /*Email*/
    if (!values.email.trim()) {
        errors.email = "Email Is Required.."
    } else if (!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(values.email)) {
        errors.email = "Email Is Invalid.."
    }

    //PhoneNumber
    if (!values.phone_number.trim()) {
        errors.phone_number = "Phone Number is Required.."
    } else if (values.phone_number.length < 10) {
        errors.phone_number = "Invalid Phone Number.."
    } else if (!/^\d{10}$/i.test(values.phone_number)) {
        errors.phone_number = "Please put 10 digit mobile number"
    }
    else if (/^[A-Za-z]+$/i.test(values.phone_number)) {
        errors.phone_number = "Only Numbers Allowed."
    }

    //Salary
    if (!values.current_salary.trim()) {
        errors.current_salary = "Current Salary is Required.."
    } else if (/^[A-Za-z]+$/i.test(values.current_salary)) {
        errors.current_salary = "Only Numbers Allowed."
    }
    if (!values.expected_salary.trim()) {
        errors.expected_salary = "Expected Salary is Required.."
    } else if (/^[A-Za-z]+$/i.test(values.expected_salary)) {
        errors.expected_salary = "Only Numbers Allowed."
    }

    // Experience
    // if (values.experience === "0") {
    //     errors.experience = "Select Experience Or Fresher"
    // }

    //File
    if (!values.resume.name) {
        errors.resume = "Select Resume File"
        console.log(values.resume.name);
    }else if (!/(\.pdf|\.docx|\.doc)$/i.exec(values.resume.name)) {
        errors.resume = "Valid only pdf , doc and docx file type"
        console.log(values.resume.name);
        var size=parseFloat(values.resume.size/(1024)).toFixed(1);
    }else if(size>1){
         errors.resume="Valid only 1mb File Size"
        console.log("")
    }



    return errors;
}
