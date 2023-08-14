// import { useState } from "react"
// import reactLogo from "./assets/react.svg"
// import viteLogo from "/vite.svg"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import PeoplePage from "./pages/people/People.tsx"
import IndexPage from "./pages/index/Index.tsx"
import { Layout } from "antd"

function App() {
  return (
    <Layout>
      <Layout.Header>header</Layout.Header>
      <Layout>
        <Layout.Content>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<IndexPage />} />
              <Route path="/:peopleId" element={<PeoplePage />} />
            </Routes>
          </BrowserRouter>
        </Layout.Content>
      </Layout>
      <Layout.Footer>123</Layout.Footer>
    </Layout>
  )
  // return (
  //   <>
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
  //   </>
  // )
}

export default App
