import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
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

function EditBlog() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [fetching, setFetching] = useState(true)
  const [error, setError] = useState('')
  const [imagePreview, setImagePreview] = useState(null)

  const [form, setForm] = useState({
    title: '',
    author: '',
    categories: '',
    content: '',
    image: null
  })

  // fetch existing blog and prefill form
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/admin/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        const data = await res.json()

        setForm({
          title: data.title || '',
          author: data.author || '',
          categories: data.categories || '',
          content: data.content || '',
          image: null
        })

        if (data.image) setImagePreview(data.image)

      } catch (error) {
        console.error(error)
        setError('Failed to load blog post')
      } finally {
        setFetching(false)
      }
    }

    fetchBlog()
  }, [id])

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

    if (!form.title || !form.author || !form.categories || !form.content) {
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
      if (form.image) formData.append('image', form.image)

      const res = await fetch(`http://localhost:3000/api/admin/edit/${id}`, {
        method: 'PATCH',
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

  if (fetching) return <p className="blog-status">Loading...</p>

  return (
    <div className='add-blog-container'>
      <div className="create-topbar">
        <p className="back-btn" onClick={() => navigate('/admin/dashboard')}>
          <ArrowBackIcon sx={{ fontSize: 18 }} /> Back
        </p>
        <h2>Edit Blog Post</h2>
      </div>

      <div className='add-blog-body'>
        {error && <p className="form-error">{error}</p>}

        <form onSubmit={handleSubmit} className="blog-form">

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


          <div className="form-group">
            <label>Cover Image</label>
            <div className="image-upload" onClick={() => document.getElementById('image-input').click()}>
              {imagePreview ? (
                <img src={imagePreview} alt="preview" className="image-preview" />
              ) : (
                <div className="image-placeholder">
                  <p>Click to upload a new image</p>
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
            {imagePreview && (
              <span className="char-count">Click image to replace</span>
            )}
          </div>

          {/* content */}
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

          <div className='publish-btn'>
            <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? 'Saving...' : 'Save Changes'}
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default EditBlog;