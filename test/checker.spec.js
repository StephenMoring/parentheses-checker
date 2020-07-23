import { verifyParenthesesClosures } from '../checker.js';
import { readFileSync } from "fs";

describe("parentheses checker function ", () => {
    test("it should return true for test1.txt", () => {
        var text = readFileSync('./sample_input/test1.txt').toString('utf-8');
        expect(verifyParenthesesClosures(text)).toEqual(true);
    });

    test("it should return true for test2.txt", () => {
        var text = readFileSync('./sample_input/test2.txt').toString('utf-8');
        expect(verifyParenthesesClosures(text)).toEqual(true);
    });

      test("it should return false for test3.txt", () => {
        var text = readFileSync('./sample_input/test3.txt').toString('utf-8');
        expect(verifyParenthesesClosures(text)).toEqual(false);
    });

      test("it should return false for test4.txt", () => {
        var text = readFileSync('./sample_input/test4.txt').toString('utf-8');
        expect(verifyParenthesesClosures(text)).toEqual(false);
    });

      test("it should return true for test5.txt", () => {
        var text = readFileSync('./sample_input/test5.txt').toString('utf-8');
        expect(verifyParenthesesClosures(text)).toEqual(true);
    });
  });