// Component for displaying contact information
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-gray-900">Informations de contact</h3>
      
      <div className="space-y-4">
        <div className="flex items-start">
          <MapPinIcon className="h-6 w-6 text-indigo-600 mt-1 flex-shrink-0" />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">Adresse</p>
            <p className="mt-1 text-sm text-gray-500">
              5 rue Aissa Djordjani<br />
              Les Sources, BMR, Alger.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <PhoneIcon className="h-6 w-6 text-indigo-600 mt-1 flex-shrink-0" />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">Téléphone</p>
            <p className="mt-1 text-sm text-gray-500">023 54 35 46 <br/> 023 54 14 08</p>
          </div>
        </div>

        <div className="flex items-start">
          <EnvelopeIcon className="h-6 w-6 text-indigo-600 mt-1 flex-shrink-0" />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">Email</p>
            <p className="mt-1 text-sm text-gray-500">infos@syllabuseduc.com</p>
          </div>
        </div>

        <div className="flex items-start">
          <ClockIcon className="h-6 w-6 text-indigo-600 mt-1 flex-shrink-0" />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">Horaires d'ouverture</p>
            <p className="mt-1 text-sm text-gray-500">
              Dimanche - Jeudi: 9h00 - 18h00<br />
              Samedi: 9h00 - 12h00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}