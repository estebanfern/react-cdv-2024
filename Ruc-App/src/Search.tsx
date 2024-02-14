type SearchProps = {
  setBusqueda: React.Dispatch<React.SetStateAction<string>>;
};

export default function Search({ setBusqueda }: SearchProps) {
  return (
    <div>
      <div className="text-center gap-2 mb-3">
        <h1 className="text-3xl">Consulta de RUC</h1>
        <h2 className="text-xl">Ingrese el nombre, apellido o documento...</h2>
      </div>
      <div className="flex justify-center gap-3">
        <input
          type="text"
          onChange={(e) => setBusqueda(e.target.value)}
          className="border-black border-2 rounded-lg"
        />
        <button
          onClick={() => setBusqueda("")}
          className="bg-red-600 py-2 px-4 rounded-lg"
        >
          X
        </button>
      </div>
    </div>
  );
}
