<template>
	<view class="friend-list">
		<view class="list-left">
			<image src="../../static/tx.png" mode="" class="tx"></image>
			<view class="num">2</view>
		</view>
		<view class="list-right">
			<text class="name">好友请求</text>
			<text class="content">原神，启动！</text>
			<text class="time">上午7:45</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: 'friendList'
			}
		}
	}
</script>

<style scoped lang="scss">
	.friend-list {
		display: flex;
		margin-bottom: 44rpx;
		padding: 10rpx 0;
		
		&:active {
			background-color: $uni-bg-color-grey;
		}

		.list-left {
			position: relative;
			display: flex;
			align-items: center;

			.tx {
				width: 96rpx;
				height: 96rpx;
				border-radius: $uni-border-radius-lg;
			}

			.num {
				position: absolute;
				top: 0;
				right: 0;
				height: 36rpx;
				min-width: 36rpx;
				line-height: 36rpx;
				font-size: $uni-font-size-sm;
				text-align: center;
				transform: translate(30%, -46%);
				color: #fff;
				background-color: $uni-color-error;
				border-radius: $uni-border-radius-circle;
			}
		}

		.list-right {
			flex: 1;
			position: relative;
			margin-left: 32rpx;
			
			text {
				display: block;
			}

			.name {
				font-size: 1.1rem;
			}

			.content {
				line-height: 1.55rem;
				font-size: .9rem;
			}

			.time {
				position: absolute;
				top: 0;
				right: 0rpx;
				color: $uni-text-color-grey;
				font-size: $uni-font-size-paragraph;
			}
		}
	}
</style>