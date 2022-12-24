import { MongoClient } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'

const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS
const dbName = 'blog-site'
const dbCollection = ''

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (/^POST$/i.test(req.method as string)) {
		const { email, name, message } = req.body

		if (!email || !email.includes('@') || !name?.trim() || !message?.trim()) {
			res.status(422).json({ message: 'Invalid input!' })
			return
		}

		const newMessage: {
			email: string
			name: string
			message: string
			id?: string
		} = {
			email,
			name,
			message,
		}

		let client
		try {
			client = await MongoClient.connect(
				`mongodb+srv://${dbUser}:${dbPass}@cluster0.dbejtkw.mongodb.net/${dbName}?retryWrites=true&w=majority`
			)
		} catch (error) {
			res.status(500).json({ message: 'Could not connect to database!' })
			return
		}

		const db = client.db()
		try {
			const result = await db.collection('contact').insertOne(newMessage)
			newMessage.id = result.insertedId.toString()
		} catch (error) {
			client.close()
			res.status(500).json({ message: 'Storing message failed!' })
			return
		}

		client.close()
		res
			.status(201)
			.json({ message: 'Successfully stored message!', data: newMessage })
		return
	}
}

export default handler