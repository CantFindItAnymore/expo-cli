import { useIsFocused } from '@react-navigation/native'
import { Image } from 'expo-image'
import { Text, View } from 'react-native'

import ParallaxScrollView from '@/components/ParallaxScrollView'

export default function ProfileScreen() {
	const isFocused = useIsFocused()
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
			<View style={{ padding: 20 }}>
				<Text style={{ fontSize: 18, marginBottom: 10 }}>Profile Screen</Text>
				<Text style={{ fontSize: 16, color: isFocused ? 'green' : 'gray' }}>
					Tab is {isFocused ? 'focused' : 'not focused'}
				</Text>
			</View>
		</ParallaxScrollView>
	)
}
