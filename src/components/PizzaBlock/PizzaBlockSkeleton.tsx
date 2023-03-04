import ContentLoader from 'react-content-loader';

export default function PizzaBlockSkeleton() {
	return (
		<ContentLoader
			className='pizza-block'
			speed={2}
			width={280}
			height={500}
			viewBox='0 0 280 500'
			backgroundColor='#ededed'
			foregroundColor='#fafafa'
		>
			<circle cx='139' cy='139' r='120' />
			<rect x='0' y='282' rx='20' ry='20' width='280' height='35' />
			<rect x='0' y='348' rx='20' ry='20' width='280' height='98' />
			<rect x='13' y='462' rx='10' ry='10' width='92' height='28' />
			<rect x='145' y='453' rx='20' ry='20' width='130' height='43' />
		</ContentLoader>
	);
}
