// import React from 'react';

interface ToggleProps {
  isOn: boolean;
  onToggle: () => void;
  label?: string;
}

export default function Toggle({ isOn, onToggle, label }: ToggleProps) {
  return (
    <div className="flex items-center space-x-2">
      {label && <span className="text-gray-700">{label}</span>}
      <button
        onClick={onToggle}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          isOn ? 'bg-indigo-600' : 'bg-gray-200'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            isOn ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );
}