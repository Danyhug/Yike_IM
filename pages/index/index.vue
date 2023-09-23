<template>
	<view class="content">
		<view class="header">
			<view class="header-left">
				<image src="../../static/tx.png" mode=""></image>
			</view>
			<view class="header-center">
				<image src="../../static/fire.png" mode=""></image>
			</view>
			<view class="header-right">
				<image src="../../static/search.png" mode=""></image>
				<image src="../../static/add group.png" mode=""></image>
			</view>
		</view>

		<view class="main">
			<view class="friends">
				<friendList v-for="index of 10"></friendList>
			</view>
		</view>
	</view>
</template>

<script>
	import friendList from '../../components/friend-list/index.vue'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		},
		components: {
			friendList
		}
	}
</script>

<style lang="scss" scoped>
	.header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		padding: 0rpx 32rpx;
		height: 108rpx;
		margin-bottom: 132rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 2rpx solid $uni-border-color;
		background-color: #fff;
		z-index: 999;

		.header-left {
			flex: 1;

			image {
				width: 68rpx;
				height: 68rpx;
				border-radius: $uni-border-radius-sm;
			}
		}

		.header-center {
			image {
				width: 88rpx;
				height: 42rpx;
			}
		}

		.header-right {
			flex: 1;
			display: flex;
			justify-content: flex-end;
			position: relative;

			image {
				width: 50rpx;
				height: 50rpx;
				margin-left: 32rpx;
			}
		}
	}

	.main {
		padding: 8rpx 32rpx;

		.friends {}
	}
</style>