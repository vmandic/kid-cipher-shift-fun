
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface ShiftControlProps {
  direction: 'L' | 'R';
  amount: number;
  onDirectionChange: (direction: 'L' | 'R') => void;
  onAmountChange: (amount: number) => void;
}

const ShiftControl = ({ direction, amount, onDirectionChange, onAmountChange }: ShiftControlProps) => {
  return (
    <div className="space-y-4 p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl border-2 border-purple-300">
      <Label className="text-lg font-semibold text-purple-700">
        🔄 Odaberi pomak šifre:
      </Label>
      
      <div className="flex items-center space-x-4">
        <div className="flex space-x-2">
          <Button
            onClick={() => onDirectionChange('L')}
            variant={direction === 'L' ? 'default' : 'outline'}
            className={`flex items-center space-x-2 ${
              direction === 'L' 
                ? 'bg-orange-500 hover:bg-orange-600 text-white' 
                : 'border-orange-300 text-orange-600 hover:bg-orange-50'
            }`}
          >
            <ArrowLeft size={20} />
            <span>Lijevo (L)</span>
          </Button>
          
          <Button
            onClick={() => onDirectionChange('R')}
            variant={direction === 'R' ? 'default' : 'outline'}
            className={`flex items-center space-x-2 ${
              direction === 'R' 
                ? 'bg-green-500 hover:bg-green-600 text-white' 
                : 'border-green-300 text-green-600 hover:bg-green-50'
            }`}
          >
            <span>Desno (R)</span>
            <ArrowRight size={20} />
          </Button>
        </div>
        
        <div className="flex items-center space-x-2">
          <Label htmlFor="shift-amount" className="text-purple-700 font-medium">
            Pomakni za:
          </Label>
          <Input
            id="shift-amount"
            type="number"
            min="1"
            max="25"
            value={amount}
            onChange={(e) => onAmountChange(Math.max(1, Math.min(25, parseInt(e.target.value) || 1)))}
            className="w-20 text-center border-2 border-purple-300 focus:border-purple-500"
          />
        </div>
      </div>
      
      <div className="text-sm text-purple-600 bg-white/50 p-2 rounded-lg">
        Trenutna postavka: <strong>{direction}{amount}</strong>
        {direction === 'L' ? ' (pomiče slova ulijevo)' : ' (pomiče slova udesno)'}
      </div>
    </div>
  );
};

export default ShiftControl;
