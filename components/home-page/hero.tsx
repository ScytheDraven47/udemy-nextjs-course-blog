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
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
				fringilla justo orci, vitae lobortis leo rutrum vitae. Donec non
				consectetur eros. Aenean eu nibh justo. Phasellus nec erat tellus. Cras
				nec nulla consequat magna dictum placerat. Aliquam ultrices dictum
				sapien, in volutpat lacus lobortis non. Nullam nec dapibus sem, eget
				scelerisque dui. Curabitur suscipit justo sed felis condimentum
				hendrerit. Quisque accumsan mollis nisi, eu eleifend risus pharetra in.
			</p>
		</section>
	)
}
export default Hero
