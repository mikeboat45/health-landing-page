import PatientForm from '../../forms/PatientForm.tsx';

export default function Contact() {
  return (
    <section className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
      <p className="text-lg mb-12 max-w-3xl mx-auto">
        Have questions or want to schedule an appointment? Fill out the form below.
      </p>
      <PatientForm />
    </section>
  );
}