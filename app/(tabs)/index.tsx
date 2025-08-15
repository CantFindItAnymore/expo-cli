import { Image } from 'expo-image'
import { Link } from 'expo-router'
import { Platform, Text, View } from 'react-native'

import { HelloWave } from '@/components/HelloWave'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { cn } from '@/utils/cn'

export default function HomeScreen() {
	// 示例变量用于演示条件样式
	const isWelcomeHighlighted = true
	const isDarkMode = false
	const stepNumber = 1

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
				<Text
					className={cn(
						'text-4xl',
						isWelcomeHighlighted ? 'text-red-500' : 'text-gray-500',
						isDarkMode && 'dark:text-white'
					)}
				>
					Welcome1122!
				</Text>
				<HelloWave />
			</View>

			<Link href='/chat' className='mt-4 py-4'>
				<Text className='text-blue-500 dark:text-blue-400 text-base'>
					Go to chat screen!
				</Text>
			</Link>
			<View className={cn('gap-2 mb-2')}>
				<Text
					className={cn(
						'text-lg font-semibold dark:text-white',
						stepNumber === 1 ? 'text-blue-500' : 'text-gray-500'
					)}
				>
					Step 1: Try it
				</Text>
				<Text className='text-base text-gray-700 dark:text-gray-300'>
					Edit
					<Text className='font-semibold'>app/(tabs)/index.tsx</Text>
					to see changes. Press
					<Text className='font-semibold'>
						{Platform.select({
							ios: 'cmd + d',
							android: 'cmd + m',
							web: 'F12',
						})}
					</Text>
					to open developer tools.
				</Text>
			</View>
			<View className='gap-2 mb-2'>
				<Text className='text-lg font-semibold text-gray-900 dark:text-white'>
					Step 2: Explore
				</Text>
				<Text className='text-base text-gray-700 dark:text-gray-300'>
					{`Tap the Explore tab to learn more about what's included in this starter app.`}
				</Text>
			</View>
			<View className='gap-2 mb-2'>
				<Text className='text-lg font-semibold text-gray-900 dark:text-white'>
					Step 3: Get a fresh start
				</Text>
				<Text className='text-base text-gray-700 dark:text-gray-300'>
					{`When you're ready, run `}
					<Text className='font-semibold'>npm run reset-project</Text>
					to get a fresh <Text className='font-semibold'>app</Text>
					directory. This will move the current
					<Text className='font-semibold'>app</Text> to
					<Text className='font-semibold'>app-example</Text>.
				</Text>
			</View>
		</ParallaxScrollView>
	)
}
