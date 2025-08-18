import axios from 'axios'
import toast from 'react-native-toast-message'
const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL

const instance: any = axios.create({
	baseURL,
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json;charset=utf-8',
	},
})

instance.interceptors.request.use(
	function (config: any) {
		return config
	},
	function (error: any) {
		return Promise.reject(error)
	}
)

instance.interceptors.response.use(
	function (res: any) {
		const { status } = res
		const { data, code, message } = res.data

		if (String(status).startsWith('2')) {
			let err

			if (String(code) !== '0') {
				switch (String(code)) {
					default:
						err = message || 'unknow error'
						break
				}

				toast.show({
					type: 'error',
					text1: err,
				})
			}

			return [data, err, code]
			// return Promise.reject([data, err])
		} else {
			return [null, 'network error', code]
		}
	},
	function (error: any) {
		console.log('error', error)
		if (!error) {
			return
		}
		toast.show({
			type: 'error',
			text1: 'network error, please try again later',
		})

		return [null, error]
	}
)

export default instance
