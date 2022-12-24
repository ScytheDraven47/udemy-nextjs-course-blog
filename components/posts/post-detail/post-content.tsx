import Image from 'next/image'
import { ElementType } from 'react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark as SyntaxTheme } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { PostContentProps } from '../../../types/post'
import classes from './post-content.module.css'
import PostHeader from './post-header'

const getImagePath = (slug: string, src: string) =>
	`/images/posts/${slug}/${src}`

const PostContent = ({
	title,
	slug,
	image: src,
	content,
}: PostContentProps) => {
	const imagePath = getImagePath(slug, src)

	const customRenderers: { [nodeType: string]: ElementType } = {
		// img({ src, alt }) {
		// 	if (!src) return <></>
		// 	return (
		// 		<Image
		// 			src={getImagePath(slug, src)}
		// 			alt={alt}
		// 			width={600}
		// 			height={300}
		// 		/>
		// 	)
		// },
		p({ node, children }) {
			if (node.children[0].tagName === 'img') {
				const { src, alt } = node.children[0].properties
				return (
					<div className={classes.image}>
						<Image
							src={getImagePath(slug, src)}
							alt={alt}
							width={600}
							height={300}
						/>
					</div>
				)
			}
			return <p>{children}</p>
		},
		code(code) {
			console.log(code)
			const { className: language, children } = code
			return (
				<SyntaxHighlighter
					style={SyntaxTheme}
					language={language.replace(/language-/, '')}
				>
					{children}
				</SyntaxHighlighter>
			)
		},
	}

	return (
		<article className={classes.content}>
			<PostHeader title={title} image={imagePath} />
			<ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
		</article>
	)
}

export default PostContent
