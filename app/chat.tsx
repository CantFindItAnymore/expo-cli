import { Stack } from 'expo-router'
import { Text, View } from 'react-native'

export default function ChatScreen() {
	return (
		<>
			<Stack.Screen options={{ title: 'Role Name' }} />
			<View className='flex-1 items-center justify-center p-5'>
				<Text className='text-lg font-semibold text-gray-900 dark:text-white'>
					Chat Screen
				</Text>
			</View>
		</>
	)
}
