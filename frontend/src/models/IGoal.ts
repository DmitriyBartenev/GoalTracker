export interface IGoal {
	_id: string;
	user: string;
	title: string;
	description?: string;
	createdAt: string;
	updatedAt: string;
	isLoading?: boolean;
}

export interface INewGoal {
	title: string;
	description?: string;
}
