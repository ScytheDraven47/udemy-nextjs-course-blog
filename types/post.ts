export type PostData = {
	title: string
	image: string
	excerpt: string
	date: Date
	isFeatured: boolean
}
export type Post = PostData & { slug: string; content: string }

export type ContactData = {
	email: string
	name: string
	message: string
}

export type ContactDataWithOptionalId = ContactData & { id?: string }

//? PROPS ?//
export type HomePageProps = {
	posts: Post[]
}

export type AllPostsPageProps = {
	posts: Post[]
}

export type PostHeaderProps = Pick<Post, 'title' | 'image'>

export type AllPostsProps = {
	posts: Post[]
}

export type PostDetailPageProps = {
	post: Post
}

export type PostsGridProps = {
	posts: Post[]
}

export type FeaturedPostsProps = PostsGridProps

export type PostContentProps = Pick<
	Post,
	'title' | 'image' | 'slug' | 'content'
>
