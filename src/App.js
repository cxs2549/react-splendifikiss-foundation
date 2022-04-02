import { Fragment } from "react"
import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"

const App = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route exact path="/react-splendifikiss-foundation" element={<Home />} />
        <Route path="*" element={<div className="h-[55vh] p-8">Not Found</div>} />
      </Routes>
      <Footer />
    </Fragment>
  )
}
export default App
