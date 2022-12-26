import { MongoClient } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'
import { ContactDataWithOptionalId } from '../../types/post'

const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS
const dbCluster = process.env.DB_CLUSTER
const dbName = process.env.DB_NAME
const dbCollection = 'contact'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (/^POST$/i.test(req.method as string)) {
		const { email, name, message } = req.body

		if (!email || !email.includes('@') || !name?.trim() || !message?.trim()) {
			res.status(422).json({ message: 'Invalid input!' })
			return
		}

		const newMessage: ContactDataWithOptionalId = {
			email,
			name,
			message,
		}

		let client
		const connectionString = `mongodb+srv://${dbUser}:${dbPass}@${dbCluster}.dbejtkw.mongodb.net/${dbName}?retryWrites=true&w=majority`
		try {
			client = await MongoClient.connect(connectionString)
		} catch (error) {
			res.status(500).json({
				message: 'Could not connect to database!',
				detail: { connectionString }, // TODO remove
			})
			return
		}

		const db = client.db()
		try {
			const result = await db.collection(dbCollection).insertOne(newMessage)
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
