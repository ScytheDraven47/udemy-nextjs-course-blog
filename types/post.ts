export type Post = {
	title: string
	image: string
	excerpt: string
	date: string
	slug: string
}

export type PostsGridProps = {
	posts: Post[]
}

export type FeaturedPostsProps = PostsGridProps
