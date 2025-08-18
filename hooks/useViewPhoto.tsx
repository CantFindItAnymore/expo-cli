import { Ionicons } from '@expo/vector-icons'
import React, { useCallback, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import ImageViewing from 'react-native-image-viewing'

interface ViewPhotoOptions {
	/** 是否显示索引指示器，默认为true */
	showIndexIndicator?: boolean
	/** 背景色，默认为黑色 */
	backgroundColor?: string
}

interface UseViewPhotoReturn {
	/** 显示图片查看器 */
	show: (images: { uri: string }[], startIndex?: number) => void
	/** 隐藏图片查看器 */
	hide: () => void
	/** 是否正在显示 */
	visible: boolean
	/** ViewPhoto组件 */
	ViewPhotoComponent: React.FC
}

/**
 * useViewPhoto Hook
 * 提供简洁的图片查看器功能
 */
export const useViewPhoto = (
	options: ViewPhotoOptions = {}
): UseViewPhotoReturn => {
	const [visible, setVisible] = useState(false)
	const [images, setImages] = useState<{ uri: string }[]>([])
	const [imageIndex, setImageIndex] = useState(0)

	const { showIndexIndicator = true, backgroundColor = 'black' } = options

	const show = useCallback(
		(imageList: { uri: string }[], startIndex: number = 0) => {
			setImages(imageList)
			setImageIndex(startIndex)
			setVisible(true)
		},
		[]
	)

	const hide = useCallback(() => {
		setVisible(false)
	}, [])

	// 自定义头部组件
	const HeaderComponent = useCallback(
		({ imageIndex }: { imageIndex: number }) => (
			<View className='mt-10 flex-row justify-between items-center px-4 py-3 bg-black/50'>
				<TouchableOpacity
					onPress={hide}
					className='p-2 rounded-full bg-black/30'
					activeOpacity={0.7}
				>
					<Ionicons name='close' size={24} color='white' />
				</TouchableOpacity>

				{showIndexIndicator && images.length > 1 && (
					<Text className='text-white text-base font-medium'>
						{imageIndex + 1} / {images.length}
					</Text>
				)}
			</View>
		),
		[hide, showIndexIndicator, images.length]
	)

	const ViewPhotoComponent: React.FC = useCallback(() => {
		if (!images || images.length === 0) {
			return null
		}

		return (
			<ImageViewing
				images={images}
				imageIndex={imageIndex}
				visible={visible}
				onRequestClose={hide}
				backgroundColor={backgroundColor}
				swipeToCloseEnabled={true}
				doubleTapToZoomEnabled={true}
				HeaderComponent={HeaderComponent}
				presentationStyle='overFullScreen'
				animationType='fade'
			/>
		)
	}, [images, imageIndex, visible, hide, backgroundColor, HeaderComponent])

	return {
		show,
		hide,
		visible,
		ViewPhotoComponent,
	}
}

export default useViewPhoto
