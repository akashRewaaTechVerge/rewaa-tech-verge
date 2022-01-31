
import React, { useMemo, useState } from 'react'
import IntlTelInput from 'react-intl-tel-input';
import useForm from './useQuickForm'
import validate from './ValidateQuickForm';
import 'react-intl-tel-input/dist/main.css';
import "react-phone-input-2/lib/style.css";
import contactLeft from '../../../images/shape/contactleft.svg'
import countryList from 'react-select-country-list';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { CountryDropdown } from 'react-country-region-selector';
const QuickFormContact = ({ submitForm }) => {
    const [error, setError] = useState("")

    const finalSubmit = (isSuccess, errorMessage) => {
        isSuccess ? submitForm(isSuccess) : setError(errorMessage);
    }

    const { handleFlagChange, handleMobileNumberChange, countryChange, handleChange, values, handleSubmit, errors } = useForm(finalSubmit, validate);
    const [value, setValue] = useState('');
    const options = useMemo(() => countryList().getData(), []);
    const changeHandler = value => {
        setValue(value);
    }
    const styles = {
        // option: (provided, state) => ({
        //     ...provided,
        //     fontWeight: state.isSelected ? "bold" : "normal",
        //     color: "#444",
        //     background: 'rgba(219, 235, 255, 0.2) !important',
        //     padding: '0 20px !important',
        //     fontFamily: 'sans-serif'

        // }),
        // control: (provided, state) => ({
        //     ...provided,
        //     background: 'rgba(219, 235, 255, 0.2) !important',
        //     fontFamily: 'sans-serif',
        // }),
        // input: (provided, state) => ({
        //     ...provided,
        //     padding: '0 20px !important',
        //     textAlign: 'center',
        //     background: 'transparent',
        //     opacity: 0,
        //     fontFamily: 'sans-serif'

        // }),
        // placeholder: (provided, state) => ({
        //     ...provided,
        //     padding: '0 20px !important',
        //     textAlign: 'center',
        //     background: 'transparent',
        //     fontFamily: 'sans-serif'

        // }),
        // singleValue: (provided, state) => ({

        color: '#444',
        textAlign: 'left',
        width: '100%',
        fontFamily: 'PT Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '18px',
        lineHeight: '23px',
        height: '66px',
        paddingLeft: '5px',
        background: 'rgba(219, 235, 255, 0.2)',
        boxSizing: 'border-box',
        borderRadius: '5px',
        border: '1.4px solid rgba(44, 62, 80, 0.3)',
        fontFamily: 'sans-serif'

        // })
    };
    return (
        <>
            <div>
                <div class="page-title-area">
                    <div class="container" id='contact'>
                        <div class="page-title-content">
                            <h2>Contact</h2>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='container mt-5 mb-5'>
                    <div className='consult-form-wrapper'>
                        <div className='consult-form-left'>
                            <h4 className='headings-lg'>Quick Contact</h4>
                            <p className='description_sm'>Have an !dea or need help with your current business?</p>
                            <p className='paragraph'>For immediate assistance in sales or support, please call us on:</p>
                            <a href='' className='contact_button arrow-triangle right'><img src='' />+91-879-931-5884</a>
                            <img className=" lazyloaded" title="Book Your Free Consultation " src={contactLeft}></img>
                        </div>
                        <div className="consult-form-right ">
                            <div className=" contact-form">
                                <form id="form" name='form' onSubmit={handleSubmit} noValidate>
                                    <div className="form-group-half">
                                        <div className="form-group">
                                            <label>Full Name</label>
                                            <input type="text" className="check" value={values.full_name} onChange={(e) => handleChange(e, "full_name")} name="full_name" id="full_name" placeholder="Your Name" />
                                            {errors.full_name && <span className="focus-border" id="fnameErr">{errors.full_name}</span>}
                                        </div>
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="text" className="check" name="email" value={values.email} onChange={(e) => handleChange(e, "email")} id="email" placeholder="Email" />
                                            {errors.email && <span className="focus-border" id="fnameErr">{errors.email}</span>}
                                        </div>
                                    </div>
                                    <div className="form-group-half">
                                        <div className="form-group country">
                                            <label>Choose a Country</label>

                                            <CountryDropdown classes='check' className='check' style={styles} value={values.choose_country} onChange={(value) => countryChange(value)} />

                                        </div>
                                        <div className="form-group ">
                                            <label>Contact number</label>
                                            <div>
                                                {/* <PhoneInput   inputStyle={{ textAlign:'center', width: '100%', height: '67px' }}  country={'in'} /> */}
                                                <IntlTelInput containerClassName="intl-tel-input" style={{ width: '100%' }} format={true} useMobileFullscreenDropdown={true} inputClassName="form-control-contact" id="contact_number" name="contact_number" placeholder={"Phone Number"} autoPlaceholder={false} defaultCountry={"in"} value={values.contact_number} onSelectFlag={(num, country) => {
                                                    console.log('onSelectFlag', num, country.dialCode);
                                                    handleFlagChange(country.dialCode)
                                                }} onPhoneNumberChange={(isValid, value, dialCode) => {
                                                    handleMobileNumberChange(value, dialCode.dialCode)
                                                }} />
                                                {errors.contact_number && <span className="focus-border" id="phonenumErr">{errors.contact_number}</span>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">

                                        <label>Type of Development</label>

                                        <div className="radio-buttonss">

                                            <input type="radio" id="Website" name="type_of_development" value="Website" checked={values.type_of_development === "Website"} onChange={(e) => { handleChange(e, "type_of_development") }} />
                                            <label htmlFor="" id='radio'>Website </label>


                                            <input type="radio" id="Application" name="type_of_development" value="Application" checked={values.type_of_development === "Application"} onChange={(e) => { handleChange(e, "type_of_development") }} />
                                            <label htmlFor="type_of_development" id='radio'><span></span>Application</label>

                                            <input type="radio" id="Game" name="type_of_development" value="Game" checked={values.type_of_development === "Game"} onChange={(e) => { handleChange(e, "type_of_development") }} />
                                            <label htmlFor="type_of_development" id='radio'><span></span>Game</label>

                                        </div>
                                    </div> <br /><br />
                                    <div className="form-group">
                                        <label>Brief Your Requirement</label>
                                        <textarea rows="3" className="check" id="brief_your_requirement" name='brief_your_requirement' onChange={(e) => handleChange(e, "brief_your_requirement")} value={values.brief_your_requirement} placeholder="Please brief your requirement in details."></textarea>
                                        {errors.brief_your_requirement && <span className="focus-border" id="fnameErr">{errors.brief_your_requirement}</span>}
                                    </div>
                                    <div className='focus-border pt-5'>
                                        {error}
                                    </div>
                                    <div className=" flex  align_center  contact_submit  align_right">
                                        <div className=" quotation-submit  inline">
                                            <button type='submit' id="submit" name="submit" style={{ border: 'none' }} className=" header-getquotation  quotation-submitbtn">
                                                <h4 className=" inline">Yes, I want to talk to an expert</h4>
                                            </button>

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
};

export default QuickFormContact;
