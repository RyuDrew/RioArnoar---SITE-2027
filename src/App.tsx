/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Empresa } from './components/Empresa';
import { Regioes } from './components/Regioes';
import { FormatosMidia } from './components/FormatosMidia';
import { SimuladorVoo } from './components/SimuladorVoo';
import { TrabalhosMidiaSocial } from './components/TrabalhosMidiaSocial';
import { Contato } from './components/Contato';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  const [selectedRegionId, setSelectedRegionId] = useState('rio-de-janeiro');
  const [selectedFormatId, setSelectedFormatId] = useState('Banner Publicitário');

  const handleSelectRegion = (regionId: string) => {
    setSelectedRegionId(regionId);
  };

  const handleSelectFormat = (formatId: string) => {
    setSelectedFormatId(formatId);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      <Header />

      <main className="flex-1">
        <Hero />
        <Empresa />
        <Regioes onSelectRegionForSimulator={handleSelectRegion} />
        <FormatosMidia onSelectFormat={handleSelectFormat} />
        <SimuladorVoo
          key={`${selectedRegionId}-${selectedFormatId}`}
          selectedRegionId={selectedRegionId}
          selectedFormatId={selectedFormatId}
        />
        <TrabalhosMidiaSocial />
        <Contato />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
