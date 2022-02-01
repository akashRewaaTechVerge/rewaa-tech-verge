
import React, { useState } from 'react'
import IntlTelInput from 'react-intl-tel-input';
import useForm from './useForm'
import validate from './ValidateForm';
import 'react-intl-tel-input/dist/main.css';
import "react-phone-input-2/lib/style.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
const FormContact = ({ submitForm }) => {
    const [selectedFile] = useState("");
    const [error, setError] = useState("")

    const finalSubmit = (isSuccess, errorMessage) => {
        isSuccess ? submitForm(isSuccess) : setError(errorMessage);
    }

    const { handleFileChange, handleFlagChange, handleMobileNumberChange, handleChange, values, handleSubmit, errors } = useForm(finalSubmit, validate);

    return (
        <>
            <div class="container mb-5">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6">
                        <div class="contact-text">
                            <h4 className='headings-lg'>Work With Us</h4>
                            <p className='description_sm'>Join our team to help shape the future of Information Technology for passionate fan communities. </p>

                            {/* <ul class="social-links">
                            <li><a href="https://www.linkedin.com/company/rewaa-tech-verge/?viewAsMember=true" target="_blank"><i><FaLinkedinIn /></i></a></li>
                                <li><a href="https://www.facebook.com/Rewaa-Tech-Verge-109376714849910" target="_blank"><i><FaFacebookF /></i></a></li>
                                <li><a href="https://twitter.com/RewaatechV" target="_blank"><i><FaTwitter /></i></a></li>
                                <li><a href="https://www.instagram.com/rewaa_tech_verge/" target="_blank"><i><FaInstagram /></i></a></li>
                            </ul> */}
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <form class="contact-form-rewaa" name="form" onSubmit={handleSubmit} id="form" noValidate>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="form-group-contact"><input type="text" value={values.first_name} onChange={(e) => handleChange(e, "first_name")} id='first_name' name="first_name" placeholder="First Name"
                                        class="form-control-contact" required="" />
                                        {errors.first_name && <span className="focus-border" id="fnameErr">{errors.first_name}</span>}
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group-contact"><input type="text" name="last_name" id='last_name' placeholder="Last Name"
                                        class="form-control-contact" required="" value={values.last_name} onChange={(e) => handleChange(e, "last_name")} />
                                        {errors.last_name && <span className="focus-border" id="lnameErr">{errors.last_name}</span>}
                                    </div>

                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group-contact"><input type="text" name="email" placeholder="Email"
                                        class="form-control-contact" required="" value={values.email} onChange={(e) => handleChange(e, "email")} />
                                        {errors.email && <span className="focus-border" id="emailErr">{errors.email}</span>}
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group-contact">
                                        {/* <PhoneInput inputClass='form-control-contact' inputStyle={{ paddingLeft: '5rem', width: "100%", height: "50px" }} country={'in'} /> */}
                                        <IntlTelInput containerClassName="intl-tel-input" useMobileFullscreenDropdown={true} inputClassName="form-control-contact" id="phone_number" name="phone_number" placeholder={"Phone Number"} autoPlaceholder={false} defaultCountry={"in"} value={values.phone_number} onSelectFlag={(num, country) => {
                                            console.log('onSelectFlag', num, country.dialCode);
                                            handleFlagChange(country.dialCode)
                                        }} onPhoneNumberChange={(isValid, value, dialCode) => {
                                            handleMobileNumberChange(value, dialCode.dialCode)
                                        }} />
                                        {errors.phone_number && <span className="focus-border" id="phonenumErr">{errors.phone_number}</span>}
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group-contact"><div className='form-control-contact'>
                                        <label>
                                            You want to apply experience or fresher ?&nbsp;
                                        </label>
                                        <input type="radio" name='experience' id='experience' value="0" checked={values.experience === "0"} onChange={(e) => handleChange(e, "experience")} />&nbsp;
                                        Experience  &nbsp;
                                        <input type="radio" name='experience' id="fresher" value="1" checked={values.experience === "1"} onChange={(e) => handleChange(e, "experience")} />
                                        &nbsp; Fresher
                                        {errors.experience && <span className="focus-border" id="experienceErr">{errors.experience}</span>}
                                    </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">

                                    <div class="form-group-contact"><input type="text" name="current_salary" id='current_salary' placeholder="Current Salary"
                                        class="form-control-contact" value={values.current_salary} onChange={(e) => handleChange(e, "current_salary")} />
                                        {errors.current_salary && <span className="focus-border" id="csalaryErr">{errors.current_salary}</span>}
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group-contact"><input type="text" id="expected_salary" name="expected_salary" placeholder="Expected Salary"
                                        class="form-control-contact" value={values.expected_salary} onChange={(e) => handleChange(e, "expected_salary")} />
                                        {errors.expected_salary && <span className="focus-border" id="esalaryErr">{errors.expected_salary}</span>}
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12">
                                    <div class="form-group-contact"><input type="file" id="resume" name="resume" accept=".pdf,.docx" className='form-control-contact' onChange={(e) => handleFileChange(e, "resume", "file_name")} />
                                        <p>{selectedFile.type}</p>
                                        {errors.resume && <span className="focus-border" id="fileErr">{errors.resume}</span>}
                                    </div>
                                </div>
                                <div class="col-lg-12 col-sm-12">
                                    <div class="send-btn"><input type="submit" class="send-btn-one" name="submit" value='Send
                                        Message'/></div>
                                </div>
                            </div>
                            <div className="row pt-5">
                                <div className="col-md-12">
                                    <span className="text-danger">{error}</span>
                                    {console.log(error)}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
};

export default FormContact;
