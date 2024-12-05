import { AcademicCapIcon, GlobeAltIcon, UserGroupIcon, DocumentCheckIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Programmes reconnus',
    description: 'Accédez à des programmes d\'études certifiés dans les meilleures universités internationales.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Accompagnement personnalisé',
    description: 'Bénéficiez d\'un suivi individuel tout au long de votre processus de candidature.',
    icon: UserGroupIcon,
  },
  {
    name: 'Présence mondiale',
    description: 'Choisissez parmi une large sélection d\'universités dans plus de 20 pays.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Démarches simplifiées',
    description: 'Profitez d\'une assistance complète pour vos documents administratifs et visas.',
    icon: DocumentCheckIcon,
  },
];

export default function Features() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Avantages</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Pourquoi nous choisir ?
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Nous vous accompagnons à chaque étape de votre projet d'études à l'étranger.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}