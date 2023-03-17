export interface IGoalItem {
	_id: string;
	user: string;
	title: string;
	description?: string;
	createdAt: string;
	updatedAt: string;
}

export interface INewGoalItem {
	title: string;
	description?: string;
}
