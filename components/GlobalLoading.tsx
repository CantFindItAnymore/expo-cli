import React, { useEffect, useState } from 'react'
import { Loading } from './Loading'

interface LoadingOptions {
	text?: string
	size?: 'small' | 'large'
	color?: string
}

// 全局状态管理
let globalLoadingState: LoadingOptions | null = null
let globalLoadingCallbacks: ((state: LoadingOptions | null) => void)[] = []

const setGlobalLoadingState = (state: LoadingOptions | null) => {
	globalLoadingState = state
	globalLoadingCallbacks.forEach(callback => callback(state))
}

export const useGlobalLoading = () => {
	const [loadingState, setLoadingState] = useState<LoadingOptions | null>(null)

	useEffect(() => {
		globalLoadingCallbacks.push(setLoadingState)
		return () => {
			const index = globalLoadingCallbacks.indexOf(setLoadingState)
			if (index > -1) {
				globalLoadingCallbacks.splice(index, 1)
			}
		}
	}, [])

	const show = (options?: LoadingOptions) => {
		setGlobalLoadingState(options || {})
	}

	const hide = () => {
		setGlobalLoadingState(null)
	}

	const update = (options: LoadingOptions) => {
		setGlobalLoadingState(options)
	}

	return {
		show,
		hide,
		update,
		loadingState,
	}
}

export const GlobalLoading: React.FC = () => {
	const { loadingState } = useGlobalLoading()

	if (!loadingState) {
		return null
	}

	return (
		<Loading
			text={loadingState.text}
			size={loadingState.size}
			color={loadingState.color}
		/>
	)
}

// 导出全局函数，供非 React 组件使用
export const showGlobalLoading = (options?: LoadingOptions) => {
	setGlobalLoadingState(options || {})
}

export const hideGlobalLoading = () => {
	setGlobalLoadingState(null)
}

export const updateGlobalLoading = (options: LoadingOptions) => {
	setGlobalLoadingState(options)
}
