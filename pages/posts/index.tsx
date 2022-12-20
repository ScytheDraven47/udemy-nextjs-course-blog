import { AllPostsPageProps } from '../../types/post'
import AllPosts from '../../components/posts/all-posts'

const DUMMY_POSTS = [
	{
		slug: 'getting-started-with-next-js',
		title: 'Getting Started with NextJS',
		image: 'getting-started-with-next-js.png',
		excerpt:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo in velit rhoncus tristique sit amet at nibh. Integer sit amet erat at magna scelerisque semper.',
		date: '2022-12-16',
	},
	{
		slug: 'getting-started-with-react',
		title: 'Getting Started with React',
		image: 'getting-started-with-react.png',
		excerpt:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo in velit rhoncus tristique sit amet at nibh. Integer sit amet erat at magna scelerisque semper.',
		date: '2022-12-14',
	},
	{
		slug: 'getting-started-with-html',
		title: 'Getting Started with HTML',
		image: 'getting-started-with-html.png',
		excerpt:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo in velit rhoncus tristique sit amet at nibh. Integer sit amet erat at magna scelerisque semper.',
		date: '2022-10-22',
	},
	{
		slug: 'getting-started-with-js',
		title: 'Getting Started with JS',
		image: 'getting-started-with-js.png',
		excerpt:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo in velit rhoncus tristique sit amet at nibh. Integer sit amet erat at magna scelerisque semper.',
		date: '2022-04-29',
	},
]

const AllPostsPage = (props: AllPostsPageProps) => {
	return <AllPosts posts={DUMMY_POSTS} />
}

export default AllPostsPage
