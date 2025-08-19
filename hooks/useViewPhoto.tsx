import React, { useCallback, useState } from 'react'
import { Modal, Text, View } from 'react-native'
import ImageViewer from 'react-native-image-zoom-viewer'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

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
	const insets = useSafeAreaInsets()
	const statusBarHeight = insets.top // 状态栏高度

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

	const ViewPhotoComponent: React.FC = useCallback(() => {
		if (!images || images.length === 0) {
			return null
		}

		const imageUrls = images.map(img => ({ url: img.uri }))

		return (
			<Modal visible={visible} transparent={true} animationType='fade'>
				<View className='flex-1'>
					<ImageViewer
						imageUrls={imageUrls}
						index={imageIndex}
						onSwipeDown={hide}
						onClick={hide}
						onChange={index => {
							setImageIndex(index || 0)
						}}
						backgroundColor={backgroundColor}
						enableSwipeDown={true}
						enableImageZoom={true}
						useNativeDriver={false}
						saveToLocalByLongPress={false}
						// 指示器位于下方
						renderIndicator={(index = 1, total) => (
							<View
								style={{
									position: 'absolute',
									bottom: 50,
									left: 0,
									right: 0,
									height: 40,
									justifyContent: 'center',
									alignItems: 'center',
									zIndex: 1000,
								}}
							>
								<Text
									style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}
								>
									{index} / {total}
								</Text>
							</View>
						)}
					/>
				</View>
			</Modal>
		)
	}, [images, hide, backgroundColor, visible])

	return {
		show,
		hide,
		visible,
		ViewPhotoComponent,
	}
}

export default useViewPhoto
