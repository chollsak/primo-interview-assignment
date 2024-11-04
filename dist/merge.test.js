"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const merge_1 = require("./merge");
describe("merge function", () => {
    test("merges three collections correctly", () => {
        const collection_1 = [1, 3, 5];
        const collection_2 = [2, 4, 6];
        const collection_3 = [9, 7, 5];
        const result = (0, merge_1.merge)(collection_1, collection_2, collection_3);
        expect(result).toEqual([1, 2, 3, 4, 5, 5, 6, 7, 9]);
    });
    test("merges when collections with different lengths", () => {
        const collection_1 = [1, 2, 3, 7, 10];
        const collection_2 = [4, 5, 6];
        const collection_3 = [9, 8];
        const result = (0, merge_1.merge)(collection_1, collection_2, collection_3);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
    test("handles some empty collections", () => {
        const collection_1 = [];
        const collection_2 = [];
        const collection_3 = [5, 3, 1];
        const result = (0, merge_1.merge)(collection_1, collection_2, collection_3);
        expect(result).toEqual([1, 3, 5]);
    });
    test("handles some empty collections", () => {
        const collection_1 = [2, 6, 10];
        const collection_2 = [];
        const collection_3 = [];
        const result = (0, merge_1.merge)(collection_1, collection_2, collection_3);
        expect(result).toEqual([2, 6, 10]);
    });
    test("handles all empty collections", () => {
        const collection_1 = [];
        const collection_2 = [];
        const collection_3 = [];
        const result = (0, merge_1.merge)(collection_1, collection_2, collection_3);
        expect(result).toEqual([]);
    });
    test("handles collections with single elements", () => {
        const collection_1 = [1];
        const collection_2 = [2];
        const collection_3 = [3];
        const result = (0, merge_1.merge)(collection_1, collection_2, collection_3);
        expect(result).toEqual([1, 2, 3]);
    });
    test("handles collections with single elements", () => {
        const collection_1 = [9];
        const collection_2 = [7];
        const collection_3 = [10];
        const result = (0, merge_1.merge)(collection_1, collection_2, collection_3);
        expect(result).toEqual([7, 9, 10]);
    });
    test("merges when collection_3 is descending", () => {
        const collection_1 = [1, 2, 3];
        const collection_2 = [4, 5, 6];
        const collection_3 = [9, 8, 7];
        const result = (0, merge_1.merge)(collection_1, collection_2, collection_3);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
    test("merges when collection_3 is descending", () => {
        const collection_1 = [1234, 2345, 3456];
        const collection_2 = [4567, 5678, 6789];
        const collection_3 = [91011, 8910, 7890];
        const result = (0, merge_1.merge)(collection_1, collection_2, collection_3);
        expect(result).toEqual([1234, 2345, 3456, 4567, 5678, 6789, 7890, 8910, 91011]);
    });
    test("merges when some arrays are negative numbers", () => {
        const collection_1 = [-5, -4, -3];
        const collection_2 = [-2, -1, 0];
        const collection_3 = [3, 2, 1];
        const result = (0, merge_1.merge)(collection_1, collection_2, collection_3);
        expect(result).toEqual([-5, -4, -3, -2, -1, 0, 1, 2, 3]);
    });
    test("merges when all arrays are negative numbers", () => {
        const collection_1 = [-9, -4, -3];
        const collection_2 = [-6, -5, -2];
        const collection_3 = [-1, -7, -8];
        const result = (0, merge_1.merge)(collection_1, collection_2, collection_3);
        expect(result).toEqual([-9, -8, -7, -6, -5, -4, -3, -2, -1]);
    });
});
