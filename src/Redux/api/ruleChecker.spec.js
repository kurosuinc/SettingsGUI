import testdata from '../../testdata/schemaSample';
import ruleChecker, { ruleCheck } from './ruleChecker';

test('ruleCheck function', () => {
    const firstRule = testdata.schema[0].rules;
    expect(ruleCheck(firstRule, '0')).toEqual(firstRule[0]);
    expect(ruleCheck(firstRule, 'a')).toEqual(firstRule[1]);
    expect(ruleCheck(firstRule, 'aaaaa')).toBeUndefined();
    expect(ruleCheck(firstRule, 'aaa0a')).toEqual(firstRule[0]);
    expect(ruleCheck(firstRule, 'aaaaaaaaaa')).toBeUndefined();
    expect(ruleCheck(firstRule, 'abcdefghijk')).toEqual(firstRule[1]);

    const secondRule = testdata.schema[1].rules;
    expect(ruleCheck(secondRule, 0)).toBeUndefined();
    expect(ruleCheck(secondRule, 1)).toBeUndefined();
    expect(ruleCheck(secondRule, 9999999999)).toBeUndefined();
    expect(ruleCheck(secondRule, -0)).toBeUndefined();
    expect(ruleCheck(secondRule, -1)).toEqual(secondRule[0]);
    expect(ruleCheck(secondRule, '-a')).toEqual(secondRule[0]); // どうなの…
    // expect(ruleCheck(secondRule, 'a')).toEqual(secondRule[1]); // ?
});
