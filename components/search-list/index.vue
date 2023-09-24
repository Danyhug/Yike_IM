<template>
	<view class="list">
		<image src="../../static/tx.png" mode=""></image>
		<text class="name" v-html="newName"></text>
		<view v-if="isFriend" class="send-msg-btn">发消息</view>
		<view v-else class="add-user-btn">加好友</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: '我就爱吃大力',
				searchText: '力'
			}
		},
		computed: {
			newName() {
				return this.name.replace(this.searchText,
					`<span style="color:rgb(87, 153, 255)">${this.searchText}</span>`)
			}
		},
		props: {
			isFriend: {
				type: Boolean,
				require: true
			}
		}
	}
</script>

<style scoped lang="scss">
	.list {
		margin: 30rpx 0;
		height: 80rpx;
		display: flex;
		align-items: center;

		image {
			height: inherit;
			width: 80rpx;
			border-radius: $uni-border-radius-lg;
		}

		text {
			flex: 1;
			margin: 32rpx;
		}

		view {
			width: 130rpx;
			text-align: center;
			line-height: 58rpx;
			font-size: $uni-font-size-sm;
			border-radius: 48rpx;
		}

		.send-msg-btn {
			color: $uni-text-color;
			background-color: #FFE431;
		}

		.add-user-btn {
			color: #4AAAFF;
			background-color: rgb(252,235,134);
		}
	}
</style>