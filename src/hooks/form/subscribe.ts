import { useForm } from '@mantine/form';

export const useFormSubscribe = () => {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : true),
    },
  });

  const submit = form.onSubmit((values) => {
    console.log(values);
  });

  return { form, submit };
};
