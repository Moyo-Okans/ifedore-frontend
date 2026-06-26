import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill-new'
import 'react-quill-new/dist/quill.snow.css'
import '../styles/add-edit-blog.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const categories = ['News', 'Development', 'Health', 'Education', 'Agriculture']

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ['bold', 'italic', 'underline'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link'],
    ['clean']
  ]
}

function AddBlog() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [imagePreview, setImagePreview] = useState(null)

  const [form, setForm] = useState({
    title: '',
    author: '',
    categories: '',
    summary: '',
    content: '',
    image: null
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleImage = (e) => {
    const file = e.target.files[0]
    if (file) {
      setForm({ ...form, image: file })
      setImagePreview(URL.createObjectURL(file))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!form.title || !form.author || !form.categories || !form.content || !form.image) {
      setError('All fields are required')
      return
    }

    setLoading(true)

    try {
      const formData = new FormData()
      formData.append('title', form.title)
      formData.append('author', form.author)
      formData.append('categories', form.categories)
      formData.append('summary', form.summary)
      formData.append('content', form.content)
      formData.append('image', form.image)

      const res = await fetch('https://ifedore-backend.onrender.com/api/admin/create', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        body: formData
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.message || 'Something went wrong')
        return
      }

      navigate('/admin/dashboard')

    } catch (error) {
      console.error(error)
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='add-blog-container'>
      <div className="create-topbar">
        <p className="back-btn" onClick={() => navigate('/admin/dashboard')}>
          <ArrowBackIcon sx={{ fontSize: 18 }} /> Back
        </p>
        <h2>Add New Post</h2>
      </div>

      <div className='add-blog-body'>
        {error && <p className="form-error">{error}</p>}

        <form onSubmit={handleSubmit} className="blog-form">

          {/* title */}
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              name="title"
              placeholder="Enter blog title"
              value={form.title}
              onChange={handleChange}
            />
          </div>

          {/* author */}
          <div className="form-group">
            <label>Author</label>
            <input
              type="text"
              name="author"
              placeholder="Enter author name"
              value={form.author}
              onChange={handleChange}
            />
          </div>

          {/* category */}
          <div className="form-group">
            <label>Category</label>
            <select
              name="categories"
              value={form.categories}
              onChange={handleChange}
            >
              <option value="">Select a category</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>


          {/* image */}
          <div className="form-group">
            <label>Cover Image</label>
            <div className="image-upload" onClick={() => document.getElementById('image-input').click()}>
              {imagePreview ? (
                <img src={imagePreview} alt="preview" className="image-preview" />
              ) : (
                <div className="image-placeholder">
                  <p>Click to upload image</p>
                  <span>JPG, PNG, WEBP</span>
                </div>
              )}
            </div>
            <input
              id="image-input"
              type="file"
              accept="image/*"
              onChange={handleImage}
              style={{ display: 'none' }}
            />
          </div>

          {/* content - rich text */}
          <div className="form-group">
            <label>Content</label>
            <ReactQuill
              theme="snow"
              value={form.content}
              onChange={(value) => setForm({ ...form, content: value })}
              modules={modules}
              placeholder="Write your blog post here..."
              className="quill-editor"
            />
          </div>

          <div className="publish-btn">
            <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? 'Publishing...' : 'Publish Post'}
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default AddBlog;