import { Post, PostsGridProps } from '../../types/post'
import PostItem from './post-item'
import classes from './posts-grid.module.css'

const PostsGrid = ({ posts }: PostsGridProps) => {
	return (
		<ul className={classes.grid}>
			{posts.map((post: Post) => (
				<PostItem key={post.slug} {...post} />
			))}
		</ul>
	)
}
export default PostsGrid
