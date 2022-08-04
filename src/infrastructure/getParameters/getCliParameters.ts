import IParameters from "../../domain/parameters";
import ILogger from "../../domain/logger";
import validateParameters from "../../application/validateParameters/validateParameters";

export default function getCliParameters(logger: ILogger): IParameters {
	const params = process.argv.slice(2, 4);
	const filename = params[0];
	const numberOfViewpoints = parseInt(params[1], 10);
	const parameters: IParameters = {
		filename,
		numberOfViewpoints
	};

	validateParameters(parameters, logger);

	return parameters;
}
