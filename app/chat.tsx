import Header from '@/components/Header'
import { Sheet } from '@/components/nativewindui/Sheet'
import { IconSymbol } from '@/components/ui/IconSymbol'
import useSheet from '@/hooks/useSheet'
import { cn } from '@/utils/cn'
import { BottomSheetScrollView } from '@gorhom/bottom-sheet'
import { useLocalSearchParams, useRouter } from 'expo-router'
import React, { useRef, useState } from 'react'
import { FlatList, Image, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Chat = () => {
	const router = useRouter()
	const params = useLocalSearchParams()
	const id = params.id as string
	const name = params.name as string


	const insets = useSafeAreaInsets()
	const bottom = insets.bottom

	const { present, bottomSheetModalRef } = useSheet()

  const [messages, setMessages] = useState<any[]>([
    {
      id: 1,
      text: 'Hello',
      type: 'text',
      isMe: false,
    },])
  const [message, setMessage] = useState<string>('')
  const flatListRef = useRef<FlatList>(null)
  const [sendLoading, setSendLoading] = useState<boolean>(false)

  const handleSend = () => {

    const msg = message.trim()
    if (msg === '') return

    setMessages([ {
      id: messages.length + 1,
      text: msg,
      type: 'text',
      isMe: true,
    },...messages])

    // 关闭键盘
    Keyboard.dismiss()
    setMessage('')
    // 滚动到顶部
    flatListRef.current?.scrollToOffset({ offset: 0, animated: false })


    setSendLoading(true)

    setTimeout(() => {
      setSendLoading(false)
      setMessages(prevMessages => [{
        id: prevMessages.length + 1,
        text: msg,
        type: 'text',
        isMe: false,
      }, ...prevMessages])
    }, 2000)
  }





		return (
		<KeyboardAvoidingView
			className='flex-1 flex-col items-center bg-orange-200 relative transition-all duration-300 ease-in-out'
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
		>
      <Image source={require('@/assets/images/test.jpeg')} className='absolute inset-0 w-full h-full' resizeMode='cover' />
			<Header title={name} onBack={() => router.back()} onMore={
        () => {
          Keyboard.dismiss()
          present()
        }
      } />

      {/* 聊天内容 */}
      <View className='flex-1 w-full relative'>
      <FlatList
        ref={flatListRef}
        data={sendLoading ? [{ id: 'loading', text: '', type: 'loading', isMe: false }, ...messages] : messages}
        renderItem={({ item }) => (
          <View className={cn('w-full flex-row my-3 px-6 items-center', item.isMe ? 'justify-end' : 'justify-start')}>

            <View className={cn('max-w-[80%] rounded-2xl px-6 py-3 border border-[#000] transition-all duration-300 ease-in-out min-h-[40px] flex items-center justify-center', item.isMe ? 'bg-orange-100' : 'bg-white')}>
              {item.type === 'loading' ? (
                <View className='flex-row items-center'>
                  <View className='w-2 h-2 bg-orange-500 rounded-full mr-1 animate-pulse' />
                  <View className='w-2 h-2 bg-orange-500 rounded-full mr-1 animate-pulse' style={{ animationDelay: '0.2s' }} />
                  <View className='w-2 h-2 bg-orange-500 rounded-full animate-pulse' style={{ animationDelay: '0.4s' }} />
                </View>
              ) : (
                <Text className='leading-6 text-base'>{item.text}</Text>
              )}
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        inverted={true}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'flex-end',
          paddingTop: 20,
        }}
        />
        </View>

      {/* 聊天输入框 */}
      <View className='w-full bg-orange-200 p-4 rounded-t-xl flex-row items-center transition-all duration-300 ease-in-out' style={{ paddingBottom: bottom }}>
        <TextInput
          className='bg-white rounded-3xl px-6 py-3 border border-[#000] flex-1 min-h-[40px] max-h-[120px] leading-5 transition-all duration-300 ease-in-out'
          placeholder='请输入消息'
          maxLength={100}
          multiline={true}
          textAlignVertical='center'
          style={{
            minHeight: 40,
            maxHeight: 120,
          }}
          cursorColor='orange'
          selectionColor='orange'
          value={message}
          onChangeText={(text) => {
            // 检查是否包含换行符，如果有则发送消息
            if (text.includes('\n')) {
              const cleanText = text.replace(/\n/g, '').trim()
              if (cleanText !== '') {
                setMessage(cleanText)
                // 延迟执行发送，确保状态更新完成
                setTimeout(() => {
                  handleSend()
                }, 0)
                return
              }
            }
            setMessage(text)
          }}
          returnKeyType='send'
          onSubmitEditing={handleSend}
          blurOnSubmit={false}
        />
        <TouchableOpacity className='h-10 w-10 bg-white rounded-3xl px-0 py-0 border border-[#000] ml-4 items-center justify-center' onPress={handleSend}>
          <IconSymbol name='paperplane.fill' size={20} color='orange' />
        </TouchableOpacity>
      </View>



			{/* 添加 Sheet 组件 */}
			<Sheet
				ref={bottomSheetModalRef}
				snapPoints={['30%']}
				enablePanDownToClose={true}
				enableContentPanningGesture={false}
			>
				<BottomSheetScrollView
					contentContainerStyle={{
						flexGrow: 1,
						justifyContent: 'flex-start',
						paddingHorizontal: 24,
						paddingVertical: 16
					}}
				>
					<View style={{ alignItems: 'center' }}>
						{/* <Text className="text-xl font-bold mb-6 text-center">聊天选项</Text> */}

						<View style={{ width: '100%', gap: 16 }}>
							<View className="rounded-lg p-2 items-center">
								<Text className="text-base font-medium">Clear Chat</Text>
							</View>

							<View className="rounded-lg p-2 items-center">
								<Text className="text-base font-medium">Top Chat</Text>
							</View>

							<View className="rounded-lg p-2 items-center">
								<Text className="text-base font-medium">No Disturb</Text>
							</View>

							<View className=" rounded-lg p-2 items-center">
								<Text className="text-base font-medium text-red-600">Report</Text>
							</View>
						</View>
					</View>
				</BottomSheetScrollView>
			</Sheet>
		</KeyboardAvoidingView>
	)
}

export default Chat
