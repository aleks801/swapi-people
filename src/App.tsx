import { Route, Routes, useNavigate } from 'react-router-dom'
import { ConfigProvider, Layout, theme, Typography } from 'antd'

import swLogo from './assets/sw-logo.svg'
import IndexPage from './pages/Index'
import PeoplePage from './pages/People'
import { routes } from './routes'

import styles from './App.module.scss'

function App() {
  const navigate = useNavigate()

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          borderRadius: 4,
        },
      }}
    >
      <Layout className={styles.root}>
        <Layout.Header className={styles.header}>
          <img src={swLogo} className={styles.logo} alt="logo" onClick={() => navigate(routes.index)} />
          <Typography.Title level={3} className={styles.title}>
            People viewer
          </Typography.Title>
        </Layout.Header>
        <Layout.Content className={styles.content}>
          <Routes>
            <Route path={routes.index} element={<IndexPage />} />
            <Route path={routes.peoplePage} element={<PeoplePage />} />
          </Routes>
        </Layout.Content>

        <Layout.Footer>SWAPI People viewer, {new Date().getFullYear()}</Layout.Footer>
      </Layout>
    </ConfigProvider>
  )
}

export default App
