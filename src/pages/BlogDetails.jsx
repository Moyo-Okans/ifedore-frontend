import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AttributionRoundedIcon from '@mui/icons-material/AttributionRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import '../styles/blogDetails.css'

function BlogDetails() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/blog/${slug}`)
        const data = await res.json()
        console.log(data)
        setBlog(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchBlog()
  }, [slug])

  if (loading) return <p className="blog-status">Loading...</p>
  if (!blog) return <p className="blog-status">Blog not found.</p>

  return (
    <div className="bg-body">
      <Navbar />

      <div className="bg-topbar">
        <p className="back-btn" onClick={() => navigate(-1)}>
          <ArrowBackIcon sx={{ fontSize: 18 }} /> Back
        </p>
        <h2 className="blog-title">{blog.title}</h2>
        <div className="bg-meta">
          <span className="bg-category">{blog.categories}</span>
          <span className="bg-author"><AttributionRoundedIcon/>{blog.author}</span>
          <span className="bg-date"><CalendarMonthRoundedIcon sx={{
            fontSize: '16px'
          }}/> {blog.createdAt}</span>
        </div>
      </div>

      <div className="bg-content">
        {blog.image && (
          <img src={blog.image} alt={blog.title} className="bg-image" />
        )}

        {/* <div className="bg-meta">
          <span className="bg-category">{blog.categories}</span>
          <span className="bg-author">By {blog.author}</span>
          <span className="bg-date">{blog.createdAt}</span>
        </div> */}

        <div className="bg-text" dangerouslySetInnerHTML={{ __html: blog.content }}/>
      </div>

      <Footer />
    </div>
  )
}

export default BlogDetails