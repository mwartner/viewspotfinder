import fs from "fs";
import { IInputData } from "../../domain/inputData";
import ILogger from "../../domain/logger";

export default function readFile(fileName: string, logger: ILogger): IInputData {
	if (!fs.existsSync(fileName)) {
		logger.error("file does not exist");
		return {
			elements: [],
			nodes: [],
			values: []
		};
	}

	const rawData = fs.readFileSync(fileName).toString();
	const jsonData: IInputData = JSON.parse(rawData);
	return jsonData;
}
