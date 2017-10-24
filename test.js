'use strict';
require('chai/register-assert');

const linkify = require('.');

describe('linkify()', () => {
    it('should replace urls with http', () => {
        const text = [
            'http://ru.wikipedia.org/wiki/Lorem_ipsum',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
            'http://ru.wikipedia.org/wiki/Lorem_ipsum',
            'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'http://ru.wikipedia.org/wiki/Lorem_ipsum',
        ].join(' ');

        const res = linkify(text);


        const expected = [
            '<a href="http://ru.wikipedia.org/wiki/Lorem_ipsum">http://ru.wikipedia.org/wiki/Lorem_ipsum</a>',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
            '<a href="http://ru.wikipedia.org/wiki/Lorem_ipsum">http://ru.wikipedia.org/wiki/Lorem_ipsum</a>',
            'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            '<a href="http://ru.wikipedia.org/wiki/Lorem_ipsum">http://ru.wikipedia.org/wiki/Lorem_ipsum</a>',
        ].join(' ');

        assert.equal(res, expected);
    });

    it('should replace urls with https', () => {
        const text = [
            'https://ru.wikipedia.org/wiki/Lorem_ipsum',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
            'https://ru.wikipedia.org/wiki/Lorem_ipsum',
            'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'https://ru.wikipedia.org/wiki/Lorem_ipsum',
        ].join(' ');

        const res = linkify(text);


        const expected = [
            '<a href="https://ru.wikipedia.org/wiki/Lorem_ipsum">https://ru.wikipedia.org/wiki/Lorem_ipsum</a>',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
            '<a href="https://ru.wikipedia.org/wiki/Lorem_ipsum">https://ru.wikipedia.org/wiki/Lorem_ipsum</a>',
            'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            '<a href="https://ru.wikipedia.org/wiki/Lorem_ipsum">https://ru.wikipedia.org/wiki/Lorem_ipsum</a>',
        ].join(' ');

        assert.equal(res, expected);
    });

    it('should replace urls with default schema', () => {
        const text = [
            '//ru.wikipedia.org/wiki/Lorem_ipsum',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
            '//ru.wikipedia.org/wiki/Lorem_ipsum',
            'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            '//ru.wikipedia.org/wiki/Lorem_ipsum',
        ].join(' ');

        const res = linkify(text);


        const expected = [
            '<a href="//ru.wikipedia.org/wiki/Lorem_ipsum">//ru.wikipedia.org/wiki/Lorem_ipsum</a>',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
            '<a href="//ru.wikipedia.org/wiki/Lorem_ipsum">//ru.wikipedia.org/wiki/Lorem_ipsum</a>',
            'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            '<a href="//ru.wikipedia.org/wiki/Lorem_ipsum">//ru.wikipedia.org/wiki/Lorem_ipsum</a>',
        ].join(' ');

        assert.equal(res, expected);
    });
});
