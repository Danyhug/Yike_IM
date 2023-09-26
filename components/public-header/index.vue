<template>
	<view class="header">
		<text class="close">←</text>
		<slot></slot>
		<text class="register" style="font-weight: bold;">···</text>
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
		font-size: 36rpx;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		font-size: $uni-font-size-base;
		padding: 0 32rpx;
		display: flex;
		justify-content: space-between;
		line-height: 100rpx;
		background-color: #fff;
		z-index: 999;
	}
</style>