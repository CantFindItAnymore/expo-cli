import { IconSymbol } from '@/components/ui/IconSymbol'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Header = ({
	title,
	onBack,
	onMore,
}: {
	title?: string
	onBack?: () => void
	onMore?: () => void
}) => {
	const insets = useSafeAreaInsets()
	const statusBarHeight = insets.top


	return (
		<View
			style={{ paddingTop: statusBarHeight }}
			className='flex-row items-center justify-between h-28 w-full px-4'
		>
			{/* 返回按钮 */}
			{onBack && (
				<TouchableOpacity
					onPress={onBack}
					className='p-3 w-[44px] h-[44px] items-center justify-center'
					activeOpacity={0.7}
				>
					<IconSymbol name='chevron.left' size={20} color='white' />
				</TouchableOpacity>
			)}
			{/* 标题 */}
			<Text className='text-2xl font-bold text-white'>{title}</Text>
			{/* 更多按钮 */}
			{onMore && (
				<TouchableOpacity
					onPress={onMore}
					className='p-3 w-[44px] h-[44px] items-center justify-center'
					activeOpacity={0.7}
				>
					<IconSymbol name='ellipsis' size={20} color='white' />
				</TouchableOpacity>
			)}
		</View>
	)
}

export default Header
