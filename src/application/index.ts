#!/usr/bin/env node

import findViewpoints from './findViewpoints/findViewpoints';
import logResult from './logResult/logResult';
import parseInput from './parseInput/parseInput';
import readFile from './readFile/readFile';
import IParameters from '../domain/parameters';
import ILogger from '../domain/logger';

export default function run(params: IParameters, logger: ILogger) {
	const startOfExecution = performance.now();
	const inputData = readFile(params.filename, logger);
	const meshElements = parseInput(inputData, logger);
	const viewPoints = findViewpoints(meshElements, params.numberOfViewpoints);
	logResult(viewPoints, logger, startOfExecution, params.numberOfViewpoints, meshElements.length);
}
