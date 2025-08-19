import FullScreenSwiperV3 from '@/components/FullScreenSwiperV3'

export default function TabTwoScreen() {
	return (
		<FullScreenSwiperV3
			data={[
				{
					id: '1',
					bgPicUrl: 'https://picsum.photos/400/800?random=1',
				},
				{
					id: '2',
					bgPicUrl: 'https://picsum.photos/400/800?random=2',
				},
				{
					id: '3',
					bgPicUrl: 'https://picsum.photos/400/800?random=3',
				},
				{
					id: '4',
					bgPicUrl: 'https://picsum.photos/400/800?random=4',
				},
				{
					id: '5',
					bgPicUrl: 'https://picsum.photos/400/800?random=5',
				},
				{
					id: '6',
					bgPicUrl: 'https://picsum.photos/400/800?random=6',
				},
				{
					id: '7',
					bgPicUrl: 'https://picsum.photos/400/800?random=7',
				},
				{
					id: '8',
					bgPicUrl: 'https://picsum.photos/400/800?random=11',
				},
				{
					id: '9',
					bgPicUrl: 'https://picsum.photos/400/800?random=9',
				},
				{
					id: '10',
					bgPicUrl: 'https://picsum.photos/400/800?random=10',
				},
			]}
			initialIndex={0}
			onIndexChange={() => {}}
		/>
	)
}
