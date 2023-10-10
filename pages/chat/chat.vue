<template>
	<view class="content">
		<Header>{{uname}}</Header>
		<view class="main" :style="`padding-bottom:${paddingBottom}px`">
			<view class="chat-lists" v-for="(item, index) in msgs" :key="item.index">
				<!-- 时间标记 11月14日 14:23-->
				<view class="date-mark">{{formatTime(item.time)}}</view>

				<!-- 对方说话 -->
				<view class="chat-list list-you" v-if="item.id != uid">
					<image :src="item.imgUrl" mode=""></image>
					<view class="list-content" v-if="item.types == 0">
						{{item.message}}
					</view>
					<view class="list-content list-content-image" v-if="item.types == 1">
						<image :src="item.message" mode=""></image>
					</view>
				</view>

				<!-- 我说话 -->
				<view class="chat-list list-me" v-else>
					<view class="list-content" v-if="item.types == 0">
						{{item.message}}
					</view>
					<view class="list-content list-content-image" v-if="item.types == 1">
						<image :src="item.message" mode=""></image>
					</view>
					<view class="list-content list-content-voice" v-if="item.types == 2">
						<view>
							{{item.message}}”
							<image src="../../static/声音.png" mode=""></image>
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
						<input type="text" v-model="chatInput" v-show="!isUseVoice" ref="content">
						<text v-show="isUseVoice" @touchstart.prevent="touchVoice" @touchend="touched">按住&nbsp;说话</text>
					</view>

					<view class="express" @click="isShowEmoji=!isShowEmoji">
						<image src="../../static/表情.png" mode=""></image>
					</view>

					<view class="add" v-show="inputIsNull">
						<image src="../../static/添加.png" mode=""></image>
					</view>
					<view class="send" v-show="!inputIsNull">
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
				oldTime: new Date().getTime(),
				// 语音
				voice: null,
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
				console.log(this.paddingBottom)
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
				let msg = datas.message()
				this.msgs = msg
			},
			/**
			 * @param {Object} time 传入10位时间戳
			 * 格式化时间
			 */
			formatTime(time) {
				// 判断该聊天记录时间和上个间隔是否大于 5 分钟，不大于返回空，不显示
				// if (time - this.oldTime < 5 * 60) return ''
				const date = new Date(time * 1000)
				let year = date.getFullYear() + 1
				let month = date.getMonth()
				let day = date.getDate()
				let hour = date.getHours()
				let min = date.getMinutes() >= 10 ? date.getMinutes() : '0' + String(date.getMinutes())
				let sec = date.getSeconds() >= 10 ? date.getSeconds() : '0' + String(date.getSeconds())

				// 判断是今天、昨天、前天
				const oldDay = new Date(this.oldTime).getDate()
				if (day - oldDay == 1) {
					// 昨天
					return `昨天 ${hour}:${min}:${sec}`
				} else if (day - oldDay == 2) {
					return `前天 ${hour}:${min}:${sec}`
				} else if (day - oldDay == 0) {
					// 今天
					return `${hour}:${min}:${sec}`
				} else {
					// 更早
					return `${year}年${month}月${day}日 ${hour}:${min}:${sec}`
				}
			},
			// 按住说话
			touchVoice() {
				let sec = 0
				this.voice = setInterval(() => {
					sec++
					console.log('按住说话', sec)
				}, 1000)
			},
			// 松开说话
			touched() {
				clearInterval(this.voice)
			}
		},
		onLoad() {
			this.getMsg()
		},
		mounted() {
			this.init()
		}
	}
</script>

<style lang="scss">
	@import "./css/style.scss";
</style>