import { useGlobalLoading } from '@/components/GlobalLoading'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React from 'react'
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const { width, height } = Dimensions.get('window')

export default function LoginScreen() {
	const { show, hide } = useGlobalLoading()

	const handleGoogleLogin = () => {
		// 处理谷歌登录逻辑
		console.log('Google login pressed')
		show()
		setTimeout(() => {
			hide()
			router.replace('/(tabs)')
		}, 1000)
	}

	const handleAppleLogin = () => {
		// 处理苹果登录逻辑
		console.log('Apple login pressed')
		show()
		setTimeout(() => {
			hide()
			router.replace('/(tabs)')
		}, 1000)
	}

	return (
		<SafeAreaView className='flex-1 bg-black'>
			{/* 背景图片 */}
			<Image
				source={require('@/assets/images/test.jpeg')}
				className='absolute inset-0'
				style={{ width, height }}
				resizeMode='cover'
			/>

			{/* 半透明遮罩 */}
			<View
				className='absolute inset-0 bg-black/40'
				style={{ width, height }}
			/>

			{/* 主要内容区域 */}
			<View className='flex-1 justify-between px-6'>
				{/* 顶部区域 */}
				<View className='flex-1 justify-center items-center pt-15'>
					<Text className='text-3xl font-bold text-white text-center mb-3'>
						欢迎回来
					</Text>
					<Text className='text-base text-white text-center opacity-80'>
						登录您的账户以继续
					</Text>
				</View>

				{/* 底部登录按钮区域 */}
				<View className='pb-10'>
					{/* 谷歌登录按钮 */}
					<TouchableOpacity
						className='flex-row items-center justify-center bg-white py-4 px-6 rounded-3xl mb-4 shadow-lg'
						onPress={handleGoogleLogin}
						activeOpacity={0.8}
					>
						<Ionicons name='logo-google' size={24} color='#000' />
						<Text className='text-base font-semibold text-gray-800 ml-3'>
							使用 Google 登录
						</Text>
					</TouchableOpacity>

					{/* 苹果登录按钮 */}
					<TouchableOpacity
						className='flex-row items-center justify-center bg-black py-4 px-6 rounded-3xl mb-6 border border-gray-700 shadow-lg'
						onPress={handleAppleLogin}
						activeOpacity={0.8}
					>
						<Ionicons name='logo-apple' size={24} color='#FFFFFF' />
						<Text className='text-base font-semibold text-white ml-3'>
							使用 Apple 登录
						</Text>
					</TouchableOpacity>

					{/* 隐私政策链接 */}
					<View className='items-center'>
						<Text className='text-xs text-white text-center opacity-70 leading-5'>
							登录即表示您同意我们的{' '}
							<Text className='text-[#60cb96] underline'>服务条款</Text> 和{' '}
							<Text className='text-[#60cb96] underline'>隐私政策</Text>
						</Text>
					</View>
				</View>
			</View>
		</SafeAreaView>
	)
}
