import * as yup from 'yup';

export const goalValidationSchema = yup.object().shape({
	title: yup.string().required('Title is required'),
	description: yup.string().optional(),
});

export const registerValidationSchema = yup.object().shape({
	name: yup.string().required(),
	email: yup.string().email().required(),
	password: yup.string().min(6).max(20).required(),
	repeatPassword: yup.string().oneOf([yup.ref('password')]),
});

export const loginValidationSchema = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().min(6).max(20).required(),
});
