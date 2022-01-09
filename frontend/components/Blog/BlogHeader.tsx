const BlogHeader = ({ title, description }) => {
  return (
    <>
      <h1 className="blogHeader">{title}</h1>
      <h5 className="blogDescription">{description}</h5>
    </>
  )
}

export default BlogHeader
