import * as yup from 'yup';

export const certificateValidationSchema = yup.object().shape({
  name: yup.string().required(),
  issue_date: yup.date().required(),
  expiry_date: yup.date().nullable(),
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
