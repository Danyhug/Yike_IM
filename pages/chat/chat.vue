<template>
	<view class="content">
		<Header>{{uname}}</Header>
		<view class="main">
			<view class="chat-lists">
				<!-- 时间标记 -->
				<view class="date-mark">11月14日 14:23</view>

				<!-- 对方说话 -->
				<view class="chat-list list-you" v-for="item in 3">
					<image src="../../static/lei.jpg" mode=""></image>
					<view class="list-content">遥遥领先</view>
				</view>

				<!-- 我说话 -->
				<view class="chat-list list-me" v-for="item in 3">
					<view class="list-content">遥遥领先遥遥领先遥遥领先遥遥领先遥遥领先遥遥领先遥遥领先遥遥领先遥遥领先遥遥领先遥遥领先遥遥领先遥遥领先遥遥领先遥遥领先遥遥领先遥遥领先
					</view>
					<image src="../../static/tx.png" mode=""></image>
				</view>

				<!-- 对方说话 -->
				<view class="chat-list list-you">
					<image src="../../static/lei.jpg" mode=""></image>
					<view class="list-content list-content-image">
						<image src="../../static/lei.jpg" mode=""></image>
					</view>
				</view>
			</view>

			<view class="chat-input">
				<view class="chat-input-top">
					<view class="voice">
						<image src="../../static/语音.png" mode="" @click="isUseVoice=!isUseVoice"></image>
					</view>

					<view class="inp">
						<input type="text" v-model="chatInput" v-show="!isUseVoice" ref="content">
						<text v-show="isUseVoice">按住&nbsp;说话</text>
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

	export default {
		data() {
			return {
				uname: '开心就好',
				// 聊天输入框内容
				chatInput: '',
				// 是否使用语音
				isUseVoice: false,
				// 是否展示表情页
				isShowEmoji: false,
				// 用户信息
				uid: null,
				uname: '',
				msgs: []
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
			// 解析用户的信息
			resolveUserInfo() {

			}
		},
		mounted() {
			this.resolveUserInfo()
		}
	}
</script>

<style lang="scss">
	@import "./css/style.scss";
</style>