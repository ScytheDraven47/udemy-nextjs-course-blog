import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Post, PostData } from '../types/post'

const postsDirectory = path.join(process.cwd(), 'content', 'posts')

function getPostData(fileName: string) {
	const filePath = path.join(postsDirectory, fileName)
	const fileContent = fs.readFileSync(filePath, 'utf-8')
	const { data, content } = matter(fileContent) as unknown as {
		data: PostData
		content: string
	}

	const postSlug = fileName.replace(/\.md$./, '')

	const postData = {
		slug: postSlug,
		...data,
		content,
	} as Post

	return postData
}

export function getAllPosts() {
	const postFiles = fs.readdirSync(postsDirectory)
	const allPosts = postFiles.map((postFile) => getPostData(postFile))
	const sortedPosts = allPosts.sort((postA, postB) =>
		postA.date > postB.date ? -1 : 1
	)
	return sortedPosts
}

export function getFeaturedPosts() {
	const allPosts = getAllPosts()
	const featuredPosts = allPosts.filter((post) => post.isFeatured)
	return featuredPosts
}
