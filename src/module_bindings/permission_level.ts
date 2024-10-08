// THIS FILE IS AUTOMATICALLY GENERATED BY SPACETIMEDB. EDITS TO THIS FILE
// WILL NOT BE SAVED. MODIFY TABLES IN RUST INSTEAD.

// @ts-ignore
import { __SPACETIMEDB__, AlgebraicType, SumTypeVariant, BuiltinType, AlgebraicValue } from "@clockworklabs/spacetimedb-sdk";

export namespace PermissionLevel {
	export function getAlgebraicType(): AlgebraicType {
		return AlgebraicType.createSumType([
			new SumTypeVariant("None", AlgebraicType.createProductType([
		])),
			new SumTypeVariant("Editor", AlgebraicType.createProductType([
		])),
			new SumTypeVariant("Moderator", AlgebraicType.createProductType([
		])),
			new SumTypeVariant("Owner", AlgebraicType.createProductType([
		])),
		]);
	}

	export function serialize(value: PermissionLevel): object {
		const result: {[key: string]: any} = {};
		result[value.tag] = [];
		return result;
	}

	export type None = { tag: "None", value: undefined };
	export const None = { tag: "None", value: undefined };
	export type Editor = { tag: "Editor", value: undefined };
	export const Editor = { tag: "Editor", value: undefined };
	export type Moderator = { tag: "Moderator", value: undefined };
	export const Moderator = { tag: "Moderator", value: undefined };
	export type Owner = { tag: "Owner", value: undefined };
	export const Owner = { tag: "Owner", value: undefined };

	export function fromValue(value: AlgebraicValue): PermissionLevel {
		let sumValue = value.asSumValue();
		let tag = sumValue.tag;
		let variant = PermissionLevel.getAlgebraicType().sum.variants[tag];
		return { tag: variant.name, value: undefined } as PermissionLevel;
	}
}

export type PermissionLevel = PermissionLevel.None | PermissionLevel.Editor | PermissionLevel.Moderator | PermissionLevel.Owner;
export default PermissionLevel;
