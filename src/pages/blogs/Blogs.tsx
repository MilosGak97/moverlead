import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { CurvyLineIcon } from '../../components/iconography/CurvyLineIcon';
import { SocialNetworkLinks } from '../web/components/SocialNetworkLinks';
import { BlogPost } from './components/BlogPost';
import { blogPosts } from './data/blogPosts';

export const Blogs = () => {
  return (
    <>
      <Container>
        <div className="mt-10 text-center max-w-3xl mx-auto">
          <h1
            className={
              'font-bold text-3xl tracking-tight text-slate-900 sm:text-4xl'
            }
          >
            Explore the MoverLead.com{' '}
            <span className="relative text-primary">
              <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-20 hidden sm:block">
                <CurvyLineIcon />
              </div>
              Blogs
            </span>
          </h1>
          <p className={'mt-6 text-lg tracking-tight text-slate-700'}>
            From{' '}
            <span className="text-primary font-medium">
              branding to lead generation
            </span>
            , explore our expert-backed content created to help you stand out in
            the <span className="text-primary font-medium">moving</span>{' '}
            industry.
          </p>
        </div>
        <div className="mt-10 flex items-center justify-center gap-6">
          Follow us on:
          <SocialNetworkLinks wrapperClassName="gap-4" />
        </div>
        <div className="my-16 sm:my-20 grid grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))] gap-8">
          {blogPosts.map(({ id, ...props }) => (
            <BlogPost
              key={id}
              {...props}
              onClick={() => console.log(props.title)}
            />
          ))}
        </div>
      </Container>
      <div className="bg-primary py-6 text-white">
        <Container className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="flex flex-col gap-2 col-span-3">
            <h2 className=" font-bold text-3xl">Subscribe to our blog</h2>
            <p>
              Get practical tips, marketing ideas, and industry insights to help
              your moving business grow straight to your inbox.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-6 col-span-2">
            <input
              type="text"
              className="w-full rounded-md bg-white p-2 text-base text-gray-900 outline-none placeholder:text-slate-400"
              placeholder="Email address"
            />
            <Button color="white" className="text-primary w-full">
              Subscribe
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
};
