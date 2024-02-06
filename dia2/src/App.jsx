import reactLogo from './assets/react.svg'
import './App.css'
import TituloSubtitulo from './TituloSubtitulo'
import BasicCard from './BasicCard'

function App() {

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <TituloSubtitulo />
      <BasicCard />
      <a className="read-the-docs" href="https://github.com/estebanfern/react-cdv-2024" target="_blank" rel='noreferrer'>
        Link al Repositorio
      </a>
    </>
  )
}

export default App
