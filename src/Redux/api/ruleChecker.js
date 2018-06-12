// @flow
import type {rule} from "../../types/rule";

export const ruleCheck = (rules: Array<rule>, text: string | number): ?rule => (
    rules[rules.map((item: rule): boolean =>
            text.toString().replace(RegExp(item.regex.toString()), '') === '')
        .indexOf(false)
    ]
); // toStringするのはどうなの…

export default (rules: Array<rule>, text: string): Promise<rule> =>
    new Promise(resolve => resolve(ruleCheck(rules, text))
);
