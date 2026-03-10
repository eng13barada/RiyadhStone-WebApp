import React, { useState } from 'react';
import { Card, Button, Badge } from '../ui';
import { Check, ArrowRight, Download } from 'lucide-react';

const STEPS = [
  { id: 'location', label: 'Use Location', options: ['Façade', 'Landscape', 'Interior', 'Wet Areas', 'Infrastructure', 'Custom'] },
  { id: 'exposure', label: 'Exposure', options: ['Heat & Sun', 'Wind & Sand', 'Water', 'Chemicals', 'Mixed'] },
  { id: 'load', label: 'Load', options: ['Decorative', 'Pedestrian', 'Vehicular', 'Stairs', 'Point loads'] },
  { id: 'finish', label: 'Finish Intent', options: ['Honed', 'Textured', 'Anti-slip', 'Custom'] },
  { id: 'docs', label: 'Documentation', options: ['Samples', 'Mockup', 'Test pack', 'Full submittal pack', 'Execution docs'] },
  { id: 'schedule', label: 'Schedule', options: ['Standard', 'Accelerated', 'Phased deliveries'] },
];

const SelectionTool: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [isComplete, setIsComplete] = useState(false);

  const handleSelect = (val: string) => {
    setSelections({ ...selections, [STEPS[currentStep].id]: val });
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsComplete(true);
    }
  };

  return (
    <Card className="max-w-4xl mx-auto overflow-hidden">
      {!isComplete ? (
        <div className="space-y-8 animate-in fade-in duration-500">
          <div className="flex justify-between items-center mb-8">
            <Badge variant="live">Step {currentStep + 1} of {STEPS.length}</Badge>
            <h3 className="text-xl font-bold">{STEPS[currentStep].label}</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {STEPS[currentStep].options.map(opt => (
              <button
                key={opt}
                onClick={() => handleSelect(opt)}
                className="p-6 rounded-2xl border border-neutral-border hover:border-gold hover:bg-gold/5 transition-all text-left font-semibold"
              >
                {opt}
              </button>
            ))}
          </div>
          <div className="flex space-x-2 pt-8">
            {STEPS.map((_, i) => (
              <div key={i} className={`h-1 grow rounded-full transition-all ${i <= currentStep ? 'bg-gold' : 'bg-ink/5'}`} />
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-12 animate-in zoom-in duration-500">
          <Badge variant="live" className="mb-6">Recommendation Ready</Badge>
          <h2 className="text-H2 font-bold mb-4">RiyadEx™ – Façade System</h2>
          <p className="text-muted-text max-w-lg mx-auto mb-12">
            Based on your inputs for {selections.location} and {selections.exposure}, we recommend the RiyadEx™ system with an engineering-led validation path.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button onClick={() => window.print()} variant="outline">
              <Download size={16} /> Export PDF Summary
            </Button>
            <Button asChild>
              <a href="#rfq-inputs">Start RFQ with this Summary <ArrowRight size={16} /></a>
            </Button>
          </div>
          <button 
            onClick={() => { setCurrentStep(0); setIsComplete(false); setSelections({}); }}
            className="mt-8 text-xs font-bold uppercase tracking-widest text-muted-text hover:text-ink transition-colors"
          >
            Restart Selection
          </button>
        </div>
      )}
    </Card>
  );
};

export default SelectionTool;
