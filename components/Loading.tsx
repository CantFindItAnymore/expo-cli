import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { ThemedText } from './ThemedText'
import { ThemedView } from './ThemedView'

interface LoadingProps {
	text?: string
	size?: 'small' | 'large'
	color?: string
}

export const Loading: React.FC<LoadingProps> = ({
	text = '',
	size = 'small',
	color = '#007AFF',
}) => {
	return (
		<View className='absolute inset-0 bg-black/50 flex-1 justify-center items-center z-50'>
			<ThemedView className='bg-white dark:bg-gray-800 rounded-2xl p-6 mx-4 shadow-lg'>
				<ActivityIndicator size={size} color={color} />
				{text && (
					<ThemedText className='mt-4 text-center text-gray-600 dark:text-gray-300 text-base'>
						{text}
					</ThemedText>
				)}
			</ThemedView>
		</View>
	)
}
