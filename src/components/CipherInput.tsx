
import React from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface CipherInputProps {
  value: string;
  onChange: (value: string) => void;
}

const CipherInput = ({ value, onChange }: CipherInputProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-text" className="text-lg font-semibold text-blue-700">
        📝 Upiši svoju poruku ovdje:
      </Label>
      <Textarea
        id="input-text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Upiši svoju tajnu poruku..."
        className="min-h-32 text-lg border-2 border-blue-300 focus:border-blue-500 rounded-xl"
      />
    </div>
  );
};

export default CipherInput;
