import Layout from '../components/layouts/article'
import IndexBanner from '../components/index-banner'
import Featured from '../components/featured'
import Categories from '../components/categories'

const Homepage = () => {
  return (
    <Layout>
      <IndexBanner />
      <Featured />
      <Categories />
    </Layout>
  )
}

export default Homepage
