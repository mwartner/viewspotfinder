import { createLogger, format, Logger, transports } from "winston";
import ILogger from "../domain/logger";

export default class WinstonLogger implements ILogger {
	private logger: Logger;

	constructor() {
		const myFormat = format.printf(({ level, message, timestamp }) => {
			return `${timestamp}\t${level.toUpperCase()}\t${message}`;
		});

		this.logger = createLogger({
			level: 'info',
			format: format.combine(
				format.timestamp(),
   				myFormat
			),
			transports: [
				new transports.File({ filename: './log/viewpointFinder.log' }),
			]
		});
	}

	info(message: string): void {
		this.logger.info(message);
	}

	warn(message: string): void {
		this.logger.warn(message);
	}

	error(message: string): void {
		this.logger.error(message);
	}
}
