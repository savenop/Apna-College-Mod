import Nav from './components/nav'
import Content from './components/content'
import Image from './components/image'
import Section2 from './components/section2'

const App = () => {
  return (
    <div className="bg-black h-[2000px] w-auto text-white font-nunito relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-600 opacity-30 rounded-full blur-[200px]" />
      <div className="absolute top-100 left-0 w-[400px] h-[400px] bg-orange-400 opacity-20 rounded-full blur-[200px]" />

      <Nav />
      <Content />
      <Image />
      <Section2 />
    </div>
  )
}

export default App