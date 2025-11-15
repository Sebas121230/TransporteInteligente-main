import React from 'react'

export default function TabGestion(){
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-3">Gestión del Transporte</h3>

      <p className="text-gray-700 mb-4">Con los datos recolectados se mejora la operación en múltiples frentes:</p>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="p-4 border rounded-lg">
          <h4 className="font-semibold">Control de Flota</h4>
          <p className="text-sm text-gray-700">Rutas optimizadas, redistribución dinámica y monitoreo en tiempo real.</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h4 className="font-semibold">Gestión de Pasajeros</h4>
          <p className="text-sm text-gray-700">Predicción de demanda, tiempos de espera y mejoras en el servicio.</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h4 className="font-semibold">Paradas Inteligentes</h4>
          <p className="text-sm text-gray-700">Paneles con ETA, seguridad y datos ambientales.</p>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="font-semibold">KPIs relevantes</h4>
        <ul className="list-disc ml-5 text-sm text-gray-700">
          <li>Horarios de alta demanda de servicios</li>
          <li>Ocupación media por ruta</li>
          <li>Puntualidad (%)</li>
          <li>Costos de mantenimiento por km</li>
        </ul>
      </div>
    </div>
  )
}
