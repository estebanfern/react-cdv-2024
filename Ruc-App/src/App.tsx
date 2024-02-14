import { useState } from 'react'
import Search from './Search';
import RucTable from './RucTable';

function App() {
  const [busqueda, setBusqueda] = useState<string>("");
  const [limit, setLimit] = useState<number>(5);

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center gap-3'>
      <div className='relative px-20'>
        <select name="limit" onChange={(e) => setLimit(Number(e.target.value))} className='absolute bottom-0 left-0'>
          <option value={5}>5</option>
          <option value={10}>10</option>
        </select>
        <Search setBusqueda={setBusqueda} />
      </div>
      <RucTable busqueda={busqueda} limit={limit} />
    </div>
  )
}

export default App
