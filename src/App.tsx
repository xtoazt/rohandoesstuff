import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <Header />
            <Dashboard />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

