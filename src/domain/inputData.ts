export interface IInputData {
	elements: IElement[];
	nodes: INode[];
	values: IValue[];
}

export interface IElement {
	id: number;
	nodes: number[];
}

export interface INode {
	id: number;
	x: number;
	y: number;
}

export interface IValue {
	element_id: number;
	value: number;
}
