'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { FaCalendarAlt } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface NewsItem {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  createdAt: string;
}

const NewsDetails = () => {
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
    return <div>ข่าวสารนี้ถูกลบไปแล้ว</div>;
  }

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <img src={newsItem.imageUrl} className="card-img-top" alt="News" />
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewsDetails;
