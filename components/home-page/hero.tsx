import Image from 'next/image'
import classes from './hero.module.css'

const Hero = () => {
	return (
		<section className={classes.hero}>
			<div className={classes.image}>
				<Image
					src='/images/site/scythedraven.png'
					alt='An image of Scythe'
					width={300}
					height={300}
				/>
			</div>
			<h1>Hi, I&apos;m Scythe</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet
				leo in velit rhoncus tristique sit amet at nibh. Integer sit amet erat
				at magna scelerisque semper.
			</p>
		</section>
	)
}
export default Hero
