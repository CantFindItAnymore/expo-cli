import { useCallback } from 'react'
import { useSheetRef } from '../components/nativewindui/Sheet'

const useSheet = () => {
	const bottomSheetModalRef = useSheetRef()

	const present = useCallback(() => {
		console.log('present() called')
		console.log('bottomSheetModalRef.current:', bottomSheetModalRef.current)
		if (bottomSheetModalRef.current) {
			console.log('Calling present() on bottomSheetModalRef.current')
			bottomSheetModalRef.current.present()
		} else {
			console.log('bottomSheetModalRef.current is null or undefined')
		}
	}, [bottomSheetModalRef])

	const dismiss = useCallback(() => {
		bottomSheetModalRef.current?.dismiss()
	}, [bottomSheetModalRef])

	const close = useCallback(() => {
		bottomSheetModalRef.current?.close()
	}, [bottomSheetModalRef])

	return {
		bottomSheetModalRef,
		present,
		dismiss,
		close,
	}
}

export default useSheet
