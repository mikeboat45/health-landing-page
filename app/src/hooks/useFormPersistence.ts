import { useEffect } from 'react';
import type { UseFormReturn, FieldValues } from 'react-hook-form'; // Added FieldValues

interface UseFormPersistenceProps<T extends FieldValues> { // Added extends FieldValues
  form: UseFormReturn<T>;
  key: string;
  clearOnSubmit?: boolean;
}

export function useFormPersistence<T extends FieldValues>({ form, key, clearOnSubmit = true }: UseFormPersistenceProps<T>) { // Added extends FieldValues
  const { watch, reset } = form; // Removed handleSubmit

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