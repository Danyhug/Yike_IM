<template>
	<view class="emj-content">
		<view class="emj-lists">
			<view class="emj-list" v-for="item of emojiList" @click="sendFather(item)">{{item}}</view>
			<view class="emj-list" style="flex: 1;"></view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Emoji',
		data() {
			return {
				emojiList: [
					'😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊', '😋', '😎', '😍', '😘', '😗', '😙',
					'😚', '☺️', '🙂', '🤗', '🤔', '😐', '😑', '😶', '🙄', '😏', '😣', '😥', '😮', '🤐', '😯', '😪',
					'😫', '😴', '😌', '😛', '😜', '😝', '🤤', '😒', '😓', '😔', '😕', '🙃', '🤑', '😲', '☹', '🙁',
					'😖', '😞', '😟', '😤', '😢', '😭', '😦', '😧', '😨', '😩', '😬', '😰', '😱', '😳', '😵', '😡',
					'😠', '😷', '🤒', '🤕', '🤢', '🤧', '😇', '🤠', '🤡', '🤥', '🤓', '😈', '👿', '👹', '👺', '💀',
					'👻', '👽', '🤖', '💩', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾', '🏻', '🏼', '🏽',
					'🏾', '🏿', '🗣', '👤', '👥', '👫', '👬', '👭', '👂', '👂🏻', '👂🏼', '👂🏽', '👂🏾', '👂🏿', '👃',
					'👃🏻', '👃🏼', '👃🏽', '👃🏾', '👃🏿', '👣', '👀', '👁', '👅', '👄', '💋', '👓', '🕶', '👔', '👕',
					'👖', '👗', '👘', '👙', '👚', '👛', '👜', '👝', '🎒', '👞', '👟', '👠', '👡', '👢', '👑', '👒',
					'🎩', '🎓', '⛑', '💄', '💍', '🌂', '💼'
				]
			}
		},
		methods: {
			sendFather(v) {
				// 为输入文本添加表情
				this.$emit('sendMsg', v)
			}
		}
	}
</script>

<style lang="scss">
	.emj-content {
		height: inherit;

		.emj-lists {
			font-size: 66rpx;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			height: inherit;
			overflow-y: auto;

			.emj-list {
				padding: 16rpx;
			}
		}
	}
</style>