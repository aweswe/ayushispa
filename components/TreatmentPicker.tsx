'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

interface TreatmentPickerProps {
  value: string;
  onChange: (treatment: string) => void;
  options: string[];
  id?: string;
  name?: string;
  label?: string;
  placeholder?: string;
}

export default function TreatmentPicker({
  value,
  onChange,
  options,
  id,
  name,
  label = 'Treatment *',
  placeholder = 'Select a treatment',
}: TreatmentPickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen, handleClickOutside]);

  useEffect(() => {
    if (isOpen && value && listRef.current) {
      const selectedEl = listRef.current.querySelector('.treatment-picker-option--selected');
      if (selectedEl) {
        selectedEl.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [isOpen, value]);

  const handleSelect = (treatment: string) => {
    onChange(treatment);
    setIsOpen(false);
  };

  const handleClear = () => {
    onChange('');
    setIsOpen(false);
  };

  return (
    <div className="treatment-picker-wrapper" ref={wrapperRef}>
      {label && (
        <label className="form-label" htmlFor={id}>{label}</label>
      )}
      <button
        type="button"
        id={id}
        name={name}
        className="form-input treatment-picker-input"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={value ? '' : 'treatment-picker-placeholder'}>
          {value || placeholder}
        </span>
        <svg className="treatment-picker-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" />
          <line x1="15" y1="9" x2="15.01" y2="9" />
        </svg>
      </button>

      {isOpen && (
        <div className="treatment-picker-popup">
          <div className="treatment-picker-list" ref={listRef}>
            {options.map((treatment) => (
              <button
                key={treatment}
                type="button"
                className={`treatment-picker-option${treatment === value ? ' treatment-picker-option--selected' : ''}`}
                onClick={() => handleSelect(treatment)}
              >
                <span className="treatment-picker-option-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </span>
                {treatment}
              </button>
            ))}
          </div>
          {value && (
            <div className="treatment-picker-footer">
              <button type="button" className="treatment-picker-action" onClick={handleClear}>Clear</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
