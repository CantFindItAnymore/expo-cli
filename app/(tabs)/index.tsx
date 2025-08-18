import { Image } from 'expo-image'
import { Link } from 'expo-router'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

// Mock 历史聊天记录数据
const mockChatHistory = [
	{
		id: '1',
		name: 'Luckin',
		avatar:
			'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
		lastMessage: "Hi, I'm not your sugar daddy. Welcome to my world...",
		timestamp: '2024-01-20 14:30',
		unreadCount: 3,
		isOnline: true,
	},
	{
		id: '2',
		name: 'Emma',
		avatar:
			'https://images.unsplash.com/photo-1494790108755-2616b612b1e1?w=100&h=100&fit=crop&crop=face',
		lastMessage: '今天天气真不错呢，要不要出去走走？',
		timestamp: '2024-01-20 13:45',
		unreadCount: 0,
		isOnline: false,
	},
	{
		id: '3',
		name: 'David',
		avatar:
			'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
		lastMessage: '项目进度怎么样了？需要我帮忙吗？',
		timestamp: '2024-01-20 11:20',
		unreadCount: 1,
		isOnline: true,
	},
	{
		id: '4',
		name: 'Sophie',
		avatar:
			'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
		lastMessage: '周末一起看电影吧！有什么推荐的吗？',
		timestamp: '2024-01-19 20:15',
		unreadCount: 0,
		isOnline: false,
	},
	{
		id: '5',
		name: 'Alex',
		avatar:
			'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
		lastMessage: '代码review完成了，看起来不错！',
		timestamp: '2024-01-19 18:30',
		unreadCount: 2,
		isOnline: true,
	},
	{
		id: '6',
		name: 'Lisa',
		avatar:
			'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
		lastMessage: '晚饭吃什么？我来做菜吧~',
		timestamp: '2024-01-19 17:45',
		unreadCount: 0,
		isOnline: false,
	},
	{
		id: '7',
		name: 'Mike',
		avatar:
			'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop&crop=face',
		lastMessage: '会议延期到明天下午3点，记得参加',
		timestamp: '2024-01-19 16:20',
		unreadCount: 0,
		isOnline: true,
	},
	{
		id: '8',
		name: 'Anna',
		avatar:
			'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face',
		lastMessage: '新的设计稿已经发给你了，请查收',
		timestamp: '2024-01-19 15:10',
		unreadCount: 5,
		isOnline: false,
	},
	{
		id: '9',
		name: 'Jack',
		avatar:
			'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face',
		lastMessage: '明天的团建活动记得带运动鞋哦！',
		timestamp: '2024-01-19 14:30',
		unreadCount: 0,
		isOnline: true,
	},
	{
		id: '10',
		name: 'Grace',
		avatar:
			'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face',
		lastMessage: '这个bug已经修复了，可以测试一下',
		timestamp: '2024-01-19 13:45',
		unreadCount: 2,
		isOnline: false,
	},
	{
		id: '11',
		name: 'Tom',
		avatar:
			'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop&crop=face',
		lastMessage: '周五下班后一起去吃火锅吧！',
		timestamp: '2024-01-19 12:20',
		unreadCount: 1,
		isOnline: true,
	},
	{
		id: '12',
		name: 'Lily',
		avatar:
			'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=100&h=100&fit=crop&crop=face',
		lastMessage: '新版本的UI设计真的很棒！',
		timestamp: '2024-01-19 11:15',
		unreadCount: 0,
		isOnline: false,
	},
	{
		id: '13',
		name: 'Ryan',
		avatar:
			'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=100&h=100&fit=crop&crop=face',
		lastMessage: '数据库优化完成，性能提升了30%',
		timestamp: '2024-01-19 10:30',
		unreadCount: 3,
		isOnline: true,
	},
	{
		id: '14',
		name: 'Zoe',
		avatar:
			'https://images.unsplash.com/photo-1494790108755-2616b612b1e1?w=100&h=100&fit=crop&crop=face',
		lastMessage: '今天的会议资料我已经整理好了',
		timestamp: '2024-01-19 09:45',
		unreadCount: 0,
		isOnline: false,
	},
	{
		id: '15',
		name: 'Kevin',
		avatar:
			'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
		lastMessage: 'API文档更新完毕，请查看最新版本',
		timestamp: '2024-01-19 08:20',
		unreadCount: 7,
		isOnline: true,
	},
	{
		id: '16',
		name: 'Nina',
		avatar:
			'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face',
		lastMessage: '客户反馈很不错，他们很满意',
		timestamp: '2024-01-18 22:30',
		unreadCount: 0,
		isOnline: false,
	},
	{
		id: '17',
		name: 'Ben',
		avatar:
			'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
		lastMessage: '测试用例已经全部通过了！',
		timestamp: '2024-01-18 21:15',
		unreadCount: 4,
		isOnline: true,
	},
	{
		id: '18',
		name: 'Chloe',
		avatar:
			'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
		lastMessage: '新功能的用户体验测试报告出来了',
		timestamp: '2024-01-18 20:00',
		unreadCount: 1,
		isOnline: false,
	},
	{
		id: '19',
		name: 'Oscar',
		avatar:
			'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
		lastMessage: '服务器迁移工作已经完成',
		timestamp: '2024-01-18 19:30',
		unreadCount: 0,
		isOnline: true,
	},
	{
		id: '20',
		name: 'Mia',
		avatar:
			'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
		lastMessage: '营销活动的数据分析报告请查收',
		timestamp: '2024-01-18 18:45',
		unreadCount: 6,
		isOnline: false,
	},
	{
		id: '21',
		name: 'Leo',
		avatar:
			'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop&crop=face',
		lastMessage: '代码重构已经完成，请review',
		timestamp: '2024-01-18 17:20',
		unreadCount: 2,
		isOnline: true,
	},
	{
		id: '22',
		name: 'Ivy',
		avatar:
			'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face',
		lastMessage: '用户调研结果出来了，很有参考价值',
		timestamp: '2024-01-18 16:10',
		unreadCount: 0,
		isOnline: false,
	},
	{
		id: '23',
		name: 'Max',
		avatar:
			'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face',
		lastMessage: '新的部署脚本已经测试完毕',
		timestamp: '2024-01-18 15:30',
		unreadCount: 8,
		isOnline: true,
	},
	{
		id: '24',
		name: 'Ruby',
		avatar:
			'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face',
		lastMessage: '项目进度汇报已发送到你的邮箱',
		timestamp: '2024-01-18 14:45',
		unreadCount: 0,
		isOnline: false,
	},
	{
		id: '25',
		name: 'Sam',
		avatar:
			'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop&crop=face',
		lastMessage: '安全漏洞修复补丁已经部署',
		timestamp: '2024-01-18 13:20',
		unreadCount: 3,
		isOnline: true,
	},
]

export default function HomeScreen() {
	const insets = useSafeAreaInsets()
	const statusBarHeight = insets.top

	const renderChatItem = ({ item }: { item: (typeof mockChatHistory)[0] }) => (
		<Link href={`/roleDetail?id=${item.id}&name=${item.name}`} asChild>
			<TouchableOpacity className='px-4 py-3 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700'>
				<View className='flex-row items-center'>
					{/* 头像 */}
					<View className='relative'>
						<Image
							source={{ uri: item.avatar }}
							style={{ width: 50, height: 50, borderRadius: 25 }}
							contentFit='cover'
						/>
						{/* 在线状态指示器 */}
						{item.isOnline && (
							<View className='absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-800' />
						)}
					</View>

					{/* 聊天信息 */}
					<View className='flex-1 ml-3'>
						<View className='flex-row items-center justify-between mb-1'>
							<Text className='text-base font-semibold text-gray-900 dark:text-gray-100'>
								{item.name}
							</Text>
							<Text className='text-xs text-gray-500 dark:text-gray-400'>
								{item.timestamp.split(' ')[1]}
							</Text>
						</View>

						<View className='flex-row items-center justify-between'>
							<Text
								className='text-sm text-gray-600 dark:text-gray-300 flex-1'
								numberOfLines={1}
								ellipsizeMode='tail'
							>
								{item.lastMessage}
							</Text>

							{/* 未读消息计数 */}
							{item.unreadCount > 0 && (
								<View className='ml-2 bg-red-500 rounded-full min-w-[20px] h-5 px-1 justify-center items-center'>
									<Text className='text-xs text-white font-medium'>
										{item.unreadCount > 99 ? '99+' : item.unreadCount}
									</Text>
								</View>
							)}
						</View>
					</View>
				</View>
			</TouchableOpacity>
		</Link>
	)

	return (
		<View
			className='flex-1 bg-white dark:bg-gray-900'
			style={{ paddingTop: statusBarHeight }}
		>
			{/* 标题栏 */}
			<View className='px-4 py-3 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 flex-row items-center justify-center'>
				<Text className='text-2xl font-bold text-gray-900 dark:text-gray-100'>
					Amo
				</Text>
			</View>

			{/* 聊天列表 */}
			<FlatList
				data={mockChatHistory}
				renderItem={renderChatItem}
				keyExtractor={item => item.id}
				showsVerticalScrollIndicator={true}
				className='flex-1'
				contentContainerStyle={{
					paddingBottom: 120, // 底部安全区域
				}}
				automaticallyAdjustsScrollIndicatorInsets={false}
			/>
		</View>
	)
}
