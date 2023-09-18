import { useState } from "react";

function ContactForm(){

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const [isEmailValid, setIsEmailValid] = useState(true);

    const [isFormValid, setIsFormValid] = useState(false);

    const handleFirstNameChange = e => {
        try{
            setFirstName(e.target.value);
        }catch(err){
            console.log('error in handleFirstNameChange method in ContactForm component: ', err);
        }
    }

    const handleLastNameChange = e => {
        try{
            setLastName(e.target.value);
        }catch(err){
            console.log('error in handleLastNameChange method in ContactForm component: ', err);
        }
    }

    const handleEmailChange = e => {
        try{
            setEmail(e.target.value);
        }catch(err){
            console.log('error in handleEmailChange method in ContactForm component: ', err);
        }
    }

    const handleSubjectChange = e => {
        try{
            setSubject(e.target.value);
        }catch(err){
            console.log('error in handleSubjectChange method in ContactForm component: ', err);
        }
    }

    const handleMessageChange = e => {
        try{
            setMessage(e.target.value);
        }catch(err){
            console.log('error in handleMessageChange method in ContactForm component: ', err);
        }
    }

    const handleFormSubmit = async(e) => {
        e.preventDefault();
        try{
            console.log('form submit: ', {
                firstName, lastName, email, subject, message
            });

            const response = await fetch('https://ssrk-website-server.el.r.appspot.com/submitContactForm', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify({
                    'fname' : firstName,
                    'lname' : lastName,
                    'email' : email,
                    'subject' : subject,
                    'message' : message
                }),
            })
            .then((response) => {
                if(response.ok){
                    console.log('Success!');
                    setIsEmailValid(true);
                    setIsFormValid(true);
                    setTimeout(() => {
                        setIsFormValid(false);
                    }, 2000);
                }else if(response.status === 422){
                    let responseJson = response.json();
                    responseJson.then(data => {
                        if (data.errors && data.errors.length > 0) {
                            const validationErrors = data.errors;
                            console.log('validation errors: ', validationErrors);
                            validationErrors.forEach(error => {
                                if(error.path === 'email'){
                                    setIsEmailValid(false);
                                    setTimeout(() => {
                                        setIsEmailValid(true);
                                    }, 2000);
                                }
                                    console.log('val error: ', error.path, '--', error.msg);
                            });
                            setIsFormValid(false);
                        } 
                    })
                }else{
                    console.log('500 - Internal server error ');
                    setIsFormValid(false);
                }
            })
            .catch((error) => {
                console.log('response error: ', error);
                setIsFormValid(false);
            });

        }catch(err){
            console.log('error in handleFormSubmit method in ContactForm component: ', err);
            setIsFormValid(false);
        }
    }

    return(
        <>
            <form className="contactForm" onSubmit={handleFormSubmit}>
                <div className="firstName">
                    <label htmlFor="fname">First Name</label><br/>
                    <input
                        type="text"
                        id="fname"
                        name="fname"
                        value={firstName}
                        onChange={handleFirstNameChange}
                    />
                </div>
                <div className="lastName">
                    <label htmlFor="lname">Last Name</label><br/>
                    <input
                        type="text"
                        id="lname"
                        name="lname"
                        value={lastName}
                        onChange={handleLastNameChange}
                    />
                </div>
                <div className={`email ${isEmailValid ? '' : 'invalid'}`}>
                    <label htmlFor="email">Email *</label><br/>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div className="subject">
                    <label htmlFor="subject">Subject</label><br/>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={subject}
                        onChange={handleSubjectChange}
                    />
                </div>
                <div className="message">
                    <label htmlFor="message">Message</label><br/>
                    <textarea 
                        id='message' 
                        name='message' 
                        rows="8" 
                        cols="30"
                        value={message}
                        onChange={handleMessageChange}
                    >
                    </textarea>
                </div>
                <div className="submit" onClick={handleFormSubmit}>
                    <span>Submit</span>
                </div>
            </form>
            {isFormValid && (
                <div className="submitMsg">
                    Thanks for submitting!
                </div>
            )}
            {!isEmailValid && (
                <div className="errorMsg">
                    Please enter a valid email address.
                </div>
            )}
        </>
    )
}

export default ContactForm;