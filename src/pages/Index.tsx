
import React, { useState, useEffect } from 'react';
import CipherInput from '@/components/CipherInput';
import ShiftControl from '@/components/ShiftControl';
import CipherOutput from '@/components/CipherOutput';
import { caesarEncode, getShiftDescription } from '@/utils/caesarCipher';
import { Card } from '@/components/ui/card';

const Index = () => {
  const [inputText, setInputText] = useState('');
  const [direction, setDirection] = useState<'L' | 'R'>('R');
  const [shiftAmount, setShiftAmount] = useState(13);
  const [encodedText, setEncodedText] = useState('');

  useEffect(() => {
    if (inputText) {
      const encoded = caesarEncode(inputText, direction, shiftAmount);
      setEncodedText(encoded);
    } else {
      setEncodedText('');
    }
  }, [inputText, direction, shiftAmount]);

  const currentShift = getShiftDescription(direction, shiftAmount);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            🔐 Caesarova šifra za djecu! 🔐
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Stvaraj tajne poruke pomoću antičke Caesarove šifre! 
            Odaberi koliko slova želiš pomaknuti i kodiraj svoju poruku kao pravi špijun! 🕵️‍♀️
          </p>
        </div>

        {/* Educational Info */}
        <Card className="p-6 bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300">
          <h2 className="text-xl font-bold text-orange-700 mb-3">
            🎓 Kako funkcionira:
          </h2>
          <div className="text-orange-600 space-y-2">
            <p>• <strong>Pomak udesno (R13):</strong> A postaje N, B postaje O, itd.</p>
            <p>• <strong>Pomak ulijevo (L3):</strong> D postaje A, E postaje B, itd.</p>
            <p>• Brojevi i slova se pomiču, ali razmaci i interpunkcija ostaju isti!</p>
            <p>• ROT13 je poseban slučaj gdje R13 = L13 (sam sebe dekodira!)</p>
          </div>
        </Card>

        {/* Main Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Section */}
          <Card className="p-6 space-y-6">
            <CipherInput value={inputText} onChange={setInputText} />
            <ShiftControl
              direction={direction}
              amount={shiftAmount}
              onDirectionChange={setDirection}
              onAmountChange={setShiftAmount}
            />
          </Card>

          {/* Output Section */}
          <Card className="p-6">
            <CipherOutput encodedText={encodedText} shift={currentShift} />
          </Card>
        </div>

        {/* Example Section */}
        <Card className="p-6 bg-gradient-to-r from-indigo-50 to-blue-50 border-2 border-indigo-300">
          <h2 className="text-xl font-bold text-indigo-700 mb-3">
            🌟 Probaj ovaj primjer:
          </h2>
          <div className="text-indigo-600 space-y-2">
            <p>Upiši: <code className="bg-white px-2 py-1 rounded font-mono">"Pozdrav Svijete 123!"</code></p>
            <p>S R13: <code className="bg-white px-2 py-1 rounded font-mono">"Cbmqeni Fivwrgr 456!"</code></p>
            <p>S L3: <code className="bg-white px-2 py-1 rounded font-mono">"Mlyqoxs Psfwrkr 890!"</code></p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;
