import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BeforeAfterMorph from './components/BeforeAfterMorph';
import TheBridge from './components/TheBridge';
import AwardsStrip from './components/AwardsStrip';
import ProofStack from './components/ProofStack';
import ProductSelector from './components/ProductSelector';
import MechanismMatrix from './components/MechanismMatrix';
import ObjectionCrusher from './components/ObjectionCrusher';
import RiskReversal from './components/RiskReversal';
import LeadForm from './components/LeadForm';
import UrgencyClose from './components/UrgencyClose';
import Footer from './components/Footer';
import MobileCTABar from './components/MobileCTABar';

function App() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-accent selection:text-background font-body">
      <Navbar />
      <main>
        <Hero />
        <BeforeAfterMorph />
        <TheBridge />
        <AwardsStrip />
        <ProofStack />
        <ProductSelector />
        <MechanismMatrix />
        <ObjectionCrusher />
        <RiskReversal />
        <LeadForm />
        <UrgencyClose />
      </main>
      <Footer />
      <MobileCTABar />
    </div>
  );
}

export default App;
