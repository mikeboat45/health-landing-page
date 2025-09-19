import { useForm } from 'react-hook-form';
import { supabase } from '../services/supabase.ts';

// Define the interface for the form data
interface PatientFormData {
  full_name: string;
  email: string;
  phone?: string; // Optional
  date_of_birth: string;
  reason_for_visit?: string; // Optional
}

export default function PatientForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<PatientFormData>();

  const onSubmit = async (data: PatientFormData) => {
    const { data: submission, error } = await supabase
      .from('patient_submissions')
      .insert([data]);

    if (error) {
      console.error('Submission failed', error);
      alert('Submission failed! Check the console for details.');
    } else {
      console.log('Submission successful', submission);
      alert('Submission successful!');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-md dark:bg-gray-700">
      <h2 className="text-2xl font-bold mb-6 text-center dark:text-gray-100">Patient Intake Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Full Name */}
        <div>
          <label htmlFor="full_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
          <input
            id="full_name"
            type="text" // Added type for clarity
            {...register('full_name', { required: 'Full name is required' })}
            className={`mt-1 block w-full px-3 py-2 bg-white border rounded-md shadow-sm placeholder-gray-400 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 dark:text-gray-100
              ${errors.full_name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'}
            `}
            aria-invalid={!!errors.full_name}
            aria-describedby={errors.full_name ? 'full_name-error' : undefined}
          />
          {errors.full_name && <p id="full_name-error" className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.full_name.message}</p>}
        </div>

        {/* Email Address */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Entered value does not match email format'
              }
            })}
            className={`mt-1 block w-full px-3 py-2 bg-white border rounded-md shadow-sm placeholder-gray-400 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 dark:text-gray-100
              ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'}
            `}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && <p id="email-error" className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>}
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Phone Number</label>
          <input
            id="phone"
            type="tel"
            {...register('phone')}
            className={`mt-1 block w-full px-3 py-2 bg-white border rounded-md shadow-sm placeholder-gray-400 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 dark:text-gray-100
              ${errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'}
            `}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && <p id="phone-error" className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.phone.message}</p>}
        </div>

        {/* Date of Birth */}
        <div>
          <label htmlFor="date_of_birth" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Date of Birth</label>
          <input
            id="date_of_birth"
            type="date"
            {...register('date_of_birth', { required: 'Date of birth is required' })}
            className={`mt-1 block w-full px-3 py-2 bg-white border rounded-md shadow-sm placeholder-gray-400 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 dark:text-gray-100
              ${errors.date_of_birth ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'}
            `}
            aria-invalid={!!errors.date_of_birth}
            aria-describedby={errors.date_of_birth ? 'date_of_birth-error' : undefined}
          />
          {errors.date_of_birth && <p id="date_of_birth-error" className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.date_of_birth.message}</p>}
        </div>

        {/* Reason for Visit */}
        <div>
          <label htmlFor="reason_for_visit" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Reason for Visit</label>
          <textarea
            id="reason_for_visit"
            rows={4}
            {...register('reason_for_visit')}
            className={`mt-1 block w-full px-3 py-2 bg-white border rounded-md shadow-sm placeholder-gray-400 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 dark:text-gray-100
              ${errors.reason_for_visit ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'}
            `}
            aria-invalid={!!errors.reason_for_visit}
            aria-describedby={errors.reason_for_visit ? 'reason_for_visit-error' : undefined}
          ></textarea>
          {errors.reason_for_visit && <p id="reason_for_visit-error" className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.reason_for_visit.message}</p>}
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-700 dark:hover:bg-indigo-800 dark:focus:ring-indigo-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}