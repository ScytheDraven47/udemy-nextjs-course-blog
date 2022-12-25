import Head from 'next/head'
import FeaturedPosts from '../components/home-page/featured-posts'
import Hero from '../components/home-page/hero'
import { getFeaturedPosts } from '../lib/posts-util'
import { HomePageProps } from '../types/post'

const HomePage = ({ posts }: HomePageProps) => {
	return (
		<>
			<Head>
				<title>Scythe&apos;s Blog</title>
				<meta
					name='description'
					content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, libero.'
				/>
			</Head>
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
