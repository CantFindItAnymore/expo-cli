import { useViewPhoto } from '@/hooks/useViewPhoto'
import { cn } from '@/utils/cn'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Toast from 'react-native-toast-message'

export default function ProfileScreen() {
	const insets = useSafeAreaInsets()
	const viewPhoto = useViewPhoto({
		showIndexIndicator: true,
		backgroundColor: 'black',
	})

	const statusBarHeight = insets.top // 状态栏高度

	// 示例图片数据
	const sampleImages = [
		{ uri: 'https://picsum.photos/800/600?random=1' },
		{ uri: 'https://picsum.photos/800/600?random=2' },
		{ uri: 'https://picsum.photos/800/600?random=3' },
		{ uri: 'https://picsum.photos/800/600?random=4' },
	]

	// 打开图片查看器
	const openPhotoViewer = (index: number) => {
		viewPhoto.show(sampleImages, index)
	}
	return (
		<View
			style={{ paddingTop: statusBarHeight }}
			className={cn('p-5 bg-orange-200 flex-1')}
		>
			<Text style={{ fontSize: 18, marginBottom: 10 }}>
				create with ❤️ by Rjx
			</Text>
			<Text style={{ fontSize: 14, color: 'gray' }}>
				状态栏高度: {statusBarHeight}
			</Text>

			<View className='flex gap-2 my-8'>
				<TouchableOpacity
					className='bg-green-500 py-3 px-5 rounded-lg my-1'
					onPress={() =>
						Toast.show({
							type: 'success',
							text1: 'Top toast',
						})
					}
				>
					<Text className='text-white text-center font-semibold'>
						success toast
					</Text>
				</TouchableOpacity>

				<TouchableOpacity
					className='bg-red-500 py-3 px-5 rounded-lg my-1'
					onPress={() =>
						Toast.show({
							type: 'error',
							text1:
								'Top toast server error, please try again later, SQL error, network error, unknown error, 1234567890 1+1=2',
						})
					}
				>
					<Text className='text-white text-center font-semibold'>
						error toast
					</Text>
				</TouchableOpacity>

				<TouchableOpacity
					className='bg-blue-500 py-3 px-5 rounded-lg my-1'
					onPress={() =>
						Toast.show({
							type: 'info',
							text1: 'Top toast',
						})
					}
				>
					<Text className='text-white text-center font-semibold'>
						info toast
					</Text>
				</TouchableOpacity>
			</View>
			{/* 图片网格示例 */}
			<Text style={{ fontSize: 16, marginTop: 20, marginBottom: 10 }}>
				点击图片全屏查看：
			</Text>
			<View className='flex-row flex-wrap gap-2'>
				{sampleImages.map((image, index) => (
					<TouchableOpacity
						key={index}
						onPress={() => openPhotoViewer(index)}
						className='w-20 h-20 rounded-lg overflow-hidden bg-gray-200'
					>
						<Image
							source={{ uri: image.uri }}
							className='w-full h-full'
							resizeMode='cover'
						/>
					</TouchableOpacity>
				))}
			</View>

			{/* ViewPhoto 组件 - 使用 hooks 设计 */}
			<viewPhoto.ViewPhotoComponent />
		</View>
	)
}
