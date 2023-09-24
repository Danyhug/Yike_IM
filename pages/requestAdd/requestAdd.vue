<template>
	<!-- 好友请求 -->
	<view class="content">
		<Header></Header>
		
		<view class="bg"></view>
		
		<view class="main">
			<image src="../../static/lei.jpg" mode=""></image>
		</view>
	</view>
</template>

<script>
	import Header from '../../components/public-header/index.vue'
	export default {
		data() {
			return {}
		},
		components: {
			Header
		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		height: 100vh;
		flex-direction: column;
	}
	.bg {
		padding-top: 120rpx;
		height: 260rpx;
		background-color: rgba(234, 214, 105, .86);
	}
	
	.main {
		padding: 0 40rpx;
		margin-top: -60rpx;
		flex: 1;
		background-color: #fff;
		border-radius: 36rpx;
		
		image {
			margin-top: -50%;
			transform: translateY(50%);
			width: 240rpx;
			height: 240rpx;
			border: 6rpx solid #fff;
			border-radius: 50%;
		}
	}
</style>