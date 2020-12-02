import DynamicTimeWarping from '../src/dynamic-time-warping';

const distFunc = (a, b) => Math.abs(a - b);

describe('getDistance test', () => {
    test('test1', () => {
        const dtw1 = new DynamicTimeWarping(
            [83, 65, 80, 49, 87],
            [57, 99, 11, 75, 78],
            distFunc
        );
        expect(dtw1.getDistance()).toBe(112);
    });

    test('test2', () => {
        const dtw2 = new DynamicTimeWarping(
            [17, 72, 50, 9],
            [21, 43, 13, 23, 40],
            distFunc
        );
        expect(dtw2.getDistance()).toBe(89);
    });

    test('test3 - cached distance', () => {
        const dtw2 = new DynamicTimeWarping(
            [17, 72, 50, 9],
            [21, 43, 13, 23, 40],
            distFunc
        );
        expect(dtw2.getDistance()).toBe(89);
        // check again to lookup cache
        expect(dtw2.getDistance()).toBe(89);
    });
});


describe('getPath test', () => {
    test('test1', () => {
        const dtw1 = new DynamicTimeWarping(
            [9, 93, 15, 19, 24],
            [31, 97, 81, 82, 39],
            distFunc
        );
        expect(dtw1.getDistance()).toBe(108);
        expect(dtw1.getPath()).toStrictEqual(
            [[0, 0], [1, 1], [1, 2], [1, 3], [2, 4], [3, 4], [4, 4]]
        );
    });

    test('test2', () => {
        const dtw2 = new DynamicTimeWarping(
            [83, 72, 52, 83],
            [19, 18, 77, 4, 14],
            distFunc
        );
        expect(dtw2.getPath()).toStrictEqual(
            [[0, 0], [1, 1], [1, 2], [2, 3], [3, 4]]
        );
    });

    test('test3', () => {
        const dtw3 = new DynamicTimeWarping(
            [49, 79, 19, 39, 80],
            [77, 14, 95, 6],
            distFunc
        );
        expect(dtw3.getPath()).toStrictEqual(
            [[0, 0], [1, 0], [2, 1], [3, 1], [4, 2], [4, 3]]
        );
    });

    test('test4 - cached distance', () => {
        const dtw3 = new DynamicTimeWarping(
            [49, 79, 19, 39, 80],
            [77, 14, 95, 6],
            distFunc
        );
        expect(dtw3.getPath()).toStrictEqual(
            [[0, 0], [1, 0], [2, 1], [3, 1], [4, 2], [4, 3]]
        );
        // check again to lookup cache
        expect(dtw3.getPath()).toStrictEqual(
            [[0, 0], [1, 0], [2, 1], [3, 1], [4, 2], [4, 3]]
        );
    });
});
