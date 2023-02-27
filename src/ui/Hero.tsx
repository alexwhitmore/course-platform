import Button from '../components/Button';

export default function Hero() {
  return (
    <div className='relative isolate overflow-hidden bg-gray-900'>
      {/* Below - Hero Gradient */}
      <svg
        viewBox='0 0 1108 632'
        aria-hidden='true'
        className='absolute top-10 left-[calc(50%-4rem)] -z-10 w-[69.25rem] max-w-none transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]'>
        <path
          fill='url(#175c433f-44f6-4d59-93f0-c5c51ad5566d)'
          fillOpacity='.2'
          d='M235.233 402.609 57.541 321.573.83 631.05l234.404-228.441 320.018 145.945c-65.036-115.261-134.286-322.756 109.01-230.655C968.382 433.026 1031 651.247 1092.23 459.36c48.98-153.51-34.51-321.107-82.37-385.717L810.952 324.222 648.261.088 235.233 402.609Z'
        />
        <defs>
          <linearGradient
            id='175c433f-44f6-4d59-93f0-c5c51ad5566d'
            x1='1220.59'
            x2='-85.053'
            y1='432.766'
            y2='638.714'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#4F46E5' />
            <stop offset={1} stopColor='#80CAFF' />
          </linearGradient>
        </defs>
      </svg>
      <div className='mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-40 lg:px-8'>
        <div className='mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8'>
          {/* <img
            className='h-11'
            src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
            alt='Your Company'
          /> */}
          <div className='mt-24 sm:mt-32 lg:mt-16'>
            <a href='#' className='inline-flex space-x-6'>
              {/* 
                TODO: This should lead to new courses
              */}
              <span className='rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-blue-400 ring-1 ring-inset ring-blue-500/20'>
                What's new
              </span>
              <span className='inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300'>
                {/* 
                TODO: This should lead to the most popular courses
              */}
                <span>Most popular</span>
                {/* Right Chevron Icon */}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='h-5 w-5 text-gray-500'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M8.25 4.5l7.5 7.5-7.5 7.5'
                  />
                </svg>
              </span>
            </a>
          </div>
          <h1 className='mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl'>
            Take your career to new heights.
          </h1>
          <p className='mt-6 text-lg leading-8 text-gray-300'>
            Unlock your potential and advance your career with our online
            courses. Gain in-demand skills that will benefit you and your
            future!
          </p>
          <div className='mt-10 flex items-center gap-x-3'>
            {/* 
                TODO: This should lead to the sign up page
              */}
            <Button color='blue'>Get started</Button>
            <Button
              isLink={true}
              href='#'
              variant='ghost'
              // className='text-base font-semibold leading-7 text-white'
            >
              {/* 
                TODO: This should lead to maybe.. a testimonials page?
              */}
              Learn more <span aria-hidden='true'>→</span>
            </Button>
          </div>
        </div>
        <div className='mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32'>
          <div className='max-w-3xl flex-none sm:max-w-5xl lg:max-w-none'>
            {/* 
                TODO: This should be an image or maybe a code snippet, or a person (classic cheese)
              */}
            <img
              src='https://tailwindui.com/img/component-images/dark-project-app-screenshot.png'
              alt='App screenshot'
              width={2432}
              height={1442}
              className='w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
