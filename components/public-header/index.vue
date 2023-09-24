<template>
	<view class="header">
		<text class="close">←</text>
		<text class="register">···</text>
	</view>
</template>

<script>
	export default {
		name: 'Header',
		data() {
			return {
			}
		}
	}
</script>

<style>
	.header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		font-size: $uni-font-size-base;
		padding: 0 32rpx;
		display: flex;
		justify-content: space-between;
		line-height: 60rpx;
		font-weight: bold;
	}
</style>