// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { Hook, HookContext } from '@feathersjs/feathers';

export default (exchangeSchema: any): Hook => {
	return async (context: HookContext) => {
		const { exchangeSchema } = options;
		let dataObj: any;
		if (context.type === 'before') {
			dataObj = context.data;
		} else if (context.type === 'after') {
			dataObj = context.result;
		}
		let transferObj = {};
		for (let key of exchangeSchema) {
			if (dataObj[key]) {
				transferObj = { ...transferObj, [key]: dataObj[key] };
			}
		}
		context.data = transferObj;
		return context;
	};
};
