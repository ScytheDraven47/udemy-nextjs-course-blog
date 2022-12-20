export type Post = {
	title: string
	image: string
	excerpt: string
	date: string
	slug: string
}

export type AllPostsPageProps = {
	// posts: Post[]
}

export type AllPostsProps = {
	posts: Post[]
}

export type PostsGridProps = {
	posts: Post[]
}

export type FeaturedPostsProps = PostsGridProps
