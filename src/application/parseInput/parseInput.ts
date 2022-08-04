import { IInputData } from "../../domain/inputData";
import ILogger from "../../domain/logger";
import MeshElement from "../../domain/meshElement";

export default function parseInput(input: IInputData, logger: ILogger): MeshElement[] {

	const { elements, values } = input;
	let meshElements: MeshElement[] = [];

	elements?.forEach((element, index) => {
		const { id, nodes } = element;
		//const value = values.find((v) => v.element_id === id)?.value || null;
		const valueObj = values.find((v) => v.element_id === id);
		if (!valueObj) {
			logger.error(`no merge found for elementId ${id}`);
			return;
		}
		const value = valueObj.value;
		if (areMeshElementPropertiesValid(id, nodes, value)) {
			const meshElement = new MeshElement(id, nodes, value)
			meshElements.push(meshElement);
		}
		else {
			logger.error(`invalid data at element-merge at element position ${index}`);
		}
	});

	meshElements = orderByValueDescending(meshElements);

	return meshElements;
}

function areMeshElementPropertiesValid(id: number, nodes: number[], value: number): boolean {
	const NODES_PER_ELEMENT = 3;

	const isIdValid = id >= 0;
	const areNodesValid = nodes?.length === NODES_PER_ELEMENT ?? false;
	const isValueValid = !isNaN(value);

	return isIdValid && areNodesValid && isValueValid;
}

function orderByValueDescending(meshElements: MeshElement[]): MeshElement[] {
	return meshElements.sort((a, b) => b.getValue() - a.getValue());
}
