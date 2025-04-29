import { useParams } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { Container } from '../../../../components/Container';
import { ComingSoon } from '../../../../shared/components/ComingSoon';

export const BlogDetails = () => {
  const { blogId = '' } = useParams();

  const Content = blogPosts.find(({ id }) => id === blogId)?.content;

  return (
    <Container>
      <div className="relative py-10 md:py-20">
        {Content ? (
          <div className="text-base md:text-lg">{Content}</div>
        ) : (
          <ComingSoon
            title="Coming Soon"
            description="We're working on bringing you the full article. Stay tuned for updates!"
          />
        )}
      </div>
    </Container>
  );
};
