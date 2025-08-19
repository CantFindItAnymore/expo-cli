import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import 'react-native-reanimated'
import ToastManager from 'react-native-toast-message'


import '../global.css'

import { useColorScheme } from '@/hooks/useColorScheme'

const toastConfig = {
	success: (props: any) => (
		<View className='bg-green-400  p-4 rounded-2xl mt-8 w-[80%] flex-row items-center justify-center'>
			<Text className='text-white  text-lg'>{props.text1}</Text>
		</View>
	),
	error: (props: any) => (
		<View className='bg-red-400  p-4 rounded-2xl mt-8 w-[80%] flex-row items-center justify-center'>
			<Text className='text-white  text-lg'>{props.text1}</Text>
		</View>
	),
	info: (props: any) => (
		<View className='bg-blue-400  p-4 rounded-2xl mt-8 w-[80%] flex-row items-center justify-center'>
			<Text className='text-white  text-lg'>{props.text1}</Text>
		</View>
	),
}

export default function RootLayout() {
	const colorScheme = useColorScheme()

	const [loaded] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
	})

	if (!loaded) {
		// Async font loading only occurs in development.
		return <View />
	}

	return (
		<ThemeProvider value={colorScheme === 'dark' ? DefaultTheme : DefaultTheme}>
			<GestureHandlerRootView style={{ flex: 1 }}>
				<BottomSheetModalProvider>
					<Stack>
						<Stack.Screen name='(tabs)' options={{ headerShown: false }} />
						<Stack.Screen name='roleDetail' options={{ headerShown: false }} />
						<Stack.Screen name='chat' options={{ headerShown: false }} />
						<Stack.Screen name='+not-found' />
					</Stack>
					<StatusBar style='auto' />
					<ToastManager config={toastConfig} />
				</BottomSheetModalProvider>
			</GestureHandlerRootView>
		</ThemeProvider>
	)
}
