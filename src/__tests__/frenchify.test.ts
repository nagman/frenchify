import { frenchify } from '../index';

test('Thin spaces', () => {
	expect(frenchify(`Test: foo`)).toBe('Test : foo');
	expect(frenchify(`Test : foo`)).toBe('Test : foo');

	expect(frenchify(`Test!`)).toBe('Test !');
	expect(frenchify(`Test !`)).toBe('Test !');

	expect(frenchify(`Test?`)).toBe('Test ?');
	expect(frenchify(`Test ?`)).toBe('Test ?');

	expect(frenchify(`Test; foo`)).toBe('Test ; foo');
	expect(frenchify(`Test ; foo`)).toBe('Test ; foo');
});

test('French quotes', () => {
	const expected = 'Test « foo » and « bar » and « croissant »';

	expect(frenchify(`Test "foo" and "bar" and "croissant"`)).toBe(expected);
	expect(frenchify(`Test " foo " and " bar" and "croissant "`)).toBe(expected);
});

test('Slashes', () => {
	const expected = `foo / bar`;

	expect(frenchify(`foo / bar`)).toBe(expected);
	expect(frenchify(`foo/ bar`)).toBe(expected);
	expect(frenchify(`foo /bar`)).toBe(expected);
	expect(frenchify(`foo/bar`)).toBe(expected);
});

test('Apostrophes', () => {
	expect(frenchify(`L'amour`)).toBe(`L'amour`);
	expect(frenchify(`L 'amour`)).toBe(`L'amour`);
	expect(frenchify(`L' amour`)).toBe(`L'amour`);
	expect(frenchify(`L ' amour`)).toBe(`L'amour`);
});

test('Brackets', () => {
	const expected = `Le (gras) [c'est] (la) [vie]`;

	expect(frenchify(`Le (gras) [c'est] (la) [vie]`)).toBe(expected);
	expect(frenchify(`Le ( gras) [c'est ] ( la) [ vie]`)).toBe(expected);
	expect(frenchify(`Le ( gras ) [ c'est ] ( la ) [ vie ]`)).toBe(expected);
	expect(frenchify(`Le (gras ) [c'est ] (la ) [vie ]`)).toBe(expected);
});

test('Ellipsis', () => {
	expect(frenchify(`À quoi bon...`)).toBe(`À quoi bon…`);
});
