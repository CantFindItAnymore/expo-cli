import { Image } from 'expo-image'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Dimensions, FlatList, TouchableOpacity, View } from 'react-native'

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

export interface FullScreenSwiperV3Props {
	data: {
		id: string
		bgPicUrl: string
	}[]
	initialIndex?: number
	onIndexChange?: (index: number) => void
	children?: (item: any, index: number) => React.ReactNode
	onClick?: (index: number) => void
}

const FullScreenSwiperV3: React.FC<FullScreenSwiperV3Props> = ({
	data,
	initialIndex = 0,
	onIndexChange,
	children,
	onClick,
}) => {
	const flatListRef = useRef<FlatList>(null)
	const [currentIndex, setCurrentIndex] = useState(initialIndex)

	// 滚动结束处理
	const handleMomentumScrollEnd = useCallback(
		(event: any) => {
			const newIndex = Math.round(
				event.nativeEvent.contentOffset.y / SCREEN_HEIGHT
			)

			if (
				newIndex !== currentIndex &&
				newIndex >= 0 &&
				newIndex < data.length
			) {
				setCurrentIndex(newIndex)
				onIndexChange?.(newIndex)
			}
		},
		[currentIndex, data, onIndexChange]
	)

	// 渲染每一项
	const renderItem = useCallback(
		({ item, index }: { item: any; index: number }) => (
			<TouchableOpacity activeOpacity={1} onPress={() => onClick?.(index)}>
				<View
					style={{
						width: SCREEN_WIDTH,
						height: SCREEN_HEIGHT,
						backgroundColor: '#000',
					}}
				>
					{/* 背景图片 */}
					<Image
						source={{ uri: item.bgPicUrl }}
						style={{ width: '100%', height: '100%' }}
						contentFit='cover'
					/>

					{/* 自定义内容 */}
					{children && (
						<View
							style={{
								position: 'absolute',
								top: 0,
								left: 0,
								right: 0,
								bottom: 0,
								zIndex: 1,
							}}
						>
							{children(item, index)}
						</View>
					)}
				</View>
			</TouchableOpacity>
		),
		[children]
	)

	// 获取item布局
	const getItemLayout = useCallback(
		(_: any, index: number) => ({
			length: SCREEN_HEIGHT,
			offset: SCREEN_HEIGHT * index,
			index,
		}),
		[]
	)

	// 滚动到初始位置
	useEffect(() => {
		if (flatListRef.current && initialIndex > 0) {
			setTimeout(() => {
				flatListRef.current?.scrollToIndex({
					index: initialIndex,
					animated: false,
				})
			}, 100)
		}
	}, [initialIndex])

	if (!data || data.length === 0) {
		return null
	}

	return (
		<FlatList
			ref={flatListRef}
			data={data}
			renderItem={renderItem}
			keyExtractor={item => item.id}
			pagingEnabled
			showsVerticalScrollIndicator={false}
			bounces={true}
			onMomentumScrollEnd={handleMomentumScrollEnd}
			getItemLayout={getItemLayout}
			initialScrollIndex={initialIndex}
			windowSize={3} // 优化性能，只渲染当前页面及前后各一页
			maxToRenderPerBatch={3}
			removeClippedSubviews={true}
			scrollEventThrottle={16}
			style={{
				backgroundColor: '#000',
			}}
		/>
	)
}

export default FullScreenSwiperV3
