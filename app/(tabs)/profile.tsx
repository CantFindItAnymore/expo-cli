import { useEffect } from 'react'

import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Toast } from 'toastify-react-native'

export default function ProfileScreen() {
	const insets = useSafeAreaInsets()

	useEffect(() => {
		console.log('toast test')
		Toast.success('Top toast', 'top')
	}, [])

	const statusBarHeight = insets.top // 状态栏高度
	return (
		<View style={{ padding: 20, paddingTop: statusBarHeight }}>
			<Text style={{ fontSize: 18, marginBottom: 10 }}>Rjx</Text>
			<Text style={{ fontSize: 14, color: 'gray' }}>
				状态栏高度: {statusBarHeight}
			</Text>
		</View>
	)
}
