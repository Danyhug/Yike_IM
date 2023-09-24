<template>
	<view class="content">
		<Header></Header>

		<view class="bg">
			<view class="mask"></view>
			<image src="../../static/lei.jpg" mode=""></image>
		</view>

		<view class="main">
			<image class="tx" src="../../static/lei.jpg" mode=""></image>
			<!-- 备注 -->
			<text class="note">雷雷雷表妹</text>
			<!-- 名称 -->
			<text class="name">昵称：雷大嘴</text>
			<!-- 签名 -->
			<text class="sign">夜，结束了一天的喧嚣后安静下来，伴随着远处路灯那微弱的光。风，毫无预兆地席卷整片旷野，撩动人的思绪万千。</text>
		</view>
		<button>加为好友</button>
	</view>
</template>

<script>
	import Header from '../../components/public-header/index.vue'
	export default {
		components: {
			Header
		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
	}

	.bg {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		z-index: -1;

		.mask {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(255, 255, 255, .4);
			z-index: 999;
		}

		image {
			width: inherit;
			height: inherit;
			filter: blur(20rpx);
		}
	}

	.main {
		padding: 100rpx;
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		line-height: 1.6;

		.tx {
			width: 400rpx;
			height: 400rpx;
			margin: auto;
			border: 4rpx solid #fff;
			border-radius: 56rpx;
		}

		.note {
			margin-top: 20rpx;
			font-size: 30rpx;
		}

		.name {
			font-size: 20rpx;
		}

		.sign {
			margin-top: 20rpx;
			font-size: 18rpx;
			color: #272832;
			text-align: left;
		}
	}

	button {
		position: absolute;
		left: 50%;
		bottom: 60rpx;
		transform: translateX(-50%);
		width: 80%;
		font-size: $uni-font-size-base;
		background-color: $uni-color-primary;
	}
</style>