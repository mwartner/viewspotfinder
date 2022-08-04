import run from "./application";
import getCliParameters from "./infrastructure/getParameters/getCliParameters";
import WinstonLogger from "./infrastructure/winstonLogger";

const logger = new WinstonLogger();
const params = getCliParameters(logger);
run(params, logger);
