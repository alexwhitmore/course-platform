import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { name: 'Article', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    author: {
      name: 'Roel Aufderehar',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    readingLength: '6 min',
  },
  {
    id: 2,
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    category: { name: 'Video', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    author: {
      name: 'Brenna Goyette',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    readingLength: '4 min',
  },
  {
    id: 3,
    title: 'Improve your customer experience',
    href: '#',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    category: { name: 'Case Study', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    author: {
      name: 'Daniela Metz',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    readingLength: '11 min',
  },
];

const Blog = () => {
  return (
    <div className='relative py-16 bg-white sm:py-24 lg:py-32'>
      <div className='relative'>
        <div className='max-w-md px-6 mx-auto text-center sm:max-w-3xl lg:max-w-7xl lg:px-8'>
          <h2 className='text-lg font-semibold text-green-500'>Learn</h2>
          <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Helpful Resources
          </p>
          <p className='mx-auto mt-5 text-xl text-gray-500 max-w-prose'>
            Phasellus lorem quam molestie id quisque diam aenean nulla in.
            Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
            condimentum id viverra nulla.
          </p>
        </div>
        <div className='grid max-w-md gap-8 px-6 mx-auto mt-12 sm:max-w-lg lg:max-w-7xl lg:grid-cols-3 lg:px-8'>
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className='flex flex-col overflow-hidden rounded-lg shadow-lg'>
              <div className='flex-shrink-0'>
                <img
                  className='object-cover w-full h-48'
                  src={post.imageUrl}
                  alt=''
                />
              </div>
              <div className='flex flex-col justify-between flex-1 p-6 bg-white'>
                <div className='flex-1'>
                  <span className='inline-flex items-center rounded-full bg-red-200/70 px-2.5 py-0.5 text-xs font-medium text-gray-700'>
                    {post.category.name}
                  </span>
                  {/* <p className='text-sm font-medium text-green-500'>
                    <a href={post.category.href} className='hover:underline'>
                      {post.category.name}
                    </a>
                  </p> */}
                  <Link href={post.href} className='block mt-2'>
                    <p className='text-xl font-semibold text-gray-900'>
                      {post.title}
                    </p>
                    <p className='mt-3 text-base text-gray-500'>
                      {post.preview}
                    </p>
                  </Link>
                </div>
                <div className='flex items-center mt-6'>
                  <div className='flex-shrink-0'>
                    <Link href={post.author.href}>
                      <img
                        className='w-10 h-10 rounded-full'
                        src={post.author.imageUrl}
                        alt={post.author.name}
                      />
                    </Link>
                  </div>
                  <div className='ml-3'>
                    <p className='text-sm font-medium text-gray-900'>
                      <Link href={post.author.href} className='hover:underline'>
                        {post.author.name}
                      </Link>
                    </p>
                    <div className='flex space-x-1 text-sm text-gray-500'>
                      <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden='true'>&middot;</span>
                      <span>{post.readingLength} read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
