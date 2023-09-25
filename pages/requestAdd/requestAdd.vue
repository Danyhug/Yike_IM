<template>
	<!-- 好友请求 -->
	<view class="content">
		<Header></Header>

		<view class="bg"></view>

		<view class="main">
			<image src="../../static/lei.jpg" mode=""></image>
			<view class="text-content">
				<text class="name">{{name}}</text>
				<textarea :placeholder="content" />
			</view>
			<view class="btn-content">
				<button class="cancel">取消</button>
				<button class="send">发送</button>
			</view>
		</view>
	</view>
</template>

<script>
	import Header from '../../components/public-header/index.vue'
	export default {
		data() {
			return {
				name: '雷雷雷表妹',
				content: '亲爱的，你慢慢飞~'
			}
		},
		components: {
			Header
		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		height: 100vh;
		flex-direction: column;
	}

	.bg {
		padding-top: 120rpx;
		height: 260rpx;
		background-color: rgba(234, 214, 105, .86);
	}

	.main {
		display: flex;
		flex-direction: column;
		padding: 0 40rpx;
		margin-top: -30rpx;
		flex: 1;
		background-color: #fff;
		border-radius: 36rpx;

		image {
			// margin-top: -50%;
			transform: translateY(-50%);
			width: 240rpx;
			height: 240rpx;
			border: 6rpx solid #fff;
			border-radius: 50%;
			box-shadow: 0 2rpx 40rpx 0 #ccc;
		}

		.text-content {
			flex: 1;
			display: flex;
			flex-direction: column;
			position: relative;
			top: -90rpx;

			.name {
				font-size: 40rpx;
				margin-bottom: 40rpx;
			}

			textarea {
				width: 100%;
				padding: 30rpx;
				flex: 1;
				height: 400rpx;
				background-color: rgb(243, 244, 246);
				border-radius: 24rpx;
			}

			.uni-input-placeholder {
				position: relative;
			}
		}

		.btn-content {
			margin-bottom: 60rpx;
			display: flex;
			justify-content: space-between;

			button {
				margin: 0;
				line-height: 90rpx;
				font-size: $uni-font-size-base;
			}

			.cancel {
				width: 30%;
				background-color: rgb(233, 233, 234);
			}

			.send {
				width: 64%;
				background-color: $uni-color-primary;
			}
		}


	}
</style>