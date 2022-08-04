import IParameters from "../../domain/parameters";
import ILogger from "../../domain/logger";

export default function validateParameters(parameters: IParameters, logger: ILogger): void {
	const {filename, numberOfViewpoints} = parameters;

	if (!filename) {
		logger.error("No filename provided");
	}

	if (isNaN(numberOfViewpoints) || numberOfViewpoints < 1) {
		logger.error("No valid number provided");
	}
}
