export interface INewGoalInputs {
	title: string;
	description: string;
}

export interface IRegisterInputs {
	name: string;
	email: string;
	password: string;
	repeatPassword: string;
}

export interface ILoginInputs {
	email: string;
	password: string;
}
