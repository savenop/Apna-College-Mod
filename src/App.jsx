import Nav from './components/Nav.jsx'
import Content from './components/Content.jsx'
import Section2 from './components/Section2.jsx'
import Footor from './components/Footor.jsx'

const App = () => {
  return (
    <div className="bg-black h-auto w-auto text-white font-nunito relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-600 opacity-30 rounded-full blur-[200px]" />
      <div className="absolute top-100 left-0 w-[400px] h-[400px] bg-orange-400 opacity-20 rounded-full blur-[200px]" />

      <Nav />
      <Content />
      <Section2 />
      <Footor />
    </div>
  )
}

export default App