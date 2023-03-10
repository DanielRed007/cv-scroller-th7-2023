import React from 'react';
import CurriculumVitae from './components/CurriculumVitae/CurriculumVitae';
import { TitleSection } from './components/TitleSection/TitleSection';

function App() {
  return (
    <div className="main-layout">
      <CurriculumVitae />
      <TitleSection />
    </div>
  );
}

export default App;
