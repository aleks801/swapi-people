import { Route, Routes, useNavigate } from 'react-router-dom'
import { ConfigProvider, Layout } from 'antd'

import swLogo from './assets/sw-logo.svg'
import IndexPage from './pages/index/Index.tsx'
import PeoplePage from './pages/people/People.tsx'

import styles from './App.module.scss'

function App() {
  const navigate = useNavigate()
  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 4,
        },
        components: {
          Layout: {
            colorBgHeader: '#000',
          },
        },
      }}
    >
      <Layout className={styles.root}>
        <Layout.Header className={styles.header}>
          <img src={swLogo} className={styles.logo} alt="logo" onClick={() => navigate('/')} />
          <h1>People viewer</h1>
        </Layout.Header>
        <Layout.Content className={styles.content}>
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/:peopleId" element={<PeoplePage />} />
          </Routes>
        </Layout.Content>

        <Layout.Footer>SWAPI People viewer, {new Date().getFullYear()}</Layout.Footer>
      </Layout>
    </ConfigProvider>
  )
}

export default App
