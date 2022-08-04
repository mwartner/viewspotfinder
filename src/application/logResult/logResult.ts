import ILogger from "../../domain/logger";
import MeshElement from "../../domain/meshElement";

export default function logResult(
		viewPoints: MeshElement[],
		logger: ILogger,
		startOfExecution: number,
		requiredNumberOfViewpoints: number,
		numberOfInspectedElements: number): void {
	logResultToConsole(viewPoints);

	logAmountOfResults(logger, viewPoints.length, requiredNumberOfViewpoints, numberOfInspectedElements);
	logExecutionTime(logger, startOfExecution);
}

function logResultToConsole(viewPoints: MeshElement[]): void {
	console.log(viewPoints.map((r => r.formatForValueOutput())));
}

function logAmountOfResults(
		logger: ILogger,
		achievedNumberOfViewpoints: number,
		requiredNumberOfViewpoints: number,
		numberOfInspectedElements: number): void {
	logger.info(`${achievedNumberOfViewpoints} viewpoints found in ${numberOfInspectedElements} elements`);
	if (achievedNumberOfViewpoints < requiredNumberOfViewpoints) {
		logger.warn(`only ${achievedNumberOfViewpoints} out of ${requiredNumberOfViewpoints} were found`);
	}
}

function logExecutionTime(logger: ILogger, startOfExecution: number): void {
	const stop = performance.now();
	const executionTimeInMs = stop - startOfExecution;
	logger.info(`execution time: ${executionTimeInMs} ms`);
}
