<template>
	<view class="content">
		<view class="header">
			<text class="close" @click="goLogin">←</text>
			<text class="register">×</text>
		</view>

		<view class="logo">
			<image src="../../static/fire.png" mode=""></image>
		</view>

		<view class="main">
			<text class="h1">注册</text>
			<text class="tip">您好，欢迎来到 yike !</text>
			<view class="form">
				<view>
					<input type="text" placeholder="请输入用户名" v-model="username">
					<text class="tip" v-show="validUser">用户名已有</text>
				</view>
				<view>
					<input type="email" placeholder="请输入邮箱" v-model="email">
					<text class="state" v-show="validEmail">✔</text>
				</view>
				<view>
					<input type="password" v-if="!isPassShow" placeholder="请输入密码" v-model="password">
					<input type="text" v-else placeholder="请输入密码" v-model="password">
					<text class="eye" @click="isPassShow=!isPassShow">👀</text>
				</view>
			</view>

			<button>注册</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: '',
				email: '',
				password: '',
				isPassShow: false
			}
		},
		computed: {
			validUser() {
				return false
			},
			validEmail() {
				const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
				return regex.test(this.email);
			},
			goLogin() {
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.content {
		padding: 0rpx 62rpx;
	}

	.header {
		display: flex;
		justify-content: space-between;
		font-weight: 700;
		height: 88rpx;
		line-height: 88rpx;
		font-size: 50rpx;
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
			font-size: 40rpx;
		}

		.tip {
			margin: 26rpx 0;
			display: block;
			font-size: $uni-font-size-base;
			color: $uni-text-color-grey;
		}

		.form {
			margin: 38rpx 0;

			view {
				position: relative;

				text {
					position: absolute;
					top: 0;
					right: 0;
					vertical-align: middle;
				}

				.tip {
					color: $uni-color-error;
				}

				.state {
					color: rgb(80, 171, 253);
					margin-top: 20rpx;
				}

				.eye {
					margin-top: 20rpx;
					transform: scale(.9);
					transition: all .2s;

					&:active {
						transform: scale(1.2);
					}
				}
			}

			input {
				margin-top: 44rpx;
				height: 88rpx;
				border-bottom: 1rpx solid $uni-border-color;
				font-size: $uni-font-size-lg;
			}
		}

		button {
			width: 80%;
			margin-top: 100rpx;
			border-radius: 48rpx;
			font-size: 36rpx;
			color: #fff;
			background-color: $uni-text-color-disable;
			box-shadow: 0 6rpx 20rpx 0rpx $uni-text-color-disable;

			&:active {
				background-color: $uni-color-primary;
				box-shadow: 0 6rpx 20rpx 0rpx $uni-color-primary;
				color: $uni-text-color;
			}
		}
	}
</style>