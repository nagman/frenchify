export function frenchify(string: string) {
	return string
		.replace(/ ([:?!;])/g, '\u202f$1')
		.replace(/"(.+?)"/g, '«\u202f$1\u202f»')
		.replace(/(\w)\/(\w)/g, '$1\u202f/\u202f$2')
		.replace(/ \/ /g, '\u202f/\u202f')
		.replace(/ ?' ?/g, "'")
		.replace(/\( /g, '(')
		.replace(/ \)/g, ')')
		.replace(/\[ /g, '[')
		.replace(/ \]/g, ']')
		.replace(/\.\.\./g, '…');
}
