import AllPosts from '../../components/posts/all-posts'
import { getAllPosts } from '../../lib/posts-util'
import { AllPostsPageProps } from '../../types/post'

const AllPostsPage = ({ posts }: AllPostsPageProps) => {
	return <AllPosts posts={posts} />
}

export function getStaticProps() {
	const allPosts = getAllPosts()

	return {
		props: {
			posts: JSON.parse(JSON.stringify(allPosts)),
		},
	}
}

export default AllPostsPage
