export type Post = {
	title: string
	image: string
	excerpt: string
	date: string
	slug: string
}

//? PROPS ?//
export type AllPostsPageProps = {
	// posts: Post[]
}

export type PostHeaderProps = Pick<Post, 'title' | 'image'>

export type AllPostsProps = {
	posts: Post[]
}

export type PostsGridProps = {
	posts: Post[]
}

export type FeaturedPostsProps = PostsGridProps
