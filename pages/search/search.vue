<template>
	<view class="content">
		<view class="header">
			<view>
				<input type="text">
				<image src="../../static/search.png" mode=""></image>
			</view>
			<text>取消</text>
		</view>

		<view class="users">
			<text class="title">用户</text>
			<view class="user-lists">
				<searchList v-for="item in 10" :isFriend="item % 3 == 0"></searchList>
			</view>
		</view>
		
		<view class="groups">
			<text class="title">群组</text>
			<view class="user-lists">
				<searchList v-for="item in 3" :isFriend="item % 2 == 0"></searchList>
			</view>
		</view>
	</view>
</template>

<script>
	import searchList from '../../components/search-list/index.vue'
	export default {
		data() {
			return {
				// name: 'searchList'
			}
		},
		components: {
			searchList
		}
	}
</script>

<style lang="scss">
	.content {}

	.header {
		font-size: $uni-font-size-base;
		padding: 14rpx 32rpx;
		padding-right: 0;
		display: flex;
		line-height: 60rpx;
		box-shadow: 0 0 6rpx 0rpx $uni-border-color;

		view {
			width: 82%;
			position: relative;

			input {
				padding: 0 60rpx 0 20rpx;
				height: 60rpx;
				background-color: rgb(243, 244, 246);
				border-radius: $uni-border-radius-base;
			}

			image {
				position: absolute;
				top: 12rpx;
				right: 16rpx;
				width: 40rpx;
				height: 40rpx;
			}
		}

		text {
			flex: 1;
			text-align: center;
		}
	}

	.users, .groups {
		padding: 14rpx 32rpx;

		.title {
			display: block;
			font-size: 44rpx;
			margin: 30rpx 0;
		}

		.user-lists {

		}

	}
</style>