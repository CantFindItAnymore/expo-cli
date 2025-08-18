import { Button, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Toast from 'react-native-toast-message'

export default function ProfileScreen() {
	const insets = useSafeAreaInsets()

	const statusBarHeight = insets.top // 状态栏高度
	return (
		<View style={{ padding: 20, paddingTop: statusBarHeight }}>
			<Text style={{ fontSize: 18, marginBottom: 10 }}>Rjx</Text>
			<Text style={{ fontSize: 14, color: 'gray' }}>
				状态栏高度: {statusBarHeight}
			</Text>

			<Button
				title='success toast'
				onPress={() =>
					Toast.show({
						type: 'success',
						text1: 'Top toast',
					})
				}
			/>

			<Button
				title='error toast'
				onPress={() =>
					Toast.show({
						type: 'error',
						text1:
							'Top toast server error, please try again later, SQL error, network error, unknown error, 1234567890 1+1=2',
					})
				}
			/>

			<Button
				title='info toast'
				onPress={() =>
					Toast.show({
						type: 'info',
						text1: 'Top toast',
					})
				}
			/>
		</View>
	)
}
