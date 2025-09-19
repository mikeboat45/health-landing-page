export default function Services() {
  return (
    <section className="py-20 bg-white text-center dark:bg-gray-900 dark:text-gray-200">
      <h2 className="text-4xl font-bold mb-8">Our Services</h2>
      <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
        <div className="p-6 shadow-lg rounded-lg w-72 bg-white dark:bg-gray-800">
          <h3 className="text-xl font-semibold mb-2">Primary Care</h3>
          <p>Comprehensive health services for all ages.</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg w-72 bg-white dark:bg-gray-800">
          <h3 className="text-xl font-semibold mb-2">Specialty Care</h3>
          <p>Access to a network of specialists.</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg w-72 bg-white dark:bg-gray-800">
          <h3 className="text-xl font-semibold mb-2">Telehealth</h3>
          <p>Convenient virtual consultations from home.</p>
        </div>
      </div>
    </section>
  );
}