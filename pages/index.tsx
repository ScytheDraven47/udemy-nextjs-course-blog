import FeaturedPosts from '../components/home-page/featured-posts'
import Hero from '../components/home-page/hero'
import { getFeaturedPosts } from '../lib/posts-util'
import { HomePageProps } from '../types/post'

const HomePage = ({ posts }: HomePageProps) => {
	return (
		<>
			<Hero />
			<FeaturedPosts posts={posts} />
		</>
	)
}

export function getStaticProps() {
	const featuredPosts = getFeaturedPosts()

	return {
		props: {
			posts: JSON.parse(JSON.stringify(featuredPosts)),
		},
	}
}

export default HomePage
