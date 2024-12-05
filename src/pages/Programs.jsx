import { useState } from 'react';

const COUNTRIES = ['France', 'Angleterre', 'Canada', 'États-Unis', 'Belgique', 'Espagne'];
const LEVELS = ['Licence', 'Master', 'Doctorat'];
const TYPES = ['Présentiel', 'En ligne', 'Alternance'];

const PROGRAMS = [
  {
    title: "Master en Intelligence Artificielle",
    university: "Université de Paris",
    country: "France",
    level: "Master",
    type: "Présentiel",
    logo: "https://u-paris.fr/wp-content/uploads/2022/01/UniversiteParis_monogramme_couleur_RVB.jpg",
    url: "https://u-paris.fr"
  },
  {
    title: "Computer Science BSc",
    university: "University of Oxford",
    country: "Angleterre",
    level: "Licence",
    type: "Présentiel",
    logo: "https://substackcdn.com/image/fetch/w_600,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fpbs.substack.com%2Fmedia%2FFdSkLBMXoAIgI3Y.png"
  },
  {
    title: "MBA Finance",
    university: "HEC Montréal",
    country: "Canada",
    level: "Master",
    type: "Alternance",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Logo_HEC_Montreal.svg/1200px-Logo_HEC_Montreal.svg.png"
  },
  {
    title: "Data Science PhD",
    university: "MIT",
    country: "États-Unis",
    level: "Doctorat",
    type: "Présentiel",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg"
  },
  {
    title: "Génie Logiciel",
    university: "UCLouvain",
    country: "Belgique",
    level: "Master",
    type: "Présentiel",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Universit%C3%A9_catholique_de_Louvain_-_UCL_-_Ancien_logo.jpg"
  },
  {
    title: "Digital Marketing",
    university: "McGill University",
    country: "Canada",
    level: "Master",
    type: "En ligne",
    logo: "https://pbs.twimg.com/profile_images/1153375725900193792/z2Zbm2jz_400x400.png"
  },
  {
    title: "Cybersecurity Engineering",
    university: "Stanford University",
    country: "États-Unis",
    level: "Master",
    type: "Présentiel",
    logo: "https://identity.stanford.edu/wp-content/uploads/sites/3/2020/07/SU_SealColor_web3.png"
  }
];

export default function Programs() {
  const [filters, setFilters] = useState({
    country: '',
    level: '',
    type: '',
  });

  const filteredPrograms = PROGRAMS.filter(program => {
    return (!filters.country || program.country === filters.country) &&
           (!filters.level || program.level === filters.level) &&
           (!filters.type || program.type === filters.type);
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Programmes d'études</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Section des filtres avec hauteur augmentée */}
        <div className="md:col-span-1 bg-white p-6 rounded-lg shadow-md h-[calc(100vh-12rem)] sticky top-24">
          <div className="space-y-8">
            <div>
              <label className="block text-md font-medium text-gray-700 mb-2">Pays</label>
              <select
                className="mt-1 block w-full rounded-md border-2 border-slate-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2"
                value={filters.country}
                onChange={(e) => setFilters({ ...filters, country: e.target.value })}
              >
                <option value="">Tous les pays</option>
                {COUNTRIES.map((country) => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Niveau</label>
              <select
                className="mt-1 block w-full rounded-md border-2 border-slate-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2"
                value={filters.level}
                onChange={(e) => setFilters({ ...filters, level: e.target.value })}
              >
                <option value="">Tous les niveaux</option>
                {LEVELS.map((level) => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
              <select
                className="mt-1 block w-full rounded-md border-2 border-slate-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2"
                value={filters.type}
                onChange={(e) => setFilters({ ...filters, type: e.target.value })}
              >
                <option value="">Tous les types</option>
                {TYPES.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
            {filteredPrograms.map((program, index) => (
              <div key={index} className="bg-white shadow rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 mr-4">
                    <img
                      src={program.logo}
                      alt={program.university}
                      className="h-16 w-auto object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{program.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {program.url ? (
                        <a href={program.url} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">
                          {program.university}
                        </a>
                      ) : (
                        program.university
                      )}
                    </p>
                  </div>
                </div>
                
                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="font-medium mr-2">Pays:</span> {program.country}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="font-medium mr-2">Niveau:</span> {program.level}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="font-medium mr-2">Type:</span> {program.type}
                  </div>
                </div>
                
                <button className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-200">
                  En savoir plus
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}