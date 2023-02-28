const CallToAction = () => {
  return (
    <div className='bg-white'>
      <div className='py-24 mx-auto max-w-7xl sm:px-6 sm:py-32 lg:px-8'>
        <div className='relative px-6 py-24 overflow-hidden text-center bg-gray-900 shadow-2xl isolate sm:rounded-3xl sm:px-16'>
          <h2 className='max-w-2xl mx-auto text-3xl font-bold tracking-tight text-white sm:text-4xl'>
            Boost your productivity today.
          </h2>
          <p className='max-w-xl mx-auto mt-6 text-lg leading-8 text-gray-300'>
            Incididunt sint fugiat pariatur cupidatat consectetur sit cillum
            anim id veniam aliqua proident excepteur commodo do ea.
          </p>
          <div className='flex items-center justify-center mt-10 gap-x-6'>
            <a
              href='#'
              className='rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'>
              Get started
            </a>
            <a href='#' className='text-sm font-semibold leading-6 text-white'>
              Learn more <span aria-hidden='true'>→</span>
            </a>
          </div>
          <svg
            viewBox='0 0 1024 1024'
            className='absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]'
            aria-hidden='true'>
            <circle
              cx={512}
              cy={512}
              r={512}
              fill='#2F8132'
              fillOpacity='0.7'
            />
            <defs>
              <radialGradient id='827591b1-ce8c-4110-b064-7cb85a0b1217'>
                <stop stopColor='#7775D6' />
                <stop offset={1} stopColor='#E935C1' />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
