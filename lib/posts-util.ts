import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { Post, PostData } from '../types/post'

const postsDirectory = path.join(process.cwd(), 'content', 'posts')

export function getPostsFiles() {
	return fs.readdirSync(postsDirectory)
}

export function getPostData(postId: string) {
	const postSlug = postId.replace(/\.md$/i, '')
	const filePath = path.join(postsDirectory, `${postSlug}.md`)
	const fileContent = fs.readFileSync(filePath, 'utf-8')
	const { data, content } = matter(fileContent) as unknown as {
		data: PostData
		content: string
	}

	const postData = {
		slug: postSlug,
		...data,
		content,
	} as Post

	return postData
}

export function getAllPosts() {
	const postFiles = getPostsFiles()
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
