// @flow
import type {rule} from "../../types/rule";

export const ruleCheck = (rules: Array<rule>, text: string | number): ?rule => (
    rules[rules.map((item: rule): boolean => text.toString().replace(RegExp(item.regex), '') === '').indexOf(false)]
); // toStringするのはどうなの…

export default (rules: Array<rule>, text: string): ?string => {
    const result = ruleCheck(rules, text);
    return result ? result.errMessage : undefined;
}
