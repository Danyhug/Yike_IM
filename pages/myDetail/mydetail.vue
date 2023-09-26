<template>
	<view class="content">
		<Header>详细</Header>

		<view class="main">
			<view class="lists">
				<view>
					<text class="title">头像</text>
					<image src="../../static/lei.jpg" mode=""></image>
					<text class="right">&gt;</text>
				</view>
				<view>
					<text class="title">签名</text>
					<text class="sign">我们原神玩家是这样的</text>
					<text class="right">&gt;</text>
				</view>
				<view>
					<text class="title">注册</text>
					<text class="sign">1937-12-12 12:12:12</text>
				</view>
				<view class="hr"></view>
				<view>
					<text class="title">昵称</text>
					<text class="sign">雷雷雷表妹</text>
					<text class="right">&gt;</text>
				</view>
				<view>
					<text class="title">性别</text>
					<text class="sign">沃尔玛购物袋</text>
					<text class="right">&gt;</text>
				</view>
				<view class="hr"></view>
				<view>
					<text class="title">密码</text>
					<input type="password" v-model="password">
					<text class="right">&gt;</text>
				</view>
				<view class="hr"></view>
			</view>
		</view>

		<view class="exit">退出应用</view>
	</view>
</template>

<script>
	import Header from '../../components/public-header/index.vue'
	export default {
		data() {
			return {
				password: 'woaicaixvkun'
			}
		},
		components: {
			Header
		}
	}
</script>

<style lang="scss">
	.main {
		padding-top: 80rpx;

		.lists {
			display: flex;
			flex-direction: column;
			font-size: $uni-font-size-base;

			&>view {
				position: relative;
				display: flex;
				align-items: center;
				padding: 0 32rpx;
				margin-bottom: 30rpx;
				color: $uni-text-color-grey;

				image {
					width: 108rpx;
					height: 108rpx;
					border-radius: 16rpx;
				}

				.title {
					width: 3.4em;
					color: #333;
				}

				.right {
					position: absolute;
					top: 40%;
					right: 32rpx;
				}
			}

			.hr {
				height: 1rpx;
				background-color: $uni-border-color;
			}
		}
	}

	.exit {
		margin-top: 80rpx;
		text-align: center;
		font-size: $uni-font-size-lg;
		color: $uni-color-error;
		cursor: pointer;
	}
</style>