import * as yup from 'yup';

export const offerValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  discount: yup.number().integer().required(),
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  organization_id: yup.string().nullable().required(),
});
