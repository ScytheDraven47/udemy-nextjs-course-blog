import ReactMarkdown from 'react-markdown'
import { PostContentProps } from '../../../types/post'
import classes from './post-content.module.css'
import PostHeader from './post-header'

const PostContent = ({ title, slug, image, content }: PostContentProps) => {
	const imagePath = `/images/posts/${slug}/${image}`

	return (
		<article className={classes.content}>
			<PostHeader title={title} image={imagePath} />
			<ReactMarkdown>{content}</ReactMarkdown>
		</article>
	)
}

export default PostContent
