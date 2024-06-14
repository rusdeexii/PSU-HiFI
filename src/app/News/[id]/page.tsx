'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { FaCalendarAlt } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './page.css'

interface NewsItem {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  createdAt: string;
}

const NewsDetails:React.FC = () => {
  const params = useParams();
  const { id } = params;
  const [newsItem, setNewsItem] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState<string | null>(null); // State for error message

  useEffect(() => {
    const fetchNewsItem = async () => {
      if (!id) return;
      try {
        const response = await fetch(`/api/news/${id}`);
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('ข่าวสารนี้ถูกลบไปแล้ว');
          } else {
            throw new Error('Failed to fetch news item');
          }
        }
        const data = await response.json();
        if (!data) {
          throw new Error('ข่าวสารนี้ถูกลบไปแล้ว');
        }
        setNewsItem(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNewsItem();
  }, [id]);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!newsItem) {
    return <div className='container'>ข่าวสารนี้ถูกลบไปแล้ว</div>;
  }

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-6 ">
            <div className="card">
              <img
                src={newsItem.imageUrl}
                className="card-img"
                alt="News"
          
              />
              <div className="card-body">
                <h5 className="card-title">{newsItem.title}</h5>
                <p className="card-text">{newsItem.content}</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">
                  <FaCalendarAlt style={{ marginBottom: '3px' }} /> {newsItem.createdAt}
                </small>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <h4>รายละเอียด</h4>
            <p>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

              1914 translation by H. Rackham
              "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"</p>
          </div>
        </div>
      </div>
      <div className='container mt-4'>
        <div className='row text-center'>
       
        </div>
      </div>

      <Footer />
    </>
  );
};

export default NewsDetails;
