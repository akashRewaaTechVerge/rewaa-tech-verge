
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
const QuickFormContact = ({ submitForm }) => {
    const [selectedFile] = useState("");
    const [error, setError] = useState("")

    const finalSubmit = (isSuccess, errorMessage) => {
        isSuccess ? submitForm(isSuccess) : setError(errorMessage);
    }

    const { handleFlagChange, handleMobileNumberChange, handleChange, values, handleSubmit, errors } = useForm(finalSubmit, validate);
    const [value, setValue] = useState('');
    const options = useMemo(() => countryList().getData(), []);
    const changeHandler = value => {
        setValue(value);
    }
    const styles = {
        option: (provided, state) => ({
            ...provided,
            fontWeight: state.isSelected ? "bold" : "normal",
            color: "#444",
            background: 'rgba(219, 235, 255, 0.2) !important',
            padding: '0 20px !important',

        }),
        control: (provided, state) => ({
            ...provided,
            background: 'rgba(219, 235, 255, 0.2) !important',

        }),
        input: (provided, state) => ({
            ...provided,
            padding: '0 20px !important',
            textAlign: 'center',
            background: 'transparent',
            opacity: 0

        }),
        placeholder: (provided, state) => ({
            ...provided,
            padding: '0 20px !important',
            textAlign: 'center',
            background: 'transparent'
        }),
        singleValue: (provided, state) => ({
            ...provided,
            color: '#444',
            textAlign: 'left',
            padding: '15px 20px !important',
            fontFamily: 'PT Sans',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '18px',
            lineHeight: '23px',
            height: '50px',
            textAlign: 'center',
            background: 'transparent !important',
            boxSizing: 'border-box',
            borderRadius: '5px',

        })
    };
    return (
        <>
            <div>
                <div class="page-title-area">
                    <div class="container">
                        <div class="page-title-content">
                            <h2>Career</h2>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li>Career</li>
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
                                <form id="form" onSubmit={handleSubmit} noValidate>
                                    <div className="form-group-half">
                                        <div className="form-group">
                                            <label>Full Name</label>
                                            <input type="text" className="check" name="full_name" id="full_name" placeholder="Your Name" />
                                        </div>
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="text" className="check" name="email" id="email" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="form-group-half">
                                        <div className="form-group country">
                                            <label>Choose a Country</label>
                                            <Select placeholder="Select Your Country" styles={styles} options={options} value={value} onChange={changeHandler} />
                                        </div>
                                        <div className="form-group ">
                                            <label>Contact number</label>
                                            <div>
                                                {/* <PhoneInput   inputStyle={{ textAlign:'center', width: '100%', height: '67px' }}  country={'in'} /> */}
                                                <IntlTelInput containerClassName="intl-tel-input" style={{ width: '100%', height: '67px' }} useMobileFullscreenDropdown={true} inputClassName="form-control-contact" id="phone_number" name="phone_number" placeholder={"Phone Number"} autoPlaceholder={false} defaultCountry={"in"} value={values.phone_number} onSelectFlag={(num, country) => {
                                                    console.log('onSelectFlag', num, country.dialCode);
                                                    handleFlagChange(country.dialCode)
                                                }} onPhoneNumberChange={(isValid, value, dialCode) => {
                                                    handleMobileNumberChange(value, dialCode.dialCode)
                                                }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Type of Development</label>
                                        <div className="radio-buton-flex">
                                            <p>
                                                <input type="radio" id=" development_web" name=" development_web" value="Website" className="check  development-radio" />
                                                <label for=" development_web">Website</label>
                                            </p>
                                            <p>
                                                <input type="radio" id=" development_app" name=" development_app" value="Application" className="check  development-radio" />
                                                <label for=" development_app">Application</label>
                                            </p>
                                            <p>
                                                <input type="radio" id=" development_game" name=" development_game" value="Game" className="check  development-radio" />
                                                <label for=" development_game">Game</label>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Brief Your Requirement</label>
                                        <textarea rows="3" className="check" id=" contact_requirement" placeholder="Please brief your requirement in details."></textarea>
                                    </div>

                                    <div className=" flex  align_center  contact_submit  align_right">
                                        <div className=" quotation-submit  inline">
                                            <button id="submit" name="submit" style={{ border: 'none' }} className=" header-getquotation  quotation-submitbtn">
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
