import Image from 'next/image'
import { ElementType } from 'react'
import ReactMarkdown from 'react-markdown'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css'
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx'
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx'
import ts from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript'
import SyntaxTheme from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark'
import { PostContentProps } from '../../../types/post'
import classes from './post-content.module.css'
import PostHeader from './post-header'

SyntaxHighlighter.registerLanguage('css', css)
SyntaxHighlighter.registerLanguage('js', js)
SyntaxHighlighter.registerLanguage('jsx', jsx)
SyntaxHighlighter.registerLanguage('tsx', tsx)
SyntaxHighlighter.registerLanguage('ts', ts)

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
