import React from 'react'

export default function TabInicio(){
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-3">¿Qué es este proyecto?</h3>
      <p className="text-gray-700 mb-4">Este proyecto presenta un enfoque integral para la implementación de un sistema de Transporte Público Inteligente dentro de una Ciudad Smart. Se explica la infraestructura, los dispositivos, el flujo de datos y los beneficios para operadores y usuarios.</p>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="p-4 border rounded-lg">
          <h4 className="font-semibold">Objetivo</h4>
          <p className="text-sm text-gray-600">Mejorar la gestión de buses, reducir tiempos de espera y optimizar rutas usando datos en tiempo real.</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h4 className="font-semibold">Alcance</h4>
          <p className="text-sm text-gray-600">Integración de sensores, tarjetas de pago, paradas conectadas y plataformas de análisis.</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h4 className="font-semibold">Beneficios</h4>
          <p className="text-sm text-gray-600">Mejor experiencia del usuario, costos operativos reducidos y mantenimiento predictivo.</p>
        </div>
      </div>

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <img src="https://png.pngtree.com/png-clipart/20231005/original/pngtree-individuals-in-anticipation-of-public-transport-at-a-bus-stop-vector-png-image_12959575.png" alt="bus" className="w-full h-44 object-cover rounded-lg"/>
        <div>
          <h4 className="font-semibold">Cómo se articula</h4>
          <p className="text-gray-700">Los dispositivos instalados en la flota y en las paradas envían telemetría a una plataforma central donde los pipelines de Big Data procesan y almacenan información que luego es visualizada en dashboards (Power BI) para la toma de decisiones operativas.</p>
        </div>
      </div>
    </div>
  )
}
