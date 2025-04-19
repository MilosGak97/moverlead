import { useMutation } from '@tanstack/react-query';
import { api } from '../../../../../api/api';
import { useToast } from '../../../../../hooks/useToast';
import { Container } from '../../../../../components/Container';
import { Button } from '../../../../../components/Button';
import { Toast } from '../../../../../components/Toast';
import { ControlledForm } from '../../../../../components/ControlledForm';
import {
  SubscribeToBlogsFormData,
  subscribeToBlogsSchema,
} from './schema/subscribeToBlogsSchema';
import { useFormContext } from 'react-hook-form';

export const SubscribeToBlogsView = () => {
  const { toastText, addToast } = useToast();
  const {
    toastText: successSubscribedText,
    addToast: addSuccessSubscribedToast,
  } = useToast();

  const {
    register,
    formState: { isDirty, isValid },
    reset,
    getValues,
    handleSubmit,
  } = useFormContext<SubscribeToBlogsFormData>();

  const { mutate, isPending } = useMutation({
    mutationFn: ({ email }: SubscribeToBlogsFormData) => {
      //TODO - pass email to the mutation
      console.log(email);
      return api.properties.propertiesControllerHandleWebhook();
    },
    onSuccess: () => {
      addSuccessSubscribedToast('Successfully subscribed to our blog.');
      reset();
    },
    onError: () => addToast(),
  });

  const handleSubscribeToBlogsFormSubmit = (data: SubscribeToBlogsFormData) => {
    mutate(data);
  };

  return (
    <form
      className="bg-primary py-6 text-white"
      onSubmit={handleSubmit(handleSubscribeToBlogsFormSubmit)}
    >
      <Container className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="flex flex-col gap-2 col-span-3">
          <h2
            className=" font-bold text-3xl"
            onClick={() => console.log(getValues())}
          >
            Subscribe to our blog
          </h2>
          <p>
            Get practical tips, marketing ideas, and industry insights to help
            your moving business grow straight to your inbox.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-6 col-span-2">
          <input
            type="text"
            className="w-full rounded-md bg-white p-2 text-base text-gray-900 outline-none placeholder:text-slate-400"
            placeholder="Email address"
            {...register('email')}
          />
          <Button
            color="white"
            className="text-primary w-full"
            disabled={!isDirty || !isValid || isPending}
            isLoading={true}
            onClick={handleSubmit(handleSubscribeToBlogsFormSubmit)}
          >
            Subscribe
          </Button>
        </div>
      </Container>
      {toastText && <Toast text={toastText} />}
      {successSubscribedText && (
        <Toast text={successSubscribedText} type={'success'} />
      )}
    </form>
  );
};

export const SubscribeToBlogs = () => {
  return (
    <ControlledForm schema={subscribeToBlogsSchema}>
      <SubscribeToBlogsView />
    </ControlledForm>
  );
};
