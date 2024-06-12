'use client'
import React, { useState, useEffect } from 'react';
import { PrismaClient, News } from '@prisma/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../globals.css';
import Sidebar from '../components/Sidebar';
import { Modal, Button, Form } from 'react-bootstrap';
import { MdPersonAddAlt1 } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { MdAddToPhotos } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const prisma = new PrismaClient();

const AdminPage: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [loadedNews, setLoadedNews] = useState<News[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);

  const handleClose = () => setShowModal(false);

  const handleShow = () => {
    resetForm();
    setShowModal(true);
    setEditMode(false);
  };

  const resetForm = () => {
    setTitle('');
    setContent('');
    setImageUrl('');
    setEditId(null);
  };

  const fetchNews = async () => {
    try {
      const response = await fetch('/api/news');
      if (!response.ok) {
        throw new Error('Failed to fetch news');
      }
      const data = await response.json();
      setLoadedNews(data);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleEditNews = async (id: number) => {
    const updatedData = { title, content, imageUrl };
    try {
      const response = await fetch(`/api/news/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
      if (!response.ok) {
        throw new Error('Failed to edit news');
      }
      toast.success('แก้ไขโพสต์เสร็จเรียบร้อย!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      fetchNews();
      handleClose();
    } catch (error: any) {
      toast.error(error.message, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleDeleteNews = async (id: number) => {
    const confirmDelete = window.confirm("คุณแน่ใจหรือไม่ว่าต้องการลบ?");
    if (confirmDelete) {
      try {
        const response = await fetch(`/api/news/${id}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error('Failed to delete news');
        }
        toast.success('ลบโพสต์เสร็จเรียบร้อย!!', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        fetchNews();
      } catch (error: any) {
        toast.error(error.message, {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  };
  

  const handleAddNews = async () => {
    try {
      const response = await fetch('/api/news', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content, imageUrl }),
      });
      if (!response.ok) {
        throw new Error('Failed to add news. Please try again later.');
      }
      toast.success('สร้างโพสต์เสร็จเรียบร้อย!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      fetchNews();
      handleClose();
    } catch (error: any) {
      toast.error(error.message, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleOpenEditModal = (newsItem: News) => {
    setTitle(newsItem.title);
    setContent(newsItem.content);
    setImageUrl(newsItem.imageUrl);
    setEditId(newsItem.id);
    setEditMode(true);
    setShowModal(true);
  };

  const handleSubmit = async () => {
    if (!title || !content || !imageUrl) {
      toast.warning('กรุณากรอกข้อมูลให้ครบ!!', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    if (editMode && editId !== null) {
      await handleEditNews(editId);
    } else {
      await handleAddNews();
    }
    resetForm();
  };

  return (
    <>
      <Sidebar />
      <ToastContainer />
      <div className="container mt-4">
        <div className="mb-3 mt-4">
          <button className="btn btn-success" onClick={handleShow}>
            <MdAddToPhotos style={{ marginBottom: '6px', marginRight: '4px' }} />สร้างโพสต์
          </button>

          <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{editMode ? 'แก้ไขโพสต์' : 'สร้างโพสต์'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="formTitle">
                  <Form.Label>ชื่อ</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter title"
                    value={title}
                    required
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formContent">
                  <Form.Label>รายละเอียด</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter content"
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formImageUrl">
                  <Form.Label>URL รูปภาพ</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter image URL"
                    value={imageUrl}
                    required
                    onChange={(e) => setImageUrl(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleSubmit}>
                <FaCircleCheck style={{ marginBottom: '6px', marginRight: '4px' }} />{editMode ? 'แก้ไข' : 'สร้าง'}
              </Button>
              <Button variant="secondary" onClick={handleClose}>
                <MdCancel style={{ marginBottom: '6px', marginRight: '4px' }} /> ยกเลิก
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <table className="table table-bordered table-hover table-striped">
          <thead>
            <tr className='text-center'>
              <th scope="col">รหัส</th>
              <th scope="col">ชื่อ</th>
              <th scope="col">เนื้อหา</th>
              <th scope="col">วันที่</th>
              <th scope="col">แก้ไข</th>
              <th scope="col">ลบ</th>
            </tr>
          </thead>
          <tbody>
            {loadedNews
              .sort((a, b) => a.id - b.id)
              .map((newsItem: News) => (
                <tr className='text-center' key={newsItem.id}>
                  <td>{newsItem.id}</td>
                  <td>{newsItem.title}</td>
                  <td>{newsItem.content}</td>
                  <td>{new Date(newsItem.createdAt).toLocaleDateString()}</td>
                  <td>
                    <button className="btn btn-warning mr-2" onClick={() => handleOpenEditModal(newsItem)}>
                      <FaEdit style={{ marginBottom: '6px', marginRight: '4px' }} />แก้ไข
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-danger" onClick={() => handleDeleteNews(newsItem.id)}>
                      <MdDeleteForever style={{ marginBottom: '6px', marginRight: '4px' }} />ลบ
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminPage;
