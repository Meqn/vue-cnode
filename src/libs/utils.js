export const sessionStore = (...args) => {
	if(args.length === 1 && typeof args[0] === 'string') {
		return window.sessionStorage.getItem(args[0]);
	}
	if(args.length === 2) {
		window.sessionStorage.setItem(args[0], args[1]);
	}
}