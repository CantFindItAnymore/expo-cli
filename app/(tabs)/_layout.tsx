import { Image } from 'expo-image'
import { Tabs } from 'expo-router'
import React from 'react'
import { Platform } from 'react-native'

import { HapticTab } from '@/components/HapticTab'
import TabBarBackground from '@/components/ui/TabBarBackground'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from '@/hooks/useColorScheme'

export default function TabLayout() {
	const colorScheme = useColorScheme()

	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarButton: HapticTab,
				tabBarBackground: TabBarBackground,
				tabBarStyle: Platform.select({
					ios: {
						// Use a transparent background on iOS to show the blur effect
						position: 'absolute',
						backgroundColor: Colors[colorScheme ?? 'light'].tabBarColor,
					},
					default: {
						backgroundColor: Colors[colorScheme ?? 'light'].tabBarColor,
					},
				}),
				tabBarIconStyle: {
					marginTop: 12, // 向下移动图标
				},
			}}
		>
			<Tabs.Screen
				name='index'
				options={{
					title: 'Home',
					tabBarIcon: ({ focused }) => (
						<Image
							source={
								focused
									? require('@/assets/icons/chats.png')
									: require('@/assets/icons/chats_unfocus.png')
							}
							style={{
								width: 28,
								height: 28,
							}}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='explore'
				options={{
					title: 'Explore',
					tabBarIcon: ({ focused }) => (
						<Image
							source={
								focused
									? require('@/assets/icons/explore.png')
									: require('@/assets/icons/explore_unfocus.png')
							}
							style={{
								width: 28,
								height: 28,
							}}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='profile'
				options={{
					title: 'Profile',
					tabBarIcon: ({ focused }) => (
						<Image
							source={
								focused
									? require('@/assets/icons/profile.png')
									: require('@/assets/icons/profile_unfocus.png')
							}
							style={{
								width: 28,
								height: 28,
							}}
						/>
					),
				}}
			/>
		</Tabs>
	)
}
