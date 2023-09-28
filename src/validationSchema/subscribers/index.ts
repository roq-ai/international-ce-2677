import * as yup from 'yup';

export const subscriberValidationSchema = yup.object().shape({
  user_id: yup.string().nullable().required(),
  subscription_id: yup.string().nullable().required(),
});
