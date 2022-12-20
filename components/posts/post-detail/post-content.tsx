import ReactMarkdown from 'react-markdown'
import PostHeader from './post-header'
import classes from './post-content.module.css'

const DUMMY_POST = {
	slug: 'getting-started-with-next-js',
	title: 'Getting Started with NextJS',
	image: 'getting-started-with-next-js.png',
	excerpt:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo in velit rhoncus tristique sit amet at nibh. Integer sit amet erat at magna scelerisque semper.',
	date: '2022-12-16',
	content: '# First post',
}

const PostContent = () => {
	const { title, slug, image, content } = DUMMY_POST
	const imagePath = `/images/posts/${slug}/${image}`

	return (
		<article className={classes.content}>
			<PostHeader title={title} image={imagePath} />
			<ReactMarkdown>{content}</ReactMarkdown>
		</article>
	)
}

export default PostContent
