<template>
<div class="toast">
	<div class="toast-content">
		<div class="toast-icon">
			<!-- done close remove_circle_outline priority_high do_not_disturb_on -->
			<i v-if="$store.state.docs.toast.type === 'done'" class="mdui-icon material-icons">done</i>
			<i v-if="$store.state.docs.toast.type === 'fail'" class="mdui-icon material-icons">close</i>
			<div v-if="$store.state.docs.toast.type === 'loading'" class="toast-loading"><i></i></div>
		</div>
		<div class="toast-text" v-text="$store.state.docs.toast.text"></div>
	</div>
</div>
</template>

<style lang="scss" scoped>
.toast{
	position: fixed; top: 0; right: 0; bottom: 0; left: 0; z-index: 1000;
	width: 100%;

	&-content{
		position: absolute; top: 50%; left: 50%;
		transform: translate3d(-50%, -50%, 0);
		box-sizing: border-box;
		width: 100px; height: 100px;
		padding-top: 20px;
		color: #fff;
		background: rgba(17, 17, 17, .5);
		border-radius: 8px;

		text-align: center;
	}
	&-text{
		font-size: 12px;
	}
	&-icon{
		width: 42px; height: 42px;
		margin: 0 auto;
		overflow: hidden;

		> .mdui-icon{
			font-size: 36px;
		}
	}
	&-loading{
		transform: scale(0.5);
		transform-origin: 0 0;
		position: relative;
		box-sizing: border-box;
		width: 70px; height: 70px;
		margin: 0 auto;
		border: 3px solid #fff; border-radius: 50%;

		&::before,&::after{
			content: ""; display: block;
			position: absolute; top: 50%; left: 50%; margin-top: -2px;
			height: 4px;
			font-size: 0;
			background-color: #fff;
			transform-origin: 0 50%;
			border-radius: 2px;
		}
		&::before{
			width: 26px;
			animation: rotate 1s linear infinite;
		}
		&::after{
			width: 20px;
			animation: rotate 12s linear infinite;
		}
		i{
			position: absolute; top: 50%; left: 50%;
			margin: -3px 0 0 -3px;
			width: 6px; height: 6px;
			font-size: 0;
			border-radius: 50%;
			background-color: #fff;
		}
	}
}

@keyframes rotate{
	to{
		transform: rotate(360deg);
	}
}
</style>