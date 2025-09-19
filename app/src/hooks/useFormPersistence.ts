import { useEffect } from 'react';
import { UseFormReturn } from 'react-hook-form';

interface UseFormPersistenceProps<T> {
  form: UseFormReturn<T>;
  key: string;
  clearOnSubmit?: boolean;
}

export function useFormPersistence<T>({ form, key, clearOnSubmit = true }: UseFormPersistenceProps<T>) {
  const { watch, reset, handleSubmit } = form;

  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem(key);
    if (savedData) {
      reset(JSON.parse(savedData));
    }
  }, [key, reset]);

  // Save data to localStorage on every change
  useEffect(() => {
    const subscription = watch((value) => {
      localStorage.setItem(key, JSON.stringify(value));
    });
    return () => subscription.unsubscribe();
  }, [watch, key]);

  // Optionally clear localStorage after successful submission
  const onSubmitWithPersistence = async (data: T, submitHandler: (data: T) => Promise<void>) => {
    await submitHandler(data);
    if (clearOnSubmit) {
      localStorage.removeItem(key);
    }
  };

  return { onSubmitWithPersistence };
}