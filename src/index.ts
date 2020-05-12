export function frenchify(string: string) {
	return string
		.replace(/ ([:?!;])/g, '\u202f$1')
		.replace(/(\w)([:?!;])/g, '$1\u202f$2')
		.replace(/" ?(.+?) ?"/g, '«\u202f$1\u202f»')
		.replace(/(\w) ?\/ ?(\w)/g, '$1\u202f/\u202f$2')
		.replace(/ ?' ?/g, "'")
		.replace(/([\(\[]) ?(.+?) ?([\)\]])/g, '$1$2$3')
		.replace(/\.\.\./g, '…');
}
