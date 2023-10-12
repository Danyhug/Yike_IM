<template>
	<view class="content">
		<Header>{{uname}}</Header>
		<view class="main" :style="`padding-bottom:${paddingBottom}px`">
			<!-- 遮罩 -->
			<view class="mask">
				<view class="record-num">
					<text>
						{{voiceTime}}”
					</text>
				</view>
				<view class="close">X</view>
			</view>

			<view class="chat-lists" v-for="(item, index) in msgs" :key="item.index">
				<!-- 时间标记 11月14日 14:23-->
				<view class="date-mark" v-if="item.timeStr != ''">{{item.timeStr}}</view>

				<!-- 对方说话 -->
				<view class="chat-list list-you" v-if="item.id != uid">
					<image :src="item.imgUrl" mode=""></image>
					<view class="list-content" v-if="item.types == 0">
						{{item.message}}
					</view>
					<view class="list-content list-content-image" v-if="item.types == 1">
						<image :src="item.message" mode=""></image>
					</view>
					<view class="list-content list-content-voice" v-if="item.types == 2">
						<view :style="`width: ${parseInt(item.message) * 20}px`">
							<image src="../../static/声音.png" mode=""></image>
							{{item.message}}”
						</view>
					</view>

					<view class="space"></view>
				</view>

				<!-- 我说话 -->
				<view class="chat-list list-me" v-else>
					<view class="space"></view>

					<view class="list-content" v-if="item.types == 0">
						{{item.message}}
					</view>
					<view class="list-content list-content-image" v-if="item.types == 1">
						<image :src="item.message" mode=""></image>
					</view>
					<view class="list-content list-content-voice" v-if="item.types == 2">
						<view :style="`width: ${parseInt(item.message) * 10}px`">
							{{item.message}}”
							<image src="../../static/声音.png" mode="" style="transform: rotate(180deg);"></image>
						</view>
					</view>
					<image :src="item.imgUrl" mode=""></image>
				</view>
			</view>

			<view class="chat-input" ref="bottom">
				<view class="chat-input-top">
					<view class="voice">
						<image src="../../static/语音.png" mode="" @click="isUseVoice=!isUseVoice"></image>
					</view>

					<view class="inp">
						<!-- 输入框 -->
						<input type="text" v-model="chatInput" v-show="!isUseVoice" ref="content">
						<text v-show="isUseVoice" @touchstart.prevent="touchVoice" @mousedown="touchVoice"
							@touchend="touched" @mouseup="touched">按住&nbsp;说话</text>
					</view>

					<view class="express" @click="isShowEmoji=!isShowEmoji">
						<image src="../../static/表情.png" mode=""></image>
					</view>

					<view class="add" v-show="inputIsNull">
						<image src="../../static/添加.png" mode=""></image>
					</view>
					<view class="send" v-show="!inputIsNull" @click="sendMsg">
						<text>发送</text>
					</view>
				</view>

				<view class="chat-input-bottom" v-show="isShowEmoji">
					<Emoji @sendMsg='addContent' @click="addMsg" v-show="isShowEmoji"></Emoji>
					<!-- 					<view class="lists">
						<view class="list">
							<image src="../../static/视频@3x.png" mode=""></image>
						</view>
						<view class="list">
							<image src="../../static/相机@3x.png" mode=""></image>
						</view>
						<view class="list">
							<image src="../../static/语音@3x.png" mode=""></image>
						</view>
						<view class="list">
							<image src="../../static/语音@3x.png" mode=""></image>
						</view>
					</view> -->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Emoji from '../../components/emoji/emoji.vue'
	import datas from '../../commons/js/datas.js'

	export default {
		data() {
			return {
				uname: '不开心就好',
				// 聊天输入框内容
				chatInput: '',
				// 是否使用语音
				isUseVoice: false,
				// 是否展示表情页
				isShowEmoji: false,

				// 上次聊天的时间
				recentChatTime: 0,
				// 今天的时间是否输出
				todayTimeIsShow: false,

				// 语音计时器
				voiceTimer: null,
				// 聊天语音的时间
				voiceTime: 0,

				paddingBottom: 0,
				// 用户信息
				uid: '10000',
				uname: '开心就好',
				msgs: []
			}
		},
		watch: {
			isShowEmoji() {
				setTimeout(() => {
					this.init()
				})
			}
		},
		components: {
			Emoji
		},
		computed: {
			// 输入框是否为空
			inputIsNull() {
				return this.chatInput.length === 0
			}
		},
		methods: {
			init() {
				this.paddingBottom = this.$refs.bottom.$el.clientHeight
				// console.log(this.paddingBottom)
			},
			// 添加文本内容
			addMsg() {
				// 获取光标位置
				const input = this.$refs.content
				const startPos = input.value.slice(0, input.selectionStart).lastIndexOf('\n') + 1;
				const endPos = input.selectionStart;
				console.log(`光标开始位置: ${startPos}, 光标结束位置: ${endPos}`);
			},
			/**
			 * @param {Object} v: 要添加的值
			 */
			addContent(v) {
				// 添加内容
				this.chatInput += v
			},
			// 获取聊天数据
			getMsg() {
				let msg = datas.message();
				// 应该为最大数据（最新的聊天记录）
				let recentTime = 0;
				// 找出最近的聊天时间
				Promise.all(
					msg.map(async (item) => {
						recentTime = item.time > recentTime ? item.time : recentTime;
					})
				).then(_ => {
					this.recentChatTime = recentTime;
				}).then(_ => {
					Promise.all(
						msg.map(async (item) => {
							// 将时间戳格式化为时间字符串
							item.timeStr = this.formatTime(item.time);
						})
					).then(_ => {
						this.msgs = msg
					})
				})
			},
			/**
			 * @param {Object} time 传入10位时间戳
			 * 格式化时间
			 */
			formatTime(time) {
				// 判断该聊天记录时间和上个间隔是否大于 5 分钟，不大于返回空，不显示
				// 同时今日的时间已输出
				console.log('this.todayTimeIsShow', this.todayTimeIsShow)
				if (this.recentChatTime - time < 5 * 60 && this.todayTimeIsShow) return ''
				const date = new Date(time * 1000)
				let year = date.getFullYear()
				let month = date.getMonth() + 1
				let day = date.getDate()
				let hour = date.getHours()
				let min = date.getMinutes() >= 10 ? date.getMinutes() : '0' + String(date.getMinutes())
				let sec = date.getSeconds() >= 10 ? date.getSeconds() : '0' + String(date.getSeconds())

				// 判断是今天、昨天、前天
				const recent = new Date(this.recentChatTime * 1000).getDate()
				console.log(recent);
				if (day - recent == 1) {
					// 昨天
					return `昨天 ${hour}:${min}:${sec}`
				} else if (day - recent == 2) {
					return `前天 ${hour}:${min}:${sec}`
				} else if (day - recent == 0) {
					// 今天
					this.todayTimeIsShow = true
					return `${hour}:${min}:${sec}`
				} else {
					// 更早
					return `${year}年${month}月${day}日 ${hour}:${min}:${sec}`
				}
			},
			// 按住说话
			touchVoice() {
				console.log('按住说话');
				this.voiceTime = 0;
				this.voiceTimer = setInterval(() => {
					this.voiceTime++
					console.log('按住说话', this.voiceTime)
				}, 1000)
			},
			// 松开说话
			touched() {
				clearInterval(this.voiceTimer)
			},
			// 发送信息
			sendMsg() {
				const chat = {
					id: '10000',
					imgUrl: '../../static/tx.png',
					message: this.chatInput,
					types: 0,
					time: parseInt(new Date() / 1000),
					tip: 0
				}
				chat.timeStr = this.formatTime(chat.time)
				this.msgs.push(chat)

				this.chatInput = ''
				uni.showToast({
					icon: 'success',
					title: '发送成功'
				})
				this.$refs.content.$el.focus()
			}
		},
		onLoad() {},
		mounted() {
			this.init()
			this.getMsg()
		}
	}
</script>

<style lang="scss">
	@import "./css/style.scss";
</style>