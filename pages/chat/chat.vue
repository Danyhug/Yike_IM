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
					<view class="list-content">遥遥领先</view>
					<image src="../../static/tx.png" mode=""></image>
				</view>

				<!-- 对方说话 -->
				<view class="chat-list list-you">
					<image src="../../static/lei.jpg" mode=""></image>
					<view class="list-content">
						你看我帅吗
						<image src="../../static/lei.jpg" mode=""></image>
					</view>
				</view>
			</view>

			<view class="chat-input">
				<image src="../../static/语音.png" mode="" class="voice"></image>
				<input type="text">
				<image src="../../static/表情.png" mode="" class="express"></image>
				<image src="../../static/添加.png" mode="" class="add"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				uname: '开心就好'
			}
		},
	}
</script>


<style lang="scss">
	.content {
		padding: 0 32rpx;
		min-height: 100vh;
		background-color: rgb(245, 245, 245);
	}

	.main {
		margin-top: 100rpx;

		.chat-lists {
			display: flex;
			flex-direction: column;

			.date-mark {
				text-align: center;
				color: $uni-text-color-grey;
				margin: 36rpx 0;
			}


			.chat-list {
				display: flex;
				align-items: flex-start;
				margin-bottom: 36rpx;

				&>image {
					width: 80rpx;
					height: 80rpx;
					border-radius: 12rpx;
				}

				.list-content {
					min-height: 66rpx;
					padding: 12rpx 20rpx;
					background-color: #fff;
					border-radius: $uni-border-radius-base;
					border-top-left-radius: 0;
					font-size: 20rpx;

					&>image {
						margin: 0 20rpx;
						vertical-align: text-top;
						max-height: 320rpx;
					}
				}

				&.list-you {
					align-self: flex-start;
					padding-right: 160rpx;

					.list-content {
						margin-left: 18rpx;
					}
				}

				&.list-me {
					align-self: flex-end;
					padding-left: 160rpx;

					.list-content {
						margin-right: 18rpx;
						background-color: $uni-color-primary;
					}
				}
			}
		}

		.chat-input {
			padding: 0 32rpx;
			height: 120rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			position: fixed;
			left: 0;
			bottom: 0;
			width: 100%;
			background-color: rgb(245, 245, 245);

			>* {
				margin-right: 22rpx;
			}

			.add {
				margin-right: 0;
			}

			input {
				padding: 0 22rpx;
				flex: 1;
				background-color: #fff;
				border-radius: $uni-border-radius-base;
				height: 72rpx;
				font-size: $uni-font-size-base;
				line-height: 72rpx;
			}

			image {
				width: 56rpx;
				height: 56rpx;
			}
		}
	}
</style>