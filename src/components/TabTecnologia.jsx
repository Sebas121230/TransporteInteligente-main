import React from 'react'

export default function TabTecnologia(){
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-3">Tecnologías y Dispositivos</h3>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 border rounded-lg">
          <h4 className="font-semibold">Sensores en Buses</h4>
          <ul className="list-disc ml-5 text-sm text-gray-700">
            <li>GPS para ubicación y geofencing</li>
            <li>Sensores de ocupación (cámaras o infrarrojos)</li>
            <li>Acelerómetros y telemetría del motor</li>
          </ul>
        </div>

        <div className="p-4 border rounded-lg">
          <h4 className="font-semibold">Infraestructura en Paradas</h4>
          <ul className="list-disc ml-5 text-sm text-gray-700">
            <li>Paneles informativos y Wi‑Fi</li>
            <li>Sensores ambientales y cámaras para seguridad</li>
            <li>Estaciones de recarga para IoT</li>
          </ul>
        </div>
      </div>

      <div className="mt-4 grid md:grid-cols-3 gap-4">
        <div className="p-4 rounded-lg bg-gradient-to-br from-white to-slate-50 border">
          <h5 className="font-semibold">Tarjetas RFID / NFC</h5>
          <p className="text-sm text-gray-700">Validación sin contacto y registro de viajes para análisis de demanda.</p>
        </div>
        <div className="p-4 rounded-lg bg-gradient-to-br from-white to-slate-50 border">
          <h5 className="font-semibold">Comunicaciones</h5>
          <p className="text-sm text-gray-700">3G/4G/5G, LoRaWAN y Wi‑Fi para gateways de recolección.</p>
        </div>
        <div className="p-4 rounded-lg bg-gradient-to-br from-white to-slate-50 border">
          <h5 className="font-semibold">Edge & Gateways</h5>
          <p className="text-sm text-gray-700">Procesamiento ligero en el borde para reducir latencia y tráfico.</p>
        </div>
      </div>
    </div>
  )
}
