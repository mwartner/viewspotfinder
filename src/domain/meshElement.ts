export default class MeshElement {
	private id: number;
	private nodes: number[];
	private value: number;

	constructor(id: number, nodes: number[], value: number) {
		this.id = id;
		this.nodes = nodes;
		this.value = value;
	}

	public getId(): number {
		return this.id;
	}

	public getNodes(): number[] {
		return this.nodes;
	}

	public getValue(): number {
		return this.value;
	}

	public formatForValueOutput(): object {
		return {
			element_id: this.id,
			value: this.value
		};
	}

	public isLocalMaximum(elements: MeshElement[]): boolean {
		const neighbours = this.getNeighbours(elements);
		return Math.max(...neighbours.map(n => n.getValue())) < this.value;
	}

	private getNeighbours(elements: MeshElement[]): MeshElement[] {
		return elements.filter(e => this.isNeighbour(e));
	}

	private isNeighbour(other: MeshElement): boolean {
		if (this.id === other.getId()) {
			return false;
		}

		const node1 = this.nodes[1];
		const node2 = this.nodes[2];
		const node3 = this.nodes[3];
		const otherElementNodes = other.getNodes();

		const isFirstNodeEqual = otherElementNodes.includes(node1);
		const isSecondNodeEqual = otherElementNodes.includes(node2);
		const isThirdNodeEqual = otherElementNodes.includes(node3);

		return isFirstNodeEqual || isSecondNodeEqual || isThirdNodeEqual;
	}
}
