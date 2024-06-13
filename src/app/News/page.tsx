'use client'
import { useEffect, useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import './page.css';

interface NewsItem {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  createdAt: string;
}

const News = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('th-TH', options);
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/api/news');
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <>
      <Header />
      <div className="container mb-4 mt-4">
        {loading ? (
          <div className="loader-container">
          <div className="loader"></div>
        </div>
        ) : (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {news.map((item) => (
              <div key={item.id} className="col">
                <div className="card h-100">
                  <img src={item.imageUrl} className="card-img-top" alt="News" />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.content}</p>
                  </div>
                  <div className="card-footer mb-4 d-flex justify-content-between align-items-center">
                    <small className="text-muted">
                      <FaCalendarAlt style={{ marginBottom: '3px', marginRight: '6px' }} />
                      {formatDate(item.createdAt)}
                    </small>
                    <Link href={`/News/${item.id}`}>
                      <button className="btn btn-primary">อ่านเพิ่มเติม</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default News;
