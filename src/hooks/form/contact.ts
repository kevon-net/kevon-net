import { Variant } from '@/enums/notification';
import { showNotification } from '@/utilities/notifications';
import { hasLength, useForm } from '@mantine/form';
import { useNetwork } from '@mantine/hooks';
import { useState } from 'react';
import { sendEmail } from '@/services/api/email/send';
import { capitalizeWords } from '@/utilities/formatters/string';

export const useFormContact = () => {
  const [submitted, setSubmitted] = useState(false);
  const networkStatus = useNetwork();

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

  const submit = form.onSubmit(async (values) => {
    try {
      if (!networkStatus.online) {
        showNotification({
          variant: Variant.WARNING,
          title: 'Network Error',
          desc: 'Please check your internet connection.',
        });

        return;
      }

      setSubmitted(true);

      const senderName = capitalizeWords(values.name.trim());

      await sendEmail({
        from: { name: senderName, email: values.email.trim() },
        subject: `New Lead (${senderName})`,
        message: values.message.trim(),
      });

      form.reset();

      showNotification({
        variant: Variant.SUCCESS,
        title: 'Inquiry Sent',
        desc: `You'll receive a response within 24 hours`,
      });
    } catch (error) {
      console.error('---> hook error (form contact):', error);

      showNotification({
        variant: Variant.FAILED,
        title: 'Error',
        desc: 'Could not send email.',
      });
    } finally {
      setSubmitted(false);
    }
  });

  return { form, submit, submitted };
};
