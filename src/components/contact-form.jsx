import React, { useState } from 'react'

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue)

    const handleChange = e => {
        setValue(e.target.value)
    }
    return {
        value,
        onChange: handleChange,
    }
}




export default function ContactForm() {


    const email = useFormInput('')
    const message = useFormInput('')

// this will be important later
    const emailVal = email.value
    const messageVal = message.value

    const [notification, setNotification] = useState('')

    const handleSubmit = e => {
        e.preventDefault() //--> prevent the page from reloading on form submit
        setNotification('message sent')
    }



    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" {...email} required />
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="4" {...message} required></textarea>
            <input type="submit" value="Send" />
            {notification && <span>{notification}</span>}
        </form>
    )
}
