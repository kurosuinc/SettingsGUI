// @flow
import type {rule} from "./rule";

export type scheme = {
	key: string,
	label: string,
	placeholder: string,
	description: string,
	type: string,
	required: boolean,
	rules: Array<rule>
};
