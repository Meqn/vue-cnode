<template>
<div>
	<div v-if="$store.state.docs.loading.show" class="tac"><div class="loading"></div> <span class="mdui-text-color-grey-500" v-text="$store.state.docs.loading.text"></span></div>
	<div v-if="!$store.state.docs.loading.show">
		<div class="empty"><span class="line"></span><span class="text" v-text="$store.state.docs.loading.tip"></span><span class="line"></span></div>
	</div>
</div>
</template>

<style lang="scss" scoped>
.loading{
	display: inline-block; position: relative;
	box-sizing: border-box;
	width: 24px; height: 24px;
	border: 3px solid #2196f3;
	vertical-align: middle;
	border-radius: 50%;
	animation: rotate .9s linear infinite;

	&::after{
		content: ""; display: block;
		position: absolute; top: 5px; right: -3px;
		width: 8px; height: 8px;
		background-color: #FFF;
		box-shadow: 0 0 5px 2px rgb(255,255,255)
	}
}

@keyframes rotate{
	to{
		transform: rotate(360deg);
	}
}

.empty{
	display: flex;
	margin: 0 8px;
	flex-flow: row nowrap;
	align-items: center;

	.line{
		flex: 1 1;
		height: 1px;
		font-size: 0; line-height: 0;
		background-color: rgba(0, 0, 0, .12);
	}
	.text{
		margin: 0 8px;
		color: #9e9e9e;
	}
}
</style>