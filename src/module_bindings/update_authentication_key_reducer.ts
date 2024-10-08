// THIS FILE IS AUTOMATICALLY GENERATED BY SPACETIMEDB. EDITS TO THIS FILE
// WILL NOT BE SAVED. MODIFY TABLES IN RUST INSTEAD.

// @ts-ignore
import { __SPACETIMEDB__, AlgebraicType, ProductType, BuiltinType, ProductTypeElement, DatabaseTable, AlgebraicValue, ReducerArgsAdapter, SumTypeVariant, Serializer, Identity, Address, ReducerEvent, Reducer, SpacetimeDBClient } from "@clockworklabs/spacetimedb-sdk";

export class UpdateAuthenticationKeyReducer extends Reducer
{
	public static reducerName: string = "UpdateAuthenticationKey";
	public static call(_authenticationKey: string) {
		this.getReducer().call(_authenticationKey);
	}

	public call(_authenticationKey: string) {
		const serializer = this.client.getSerializer();
		let _authenticationKeyType = AlgebraicType.createPrimitiveType(BuiltinType.Type.String);
		serializer.write(_authenticationKeyType, _authenticationKey);
		this.client.call("UpdateAuthenticationKey", serializer);
	}

	public static deserializeArgs(adapter: ReducerArgsAdapter): any[] {
		let authenticationKeyType = AlgebraicType.createPrimitiveType(BuiltinType.Type.String);
		let authenticationKeyValue = AlgebraicValue.deserialize(authenticationKeyType, adapter.next())
		let authenticationKey = authenticationKeyValue.asString();
		return [authenticationKey];
	}

	public static on(callback: (reducerEvent: ReducerEvent, _authenticationKey: string) => void) {
		this.getReducer().on(callback);
	}
	public on(callback: (reducerEvent: ReducerEvent, _authenticationKey: string) => void)
	{
		this.client.on("reducer:UpdateAuthenticationKey", callback);
	}
}


export default UpdateAuthenticationKeyReducer
