
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import '../styles/admin.css';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import AddIcon from '@mui/icons-material/Add';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

function AdminDashboard() {
  const [dropdown, setDropdown] = useState(false)
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  })

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/admin/all', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        const data = await res.json()
        setBlogs(data.blogs)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    fetchBlogs()
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/admin/login')
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this post?')) return
    try {
      await fetch(`http://localhost:3000/api/admin/delete/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      setBlogs(blogs.filter(blog => blog._id !== id))
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="admin-dashboard">

      {/* topbar */}
      <div className="topbar">
        <div className="tb-left">
          <h2>Content Dashboard</h2>
          <p>Create, edit, and manage news and blog posts for the public</p>
        </div>
        <div className="tb-right">
          <button
            className="add-blog-btn"
            onClick={() => navigate('/admin/create')}
          >
            <AddIcon sx={{ fontSize: 18 }} /> New Post
          </button>
          <div className="admin-menu">
            <div
              className="admin-trigger"
              onClick={() => setDropdown(!dropdown)}
            >
              <span>Admin</span>
              <ExpandMoreOutlinedIcon
                sx={{
                  fontSize: 20,
                  color: 'white',
                  transform: dropdown ? 'rotate(180deg)' : 'rotate(0)',
                  transition: 'transform 0.2s ease'
                }}
              />
            </div>
            {dropdown && (
              <div className="dropdown">
                <p onClick={handleLogout}>Logout</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* body */}
      <div className="dashboard-body">
        <div className="dashboard-inner">
          <div className="table-header">
            <h2>All Posts</h2>
          </div>

          {loading ? (
            <p className="dash-status">Loading...</p>
          ) : blogs.length === 0 ? (
            <p className="dash-status">No blog posts yet.</p>
          ) : (
            <table className="blog-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Author</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map(blog => (
                  <tr key={blog._id}>
                    <td className="table-title">{blog.title}</td>
                    <td>
                      <span className="table-category">{blog.categories}</span>
                    </td>
                    <td>{blog.author}</td>
                    <td>{new Date(blog.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric', month: 'short', day: 'numeric'
                    })}</td>
                    <td className="table-actions">
                      <button
                        className="edit-btn"
                        onClick={() => navigate(`/admin/edit/${blog._id}`)}
                      >
                        <EditOutlinedIcon sx={{ fontSize: 16 }} /> Edit
                      </button>
                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(blog._id)}
                      >
                        <DeleteOutlineOutlinedIcon sx={{ fontSize: 16 }} /> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard;