import React from 'react'

export default function TabPowerBI(){
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-3">Panel Power BI</h3>
      <p className="text-gray-700 mb-4">Aquí pueden visualizar el Dashboard con los datos reales generado a través de la aplicación Power BI</p>

      <div className="iframe-wrap border rounded-lg overflow-hidden">
        <iframe
          title="Power BI Dashboard"
          src="https://app.powerbi.com/view?r=eyJrIjoiNjBmZjRmYWQtOTdlZC00M2VmLTgwMTQtMjNjYzkyZDcxNDQxIiwidCI6IjA3ZGE2N2EwLTFmNDMtNGU4Yy05NzdmLTVmODhiNjQ3MGVlNiIsImMiOjR9"
          width="100%"
          height="600"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}
