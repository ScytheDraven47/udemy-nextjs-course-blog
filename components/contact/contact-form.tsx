import { FormEvent, useState } from 'react'
import classes from './contact-form.module.css'

const ContactForm = () => {
	const [enteredEmail, setEnteredEmail] = useState('')
	const [enteredName, setEnteredName] = useState('')
	const [enteredMessage, setEnteredMessage] = useState('')

	const sendMessageHandler = (event: FormEvent) => {
		event.preventDefault()

		const body = {
			email: enteredEmail,
			name: enteredName,
			message: enteredMessage,
		}

		console.log(body)

		fetch('/api/contact', {
			method: 'POST',
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json',
			},
		})
	}

	return (
		<section className={classes.contact}>
			<h1>How can I help you?</h1>
			<form onSubmit={sendMessageHandler} className={classes.form}>
				<div className={classes.controls}>
					<div className={classes.control}>
						<label htmlFor='email'>Your Email</label>
						<input
							type='email'
							id='email'
							required
							onChange={(event) => setEnteredEmail(event.currentTarget.value)}
						/>
					</div>
					<div className={classes.control}>
						<label htmlFor='name'>Your Name</label>
						<input
							type='text'
							id='name'
							required
							onChange={(event) => setEnteredName(event.currentTarget.value)}
						/>
					</div>
				</div>
				<div className={classes.control}>
					<label htmlFor='message'>Your Message</label>
					<textarea
						id='message'
						rows={5}
						onChange={(event) => setEnteredMessage(event.currentTarget.value)}
					></textarea>
				</div>
				<div className={classes.actions}>
					<button>Send Message</button>
				</div>
			</form>
		</section>
	)
}

export default ContactForm
