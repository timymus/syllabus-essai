/**
 * Main Contact page component
 */
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import Map from '../components/contact/Map';

/**
 * Contact component
 * @returns {JSX.Element} The Contact component
 */
/**
 * Renders the Contact page.
 * @returns {JSX.Element} The Contact page component.
 */
export default function Contact() {
  return (

    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-48">
      <div className="max-w-lg mx-auto lg:max-w-none">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Contactez-nous</h1>
        <p className="mt-4 text-lg text-gray-500">
          Vous avez des questions sur nos programmes d'études ? N'hésitez pas à nous contacter.
          Notre équipe est là pour vous aider.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* ContactInfo maintenant à gauche */}
          <div>
            <ContactInfo />
          </div>
          {/* ContactForm maintenant à droite */}
          <div className="lg:border-l lg:border-gray-200 lg:pl-16">
            <ContactForm />
          </div>
        </div>

        {/* Map section taking full width */}
        <Map />
      </div>
    </div>
  );
}