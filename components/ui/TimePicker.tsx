'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

interface TimePickerProps {
  value: string;
  onChange: (time: string) => void;
  options: string[];
  id?: string;
  name?: string;
  label?: string;
  placeholder?: string;
}

export default function TimePicker({
  value,
  onChange,
  options,
  id,
  name,
  label = 'Preferred Time *',
  placeholder = 'Select time',
}: TimePickerProps) {
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
      const selectedEl = listRef.current.querySelector('.time-picker-option--selected');
      if (selectedEl) {
        selectedEl.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [isOpen, value]);

  const handleSelect = (time: string) => {
    onChange(time);
    setIsOpen(false);
  };

  const handleClear = () => {
    onChange('');
    setIsOpen(false);
  };

  return (
    <div className="time-picker-wrapper" ref={wrapperRef}>
      {label && (
        <label className="form-label" htmlFor={id}>{label}</label>
      )}
      <button
        type="button"
        id={id}
        name={name}
        className="form-input time-picker-input"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={value ? '' : 'time-picker-placeholder'}>
          {value || placeholder}
        </span>
        <svg className="time-picker-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      </button>

      {isOpen && (
        <div className="time-picker-popup">
          <div className="time-picker-list" ref={listRef}>
            {options.map((time) => (
              <button
                key={time}
                type="button"
                className={`time-picker-option${time === value ? ' time-picker-option--selected' : ''}`}
                onClick={() => handleSelect(time)}
              >
                <span className="time-picker-option-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </span>
                {time}
              </button>
            ))}
          </div>
          {value && (
            <div className="time-picker-footer">
              <button type="button" className="time-picker-action" onClick={handleClear}>Clear</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
