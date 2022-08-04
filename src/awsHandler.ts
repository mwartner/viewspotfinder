'use strict';

import run from "./application";
import getAwsParameters from "./infrastructure/getParameters/getAwsParameters";
import WinstonLogger from "./infrastructure/winstonLogger";

module.exports.findViewpoints = async (event: any) => {
	const logger = new WinstonLogger();
	const params = getAwsParameters(logger, event);
	run(params, logger);
};
