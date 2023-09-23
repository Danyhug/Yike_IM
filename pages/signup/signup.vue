<template>	
	<view class="content">
		<view class="header">
			<text class="close">×</text>
			<text class="register">注册</text>
		</view>
		
		<view class="logo">
			<image src="../../static/fire.png" mode=""></image>
		</view>

		<view class="main">
			<text class="h1">登录</text>
			<text class="tip">您好，欢迎来到 yike !</text>
			<view class="form">
				<input type="text" placeholder="请输入用户名">
				<input type="password" placeholder="请输入密码">
			</view>

			<button>登录</button>
		</view>
	</view>
</template>

<script>
</script>

<style scoped lang="scss">
	.content {
		padding: 0rpx 62rpx;
	}
	
	.header {
		display: flex;
		justify-content: space-between;
		font-weight: 700;
		height: 44px;
		line-height: 44px;
	}

	.logo {
		width: 192rpx;
		height: 92rpx;
		margin: 60rpx auto;

		image {
			width: 100%;
			height: 100%;
			margin: 60rpx auto;
		}
	}

	.main {
		.h1 {
			font-size: 24px;
		}

		.tip {
			margin: 26rpx 0;
			display: block;
			font-size: $uni-font-size-base;
			color: $uni-text-color-grey;
		}

		.form {
			margin: 38rpx 0;

			input {
				margin-top: 44rpx;
				height: 44px;
				border-bottom: 1rpx solid $uni-border-color;
				font-size: $uni-font-size-lg;
			}
		}
		
		button {
			width: 80%;
			margin-top: 50px;
			background-color: $uni-color-primary;
			border-radius: 48rpx;
			box-shadow: 0 3px 10px 0px $uni-color-primary;
			font-size: 18px;
		}
	}
</style>