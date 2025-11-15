import React, {useState} from 'react'
import TabInicio from './components/TabInicio'
import TabTecnologia from './components/TabTecnologia'
import TabGestion from './components/TabGestion'
import TabPowerBI from './components/TabPowerBI'
import TabAcerca from './components/TabAcerca'

export default function App(){
  const [tab, setTab] = useState('inicio')
  const tabs = [
    {id:'inicio', label:'Inicio'},
    {id:'tecnologia', label:'Tecnología'},
    {id:'gestion', label:'Gestión'},
    {id:'powerbi', label:'Power BI'},
    {id:'acerca', label:'Acerca'}
  ]
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e6fffb] to-white text-gray-900">
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-md bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white font-bold">SI</div>
            <div>
              <h1 className="text-xl font-semibold">Transporte Público Inteligente</h1>
              <p className="text-sm text-gray-500">Ciudad Smart — Proyecto Big Data</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-3">
            {tabs.map(t=>(
              <button key={t.id} onClick={()=>setTab(t.id)} className={tab===t.id? 'px-4 py-2 rounded-md bg-gradient-to-r from-primary to-accent text-white font-medium' : 'px-4 py-2 rounded-md bg-white border text-gray-700 hover:shadow'}>
                {t.label}
              </button>
            ))}
          </nav>
          <div className="md:hidden">
            <select value={tab} onChange={(e)=>setTab(e.target.value)} className="border rounded-md p-2">
              {tabs.map(t=> <option key={t.id} value={t.id}>{t.label}</option>)}
            </select>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        <div className="mb-6">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img src="https://img.freepik.com/vector-gratis/pasajeros-esperando-autobus-ciudad-cola-ciudad-camino-plano-ilustracion-vectorial-transporte-publico-estilo-vida-urbano_74855-8493.jpg" alt="hero" className="w-full h-56 object-cover"/>
            <div className="p-6 bg-gradient-to-r from-white/80 to-transparent -mt-16">
              <h2 className="text-3xl font-bold text-gray-900">Ciudad Inteligente — Transporte Público Inteligente</h2>
              <p className="mt-2 text-gray-700">Optimización de flota, experiencia del pasajero y eficiencia operativa mediante IoT y Big Data.</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <aside className="md:w-64">
              <ul className="space-y-2">
                {tabs.map(t=>(
                  <li key={t.id}>
                    <button onClick={()=>setTab(t.id)} className={tab===t.id? 'w-full text-left px-4 py-3 rounded-md bg-gradient-to-r from-primary to-accent text-white font-medium' : 'w-full text-left px-4 py-3 rounded-md hover:bg-gray-50'}>
                      {t.label}
                    </button>
                  </li>
                ))}
              </ul>
            </aside>

            <section className="flex-1">
              {tab==='inicio' && <TabInicio />}
              {tab==='tecnologia' && <TabTecnologia />}
              {tab==='gestion' && <TabGestion />}
              {tab==='powerbi' && <TabPowerBI />}
              {tab==='acerca' && <TabAcerca />}
            </section>
          </div>
        </div>
      </main>

      <footer className="bg-deep text-white mt-10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="font-semibold">Transporte Público Inteligente</h3>
            <p className="text-sm text-white/80">Proyecto académico — Big Data & IoT</p>
          </div>
          <div className="text-sm text-white/80">© 2025 — Universidad de Cundinamarca</div>
        </div>
      </footer>
    </div>
  )
}
