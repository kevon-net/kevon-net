import { hasLength, useForm } from '@mantine/form';

export const useFormContact = () => {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
      message: '',
    },

    validate: {
      name: hasLength({ min: 2, max: 255 }, ''),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : true),
      message: hasLength({ min: 2, max: 2048 }, ''),
    },
  });

  const submit = form.onSubmit((values) => {
    console.log(values);
  });

  return { form, submit };
};
