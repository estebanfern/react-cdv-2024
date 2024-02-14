import axios from "axios";
import { useEffect, useState } from "react";

function RucItem({ ruc, nombre }: { ruc: string; nombre: string }) {
  return (
    <tr>
      <td className="border-black border-2 text-center">{ruc}</td>
      <td className="border-black border-2 text-center">{nombre}</td>
    </tr>
  );
}

export default function RucTable({
  busqueda,
  limit,
}: {
  busqueda: string;
  limit: number;
}) {
  const [TableRows, setTableRows] = useState<JSX.Element[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      let tableData = [];
      let newTableRows = [];
      if (busqueda.length >= 3) {
        tableData = await axios
          .get("https://turuc.com.py/api/contribuyente/search", {
            params: {
              search: busqueda,
              page: 0,
            },
          })
          .then((res) => res.data["data"]["contribuyentes"]);
        for (let i = 0; i < tableData.length; i++) {
          if (i < limit) {
            newTableRows.push(
              <RucItem
                key={tableData[i]["ruc"]}
                ruc={tableData[i]["ruc"]}
                nombre={tableData[i]["razonSocial"]}
              />,
            );
          }
        }
        setTableRows(newTableRows);
      }
    };

    fetchData();
  }, [busqueda, limit]);

  return (
    <table className="w-full border-black border-2">
      <thead>
        <tr>
          <th className="border-black border-2">Ruc</th>
          <th className="border-black border-2">Nombre</th>
        </tr>
      </thead>
      <tbody>{TableRows}</tbody>
    </table>
  );
}
