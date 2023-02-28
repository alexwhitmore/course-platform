const FeaturedScreenshot = () => {
  return (
    <div className='relative pt-16 bg-gray-50 sm:pt-24 lg:pt-32'>
      <div className='max-w-md px-6 mx-auto text-center sm:max-w-3xl lg:max-w-7xl lg:px-8'>
        <h2 className='text-xl font-semibold text-green-500'>Sub heading</h2>
        <div>
          <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Start learning today.
          </p>
          <p className='mx-auto mt-5 text-xl text-gray-500 max-w-prose'>
            Phasellus lorem quam molestie id quisque diam aenean nulla in.
            Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
            condimentum id viverra nulla.
          </p>
        </div>
        {/* TODO: This should eventually be updated to a screen shot of a future course video */}
        <div className='mt-12 -mb-10 sm:-mb-24 lg:-mb-80'>
          <img
            className='rounded-lg shadow-xl ring-1 ring-black ring-opacity-5'
            src='https://tailwindui.com/img/component-images/green-project-app-screenshot.jpg'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedScreenshot;
