import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchIcon from '@mui/icons-material/Search';
import { TextSnippetOutlined } from '@mui/icons-material';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import AgricultureOutlinedIcon from '@mui/icons-material/AgricultureOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import '../styles/blog.css';

const categories = ['All', 'News', 'Development', 'Health', 'Education', 'Agriculture'];

const categoryConfig = {
  Development: {
    bg: '#4A2E09',
    icon: <ConstructionOutlinedIcon sx={{ color: '#d4af37', fontSize: '45px' }} />
  },
  News: {
    bg: '#262624',
    icon: <TextSnippetOutlined sx={{ color: '#9d9d9c', fontSize: '45px' }} />
  },
  Education: {
    bg: '#2c591b',
    icon: <SchoolOutlinedIcon sx={{ color: '#6ceda3', fontSize: '45px' }} />
  },
  Health: {
    bg: '#4A0909',
    icon: <MonitorHeartOutlinedIcon sx={{ color: '#ba5454', fontSize: '45px' }} />
  },
  Agriculture: {
    bg: '#00280e',
    icon: <AgricultureOutlinedIcon sx={{ color: '#539c37', fontSize: '45px' }} />
  },
  default: {
    bg: '#262624',
    icon: <ArticleOutlinedIcon sx={{ color: '#9d9d9c', fontSize: '45px' }} />
  }
}

const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

function Blog() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true)
        const params = new URLSearchParams()
        if (activeCategory !== 'All') params.append('category', activeCategory)
        if (search) params.append('search', search)

        const res = await fetch(`https://ifedore-backend.onrender.com/api/blog/all?${params}`)
        const data = await res.json()
        setBlogs(data.blogs)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [activeCategory])

  // search filters locally on the fetched blogs
  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  )

  const getConfig = (category) => categoryConfig[category] || categoryConfig.default

  return (
    <div className="blog-container">
      <Navbar />
      <div className="blog-topbar">
        <h2>News and Blog</h2>
      </div>
      <div className="blog-body">
        <div className="blog-top">
          <div className="categories">
            {categories.map(cat => (
              <p
                key={cat}
                className={activeCategory === cat ? 'active-category' : ''}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </p>
            ))}
          </div>
          <div className="search-bar">
            <SearchIcon sx={{ fontSize: 20, color: 'white' }} />
            <input
              type="search"
              placeholder='Search for a blog....'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {loading ? (
          <p className="blog-status">Loading...</p>
        ) : filteredBlogs.length === 0 ? (
          <p className="blog-status">No blogs found.</p>
        ) : (
          <div className="blog-cards">
            {filteredBlogs.map((blog) => {
              const config = getConfig(blog.categories)
              return (
                <div
                  key={blog._id}
                  className="blog-card"
                  onClick={() => navigate(`/blog/${blog.slug}`)}
                >
                  <div className="category-icon" style={{ backgroundColor: config.bg }}>
                    {blog.image
                      ? <img src={blog.image} alt={blog.title} />
                      : config.icon
                    }
                  </div>
                  <div className="category">
                    <p>{blog.categories}</p>
                  </div>
                  <p className="title">{blog.title}</p>
                  <p className="date">{formatDate(blog.createdAt)}</p>
                </div>
              )
            })}
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Blog