import React from 'react'

export default function TabAcerca(){
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-3">Acerca del Proyecto</h3>
      <p className="text-gray-700">Visión a futuro: implementar mejoras continuas basadas en datos, reducir emisiones y hacer al transporte público más accesible y eficiente. Este proyecto sirve como prototipo académico que integra IoT, Big Data y visualización para la toma de decisiones.</p>

      <div className="mt-4">
        <h4 className="font-semibold">Mejora continua</h4>
        <ol className="list-decimal ml-6 text-gray-700">
          <li>Medir KPIs en tiempo real</li>
          <li>Analizar y comparar periodos</li>
          <li>Implementar ajustes y monitorear resultados</li>
        </ol>
      </div>
    </div>
  )
}
