import * as yup from 'yup';

export const goalValidationSchema = yup.object().shape({
	title: yup.string().required('Title is required'),
	description: yup.string().optional(),
});