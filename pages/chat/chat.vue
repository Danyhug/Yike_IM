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

				image {
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
	}
</style>