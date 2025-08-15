import { Image } from 'expo-image'
import { Platform, Text, View } from 'react-native'

import { Collapsible } from '@/components/Collapsible'
import { ExternalLink } from '@/components/ExternalLink'
import ParallaxScrollView from '@/components/ParallaxScrollView'
// import { IconSymbol } from '@/components/ui/IconSymbol'

export default function TabTwoScreen() {
	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
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
			<View className='flex-row gap-2 bg-red-500'>
				<Text className='text-2xl font-bold text-gray-900 dark:text-white'>
					Explore
				</Text>
			</View>
			<Text className='text-base text-gray-700 dark:text-gray-300'>
				This app includes example code to help you get started.
			</Text>
			<Collapsible title='File-based routing'>
				<Text className='text-base text-gray-700 dark:text-gray-300'>
					This app has two screens:
					<Text className='font-semibold'>app/(tabs)/index.tsx</Text> and
					<Text className='font-semibold'>app/(tabs)/explore.tsx</Text>
				</Text>
				<Text className='text-base text-gray-700 dark:text-gray-300'>
					The layout file in
					<Text className='font-semibold'>app/(tabs)/_layout.tsx</Text> sets up
					the tab navigator.
				</Text>
				<ExternalLink href='https://docs.expo.dev/router/introduction'>
					<Text className='text-blue-500 dark:text-blue-400 text-base'>
						Learn more
					</Text>
				</ExternalLink>
			</Collapsible>
			<Collapsible title='Android, iOS, and web support'>
				<Text className='text-base text-gray-700 dark:text-gray-300'>
					You can open this project on Android, iOS, and the web. To open the
					web version, press <Text className='font-semibold'>w</Text> in the
					terminal running this project.
				</Text>
			</Collapsible>
			<Collapsible title='Images'>
				<Text className='text-base text-gray-700 dark:text-gray-300'>
					For static images, you can use the
					<Text className='font-semibold'>@2x</Text> and
					<Text className='font-semibold'>@3x</Text> suffixes to provide files
					for different screen densities
				</Text>
				<Image
					source={require('@/assets/images/react-logo.png')}
					className='self-center'
				/>
				<ExternalLink href='https://reactnative.dev/docs/images'>
					<Text className='text-blue-500 dark:text-blue-400 text-base'>
						Learn more
					</Text>
				</ExternalLink>
			</Collapsible>
			<Collapsible title='Custom fonts'>
				<Text className='text-base text-gray-700 dark:text-gray-300'>
					Open <Text className='font-semibold'>app/_layout.tsx</Text> to see how
					to load
					<Text style={{ fontFamily: 'SpaceMono' }}>
						custom fonts such as this one.
					</Text>
				</Text>
				<ExternalLink href='https://docs.expo.dev/versions/latest/sdk/font'>
					<Text className='text-blue-500 dark:text-blue-400 text-base'>
						Learn more
					</Text>
				</ExternalLink>
			</Collapsible>
			<Collapsible title='Light and dark mode components'>
				<Text className='text-base text-gray-700 dark:text-gray-300'>
					This template has light and dark mode support. The
					<Text className='font-semibold'>useColorScheme()</Text> hook lets you
					inspect what the user&apos;s current color scheme is, and so you can
					adjust UI colors accordingly.
				</Text>
				<ExternalLink href='https://docs.expo.dev/develop/user-interface/color-themes/'>
					<Text className='text-blue-500 dark:text-blue-400 text-base'>
						Learn more
					</Text>
				</ExternalLink>
			</Collapsible>
			<Collapsible title='Animations'>
				<Text className='text-base text-gray-700 dark:text-gray-300'>
					This template includes an example of an animated component. The
					<Text className='font-semibold'>components/HelloWave.tsx</Text>
					component uses the powerful
					<Text className='font-semibold'>react-native-reanimated</Text> library
					to create a waving hand animation.
				</Text>
				{Platform.select({
					ios: (
						<Text className='text-base text-gray-700 dark:text-gray-300'>
							The
							<Text className='font-semibold'>
								components/ParallaxScrollView.tsx
							</Text>
							component provides a parallax effect for the header image.
						</Text>
					),
				})}
			</Collapsible>
		</ParallaxScrollView>
	)
}
