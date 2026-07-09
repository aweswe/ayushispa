'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

interface DatePickerProps {
  value: string;
  onChange: (date: string) => void;
  min?: string;
  id?: string;
  name?: string;
  label?: string;
}

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

function parseDate(str: string): Date | null {
  if (!str) return null;
  const [y, m, d] = str.split('-').map(Number);
  return new Date(y, m - 1, d);
}

function formatDate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

export default function DatePicker({
  value,
  onChange,
  min,
  id,
  name,
  label = 'Preferred Date *',
}: DatePickerProps) {
  const today = new Date();
  const todayStr = formatDate(today);

  const selected = parseDate(value);
  const [viewDate, setViewDate] = useState(() => selected || today);
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const viewYear = viewDate.getFullYear();
  const viewMonth = viewDate.getMonth();

  const minDate = min ? parseDate(min) : null;

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

  const handlePrevMonth = () => {
    setViewDate(new Date(viewYear, viewMonth - 1, 1));
  };

  const handleNextMonth = () => {
    setViewDate(new Date(viewYear, viewMonth + 1, 1));
  };

  const handlePrevYear = () => {
    setViewDate(new Date(viewYear - 1, viewMonth, 1));
  };

  const handleNextYear = () => {
    setViewDate(new Date(viewYear + 1, viewMonth, 1));
  };

  const handleDayClick = (day: number) => {
    const picked = new Date(viewYear, viewMonth, day);
    onChange(formatDate(picked));
    setIsOpen(false);
  };

  const handleClear = () => {
    onChange('');
    setIsOpen(false);
  };

  const handleToday = () => {
    onChange(todayStr);
    setViewDate(today);
    setIsOpen(false);
  };

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDayOfMonth(viewYear, viewMonth);

  const dayElements: React.ReactNode[] = [];

  for (let i = 0; i < firstDay; i++) {
    dayElements.push(<div key={`empty-${i}`} className="date-picker-day date-picker-day--empty" />);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = formatDate(new Date(viewYear, viewMonth, d));
    const isToday = dateStr === todayStr;
    const isSelected = dateStr === value;
    const isDisabled = !!(minDate && new Date(viewYear, viewMonth, d) < minDate);

    dayElements.push(
      <button
        key={d}
        type="button"
        className={[
          'date-picker-day',
          isToday ? 'date-picker-day--today' : '',
          isSelected ? 'date-picker-day--selected' : '',
          isDisabled ? 'date-picker-day--disabled' : '',
        ].filter(Boolean).join(' ')}
        onClick={() => !isDisabled && handleDayClick(d)}
        disabled={isDisabled}
        tabIndex={isDisabled ? -1 : 0}
      >
        {d}
      </button>
    );
  }

  const displayValue = selected
    ? `${String(selected.getMonth() + 1).padStart(2, '0')}/${String(selected.getDate()).padStart(2, '0')}/${selected.getFullYear()}`
    : '';

  return (
    <div className="date-picker-wrapper" ref={wrapperRef}>
      {label && (
        <label className="form-label" htmlFor={id}>{label}</label>
      )}
      <button
        type="button"
        id={id}
        name={name}
        className="form-input date-picker-input"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={displayValue ? '' : 'date-picker-placeholder'}>
          {displayValue || 'mm/dd/yyyy'}
        </span>
        <svg className="date-picker-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      </button>

      {isOpen && (
        <div className="date-picker-popup">
          <div className="date-picker-header">
            <button type="button" className="date-picker-nav-btn" onClick={handlePrevYear} aria-label="Previous year">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="11 17 6 12 11 7" />
                <polyline points="18 17 13 12 18 7" />
              </svg>
            </button>
            <button type="button" className="date-picker-nav-btn" onClick={handlePrevMonth} aria-label="Previous month">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <div className="date-picker-month-year">
              <button type="button" className="date-picker-month-btn" onClick={handlePrevYear}>
                {MONTHS[viewMonth]} {viewYear}
              </button>
            </div>
            <button type="button" className="date-picker-nav-btn" onClick={handleNextMonth} aria-label="Next month">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
            <button type="button" className="date-picker-nav-btn" onClick={handleNextYear} aria-label="Next year">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="13 17 18 12 13 7" />
                <polyline points="6 17 11 12 6 7" />
              </svg>
            </button>
          </div>

          <div className="date-picker-weekdays">
            {DAYS.map(d => (
              <div key={d} className="date-picker-weekday">{d}</div>
            ))}
          </div>

          <div className="date-picker-grid">
            {dayElements}
          </div>

          <div className="date-picker-footer">
            <button type="button" className="date-picker-action" onClick={handleClear}>Clear</button>
            <button type="button" className="date-picker-action" onClick={handleToday}>Today</button>
          </div>
        </div>
      )}
    </div>
  );
}
