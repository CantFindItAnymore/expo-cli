import { Image } from 'expo-image'
import {
	Dimensions,
	FlatList,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'

import { HelloWave } from '@/components/HelloWave'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { cn } from '@/utils/cn'

// Mock 相册数据
const mockPhotos = [
	{
		id: '1',
		uri: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=360&h=480&fit=crop',
		title: '山景',
	},
	{
		id: '2',
		uri: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=360&h=480&fit=crop',
		title: '森林',
	},
	{
		id: '3',
		uri: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=360&h=480&fit=crop',
		title: '海滩',
	},
	{
		id: '4',
		uri: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=360&h=480&fit=crop',
		title: '城市',
	},
	{
		id: '5',
		uri: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=360&h=480&fit=crop',
		title: '湖泊',
	},
	{
		id: '6',
		uri: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=360&h=480&fit=crop',
		title: '树林',
	},
	{
		id: '7',
		uri: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=360&h=480&fit=crop',
		title: '雪山',
	},
	{
		id: '8',
		uri: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=360&h=480&fit=crop',
		title: '沙漠',
	},
]

export default function RoleDetailScreen() {
	const screenWidth = Dimensions.get('window').width
	const itemWidth = (screenWidth - 68) / 2 // 减去padding和gap的空间

	const renderPhotoItem = ({ item }: { item: (typeof mockPhotos)[0] }) => (
		<TouchableOpacity
			className='mb-3'
			style={{ width: itemWidth }}
			onPress={() => console.log('点击照片:', item.title)}
		>
			<View className='bg-white dark:bg-gray-800 overflow-hidden'>
				<Image
					source={{ uri: item.uri }}
					style={{
						width: '100%',
						height: (itemWidth * 4) / 3, // 1.2的宽高比
						borderRadius: 12,
					}}
					contentFit='cover'
					transition={200}
				/>
				<View className='p-3'>
					<Text className='text-sm font-medium text-gray-900 dark:text-gray-100'>
						{item.title}
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	)

	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
			headerImage={
				<Image
					source={require('@/assets/images/test.jpeg')}
					style={{
						height: '100%',
						width: '100%',
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						objectFit: 'cover',
					}}
				/>
			}
		>
			<View className={cn('flex-row items-center gap-2')}>
				<Text className={cn('text-4xl')}>Luckin</Text>
				<HelloWave />
			</View>

			<View className={cn('gap-2 mb-6')}>
				<Text className='text-base text-gray-700 dark:text-gray-300'>
					Hi, I&apos;m not your sugar daddy. Welcome to my world. I&apos;m a
					software engineer. I&apos;m a software engineer. I&apos;m a software.
					You can call me Luckin.
				</Text>
			</View>

			{/* 相册标题 */}
			<View className='mb-4'>
				<Text className='text-2xl font-bold text-gray-900 dark:text-gray-100'>
					我的相册
				</Text>
				<Text className='text-sm text-gray-500 dark:text-gray-400 mt-1'>
					{mockPhotos.length} 张照片
				</Text>
			</View>

			{/* 2列相册网格 */}
			<View className='mb-6'>
				<FlatList
					data={mockPhotos}
					renderItem={renderPhotoItem}
					numColumns={2}
					columnWrapperStyle={{
						justifyContent: 'space-between',
					}}
					scrollEnabled={false} // 禁用FlatList的滚动，使用ParallaxScrollView的滚动
					showsVerticalScrollIndicator={false}
					keyExtractor={item => item.id}
					contentContainerStyle={{
						paddingHorizontal: 0,
					}}
				/>
			</View>
		</ParallaxScrollView>
	)
}
