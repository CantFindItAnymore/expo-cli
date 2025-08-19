import {
	BottomSheetBackdrop,
	BottomSheetBackdropProps,
	BottomSheetModal,
} from '@gorhom/bottom-sheet'
import * as React from 'react'

import { useColorScheme } from '@/hooks/useColorScheme'

const Sheet = React.forwardRef<
	BottomSheetModal,
	React.ComponentPropsWithoutRef<typeof BottomSheetModal>
>(
	(
		{ index = 0, backgroundStyle, style, handleIndicatorStyle, ...props },
		ref
	) => {
		const colorScheme = useColorScheme()

		const renderBackdrop = React.useCallback(
			(props: BottomSheetBackdropProps) => (
				<BottomSheetBackdrop {...props} disappearsOnIndex={-1} />
			),
			[]
		)
		return (
			<BottomSheetModal
				ref={ref}
				index={index}
				backgroundStyle={
					backgroundStyle ?? {
						backgroundColor: colorScheme === 'dark' ? '#1D3D47' : '#FFF',
					}
				}
				style={
					style ?? {
						borderWidth: 1,
						borderColor: colorScheme === 'dark' ? '#1D3D47' : '#FFF',
						borderTopStartRadius: 16,
						borderTopEndRadius: 16,
					}
				}
				handleIndicatorStyle={
					handleIndicatorStyle ?? {
						backgroundColor: colorScheme === 'dark' ? '#666' : '#999',
					}
				}
				backdropComponent={renderBackdrop}
				{...props}
			/>
		)
	}
)

function useSheetRef() {
	return React.useRef<BottomSheetModal>(null)
}

export { Sheet, useSheetRef }
