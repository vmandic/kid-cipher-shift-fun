
import React from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';

interface CipherOutputProps {
  encodedText: string;
  shift: string;
}

const CipherOutput = ({ encodedText, shift }: CipherOutputProps) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(encodedText);
  };

  return (
    <div className="space-y-2">
      <Label className="text-lg font-semibold text-green-700">
        🔐 Tvoja kodirana poruka:
      </Label>
      
      <Card className="p-4 bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-300">
        <div className="space-y-3">
          <div className="text-xs text-green-600 font-medium">
            Kodirana s pomakom {shift}
          </div>
          
          <div className="min-h-32 p-3 bg-white rounded-lg border border-green-200 text-lg font-mono break-words">
            {encodedText || 'Tvoja kodirana poruka će se pojaviti ovdje...'}
          </div>
          
          {encodedText && (
            <Button
              onClick={copyToClipboard}
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              📋 Kopiraj tajnu poruku
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
};

export default CipherOutput;
