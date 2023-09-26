<template>
	<!-- 好友请求页面 -->
	<div class="content">
		<Header>好友请求</Header>

		<view class="main">
			<view class="main-list" v-for="item in 3">
				<view class="main-header">
					<button class="refuse">拒绝</button>
					<image src="../../static/lei.jpg" mode=""></image>
					<button class="agree">同意</button>
				</view>

				<view class="main-text">
					<text class="title">雷雷雷表妹</text>
					<text class="time">2020-05-01</text>
				</view>

				<!-- 留言 -->
				<view class="leave-message">
					留言：{{message}}
				</view>
			</view>

		</view>
	</div>
</template>

<script>
	import Header from '../../components/public-header/index.vue';
	export default {
		data() {
			return {
				message: '你好，想请求加为好友，谢谢你的通过 ^_^'
			}
		},
		components: {
			Header
		}
	}
</script>

<style lang="scss">
	.content {
		padding: 0 32rpx;
		margin-top: 200rpx;
	}

	.main-list {
		border: 2rpx solid #eee;
		box-shadow: 0 10rpx 30rpx 0 #ddd;
		margin: 90rpx 0 160rpx 0;
		border-radius: $uni-border-radius-lg;
		padding-bottom: 50rpx;
				
		.main-header {
			margin-top: -90rpx;
			display: flex;
			justify-content: space-between;
			align-items: flex-end;

			image {
				position: relative;
				width: 180rpx;
				height: 180rpx;
				border-radius: $uni-border-radius-circle;
			}

			button {
				width: 180rpx;
				height: 75rpx;
				line-height: 75rpx;
				background-color: red;
				border-radius: 48rpx;
			}

			.refuse {
				color: rgb(218, 109, 105);
				background-color: rgb(251, 231, 227);
			}

			.agree {
				background-color: $uni-color-primary;
			}
		}

		.main-text {
			margin: 40rpx 0;
			text-align: center;

			.title {
				display: block;
				font-size: 40rpx;
				font-weight: bold;
			}

			.time {
				color: $uni-text-color-grey;
				font-size: $uni-font-size-base;
			}
		}

		.leave-message {
			width: 90%;
			margin: auto;
			padding: 30rpx;
			line-height: 1.6;
			background-color: rgb(240, 242, 244);
			border-radius: 26rpx;
		}
	}
</style>