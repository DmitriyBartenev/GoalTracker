export interface GoalItem {
	_id: string;
	title: string;
	description?: string;
	createdAt: string;
}

export interface UserData {
	name?: string;
	email: string;
	password: string;
}
