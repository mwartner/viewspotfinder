import MeshElement from "../../domain/meshElement";

export default function findViewpoints(meshElements: MeshElement[], numberOfViewpoints: number): MeshElement[] {
	const results: MeshElement[] = [];
	const usedNodeIds: number[] = [];

	meshElements.forEach((meshElement) => {
		// Check if one of the edges of the element matches one of the edges of another element (just one of the elements is viewpoint)
		const hasNoUsedNodes = meshElement.getNodes().every((id) => !usedNodeIds.includes(id));
		const isLocalMaximum = meshElement.isLocalMaximum(meshElements);

		if (hasNoUsedNodes && isLocalMaximum) {
			results.push(meshElement);
			usedNodeIds.push(...meshElement.getNodes());

			if (results.length === numberOfViewpoints) {
				return;
			}
		}
	});

	return results;
}
