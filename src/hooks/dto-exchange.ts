// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { Hook, HookContext } from '@feathersjs/feathers';

export default (exchangeSchema: any): Hook => {
	return async (context: HookContext) => {
		let dataObj: any;
		if (context.type === 'before') {
			dataObj = context.data;
		} else if (context.type === 'after') {
			dataObj = context.result;
		}
		let transferObj = {};
		for (const key in exchangeSchema) {
			if (dataObj && dataObj[key]) {
				transferObj = { ...transferObj, [exchangeSchema[key]]: dataObj[key] };
			}
		}
		console.log(transferObj);
		context.data = transferObj;
		return context;
	};
};
