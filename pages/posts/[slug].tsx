import { GetStaticPropsContext } from 'next'
import Head from 'next/head'
import PostContent from '../../components/posts/post-detail/post-content'
import { getPostData, getPostsFiles } from '../../lib/posts-util'
import { PostDetailPageProps } from '../../types/post'

const PostDetailPage = ({ post }: PostDetailPageProps) => {
	return (
		<>
			<Head>
				<title>{post.title}</title>
				<meta name='description' content={post.excerpt} />
			</Head>
			<PostContent {...post} />
		</>
	)
}

export function getStaticProps(context: GetStaticPropsContext) {
	const slug = context.params?.slug as string

	const postData = getPostData(slug)

	return {
		props: {
			post: JSON.parse(JSON.stringify(postData)),
		},
		revalidate: 600,
	}
}

export function getStaticPaths() {
	const postsFilenames = getPostsFiles()
	return {
		paths: postsFilenames.map((filename) => ({
			params: { slug: filename.replace(/\.md$/i, '') },
		})),
		fallback: false,
	}
}

export default PostDetailPage
