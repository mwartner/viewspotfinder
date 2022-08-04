import IParameters from "../../domain/parameters";
import ILogger from "../../domain/logger";
import validateParameters from "../../application/validateParameters/validateParameters";

export default function getAwsParameters(logger: ILogger, event: any): IParameters {
	const parameters = event as IParameters;
	validateParameters(parameters, logger);
	return parameters;
}
