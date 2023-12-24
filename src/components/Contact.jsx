import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form'

const Contact = () => {
    const [textup, settextup] = useState(false);
    useEffect(() => {
        setTimeout(() => settextup(true), 600)
    }, []);

   
    const [user_firstName, setuserfirstname] = React.useState();
    const [user_lastName, setuserlastname] = React.useState();
    const [user_email, setuseremail] = React.useState();
    const [user_Mob, setuserfirstmob] = React.useState();
    const [message, setmessage] = React.useState();

    const form = React.useRef();
    const [done, setdone] = React.useState();
    const sendEmail = (e) => {
        // e.preventDefault();
        emailjs.sendForm('sandesh008', 'template_4oe4osi', form.current, 'q5ZE8NG20U-MTqQhq')
            .then((result) => {
                console.log(result.text);
                setdone(true)
            }, (error) => {
                console.log(error.text);
            });

    }

    const { register, handleSubmit, formState: { errors }, } = useForm();

    return (
        <>
            <div className="contactMain" id="contactus">
                <div className='midCont'>
                    <div className="contentCC">
                        <h1 className='s1'>
                            <div style={{ top: textup ? '0px' : '100px' }}>
                                Contact Me
                            </div>
                        </h1>
                    </div>
                    <form className="contact" ref={form} onSubmit={handleSubmit(sendEmail)}>
                        <input {...register("user_firstName", { required: "* First Name Is Required." })} name='user_firstName' type="text" placeholder='First Name' className='contInp' />
                        {(errors.user_firstName && !user_firstName) && (<h4 className="err">{errors.user_firstName.message}</h4>)}

                        <input {...register("user_lastName", { required: "* Last Name Is Required." })} name='user_lastName' type="text" placeholder='Last Name' className='contInp' />
                        {(errors.user_lastName && !user_lastName) && (<h4 className="err">{errors.user_lastName.message}</h4>)}

                        <input {...register("user_email", { required: "* Email Is Required.", pattern: { value: /^\S+@\S+$/i, message: "This is Not Valid Email" } })} name='user_email' type="email" placeholder='Email Address' className='contInp' />
                        {(errors.user_email && !user_email) && (<h4 className="err">{errors.user_email.message}</h4>)}

                        <input  {...register("user_Mob", { required: "* Mob Number Is Required.", maxLength: { value: 10, message: "10 Number Required" }, minLength: { value: 10, message: "10 Number Required" } })} name='user_Mob' type="number" placeholder='Mob Number' className='contInp' />
                        {(errors.user_Mob && !user_Mob) && (<h4 className="err">{errors.user_Mob.message}</h4>)}

                        <textarea {...register("message", { required: "* Address Is Required." })} name='message' type="text" placeholder='Address' className='contInp textArea' />
                        {(errors.message && !message) && (<h4 className="err">{errors.message.message}</h4>)}

                        <div className='bton'>
                            <button className='button newBtn'>Submit</button>
                        </div>
                        <span className='thanks'>{done && "Thanks For Contacting Me!"}</span>
                    </form>

                </div>
            </div>

        </>
    );
};

export default Contact;