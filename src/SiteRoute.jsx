import React from 'react'
import { Form, Route, Routes } from 'react-router-dom'
import Home from './Page/Home'
import Meram from './Page/Meram'
import Baskan from './Page/Baskan'
import Iletisim from './Page/Iletisim'
import Idb from './Page/Hizmetler/Idb'
import Arabuluculuk from './Page/Hizmetler/Arabuluculuk'
import BasvuruKilavuzu from './Page/Hizmetler/BasvuruKilavuzu'
import SikcaSorulan from './Page/Hizmetler/SikcaSorulan'
import Hizmetlerimiz from './Page/Hizmetler/Hizmetlerimiz'
import Ruhsatislemleri from './Page/Hizmetler/Ruhsatislemleri'
import Projeler from './Page/Projeler/Projeler'
import DevamEden from './Page/Projeler/DevamEden'
import Planlanan from './Page/Projeler/Planlanan'
import Tamamlanan from './Page/Projeler/Tamamlanan'
import Proje from './Page/Projeler/Proje'
import GaleriPage from './Components/GaleriPage'
function SiteRoute() {
  return (
    <div>
      
        <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/meram" element={<Meram/>} />
        <Route path="/baskan" element={<Baskan/>} />
        <Route path="/iletisim" element={<Iletisim/>} />
        
        <Route path='/hizmetlerimiz' element={<Hizmetlerimiz/> } />
        <Route path="/hizmetlerimiz/iyikidogdunbebek" element={<Idb/>} />
        <Route path="/hizmetlerimiz/arabuluculuk" element={<Arabuluculuk/>} />
        <Route path="/hizmetlerimiz/basvuruklavuzu" element={<BasvuruKilavuzu/>} />
        <Route path="/hizmetlerimiz/ruhsatislemleri" element={<Ruhsatislemleri/>} />
        <Route path="/hizmetlerimiz/sikcasorulansorular" element={<SikcaSorulan/>} />
       

        <Route path='/projeler' element={<Projeler/> }/>
        <Route path="/projeler/tamamlanan" element={<Tamamlanan/>} />
        <Route path="/projeler/devameden" element={<DevamEden/>} />
        <Route path="/projeler/planlanan" element={<Planlanan/>} />
        <Route path="/projeler/:projeId" element={<Proje/>} />
        <Route path="/galeri/:projeId" element={<GaleriPage/>} />
        </Routes>
    </div>
  )
}

export default SiteRoute