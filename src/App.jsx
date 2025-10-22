import Nav from './components/nav'
import Content from './components/content'
import Image from './components/image'

const App = () => {
  return (
    <div className="bg-black h-screen w-auto text-white font-nunito">
      <Nav />
      <Content />
      <Image />
    </div>
  )
}

export default App