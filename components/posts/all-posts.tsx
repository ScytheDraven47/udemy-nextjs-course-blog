import PostsGrid from './posts-grid'
import { AllPostsProps } from '../../types/post'
import classes from './all-posts.module.css'

const AllPosts = ({ posts }: AllPostsProps) => {
	return (
		<section className={classes.posts}>
			<h1>All Posts</h1>
			<PostsGrid posts={posts} />
		</section>
	)
}
export default AllPosts
