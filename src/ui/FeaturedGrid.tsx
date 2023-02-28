import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Hands on learning',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi vitae lobortis.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Built-in note taking',
    description:
      'Qui aut temporibus nesciunt vitae dicta repellat sit dolores pariatur. Temporibus qui illum aut.',
    icon: LockClosedIcon,
  },
  {
    name: 'Set and track goals',
    description:
      'Rerum quas incidunt deleniti quaerat suscipit mollitia. Amet repellendus ut odit dolores qui.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Earn a certificate',
    description:
      'Ullam laboriosam est voluptatem maxime ut mollitia commodi. Et dignissimos suscipit perspiciatis.',
    icon: ShieldCheckIcon,
  },
];

const FeaturedGrid = () => {
  return (
    <div className='relative py-16 bg-white sm:py-24 lg:py-32'>
      <div className='max-w-md px-6 mx-auto text-center sm:max-w-3xl lg:max-w-7xl lg:px-8'>
        <h2 className='text-xl font-semibold text-green-500'>Deploy faster</h2>
        <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
          Everything you need to deploy your app
        </p>
        <p className='mx-auto mt-5 text-xl text-gray-500 max-w-prose'>
          Phasellus lorem quam molestie id quisque diam aenean nulla in.
          Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
          condimentum id viverra nulla.
        </p>
        <div className='mt-12'>
          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {features.map((feature) => (
              <div key={feature.name} className='pt-6'>
                <div className='flow-root px-6 pb-8 rounded-lg bg-gray-50'>
                  <div className='-mt-6'>
                    <div>
                      <span className='inline-flex items-center justify-center p-3 rounded-md shadow-lg bg-gradient-to-r from-teal-400 to-green-600'>
                        <feature.icon
                          className='w-6 h-6 text-white'
                          aria-hidden='true'
                        />
                      </span>
                    </div>
                    <h3 className='mt-8 text-lg font-medium tracking-tight text-gray-900'>
                      {feature.name}
                    </h3>
                    <p className='mt-5 text-base text-gray-500'>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedGrid;
