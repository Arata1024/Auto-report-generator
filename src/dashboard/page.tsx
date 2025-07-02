'use client';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function Dashboard() {
  const params = useSearchParams();
  const sourceUrl = params.get('source');
  const [design, setDesign] = useState({
    titleColor: '#3366ff',
    fontSize: '16px',
  });

  const handleGenerate = async () => {
    const response = await fetch('/api/generate', {
      method: 'POST',
      body: JSON.stringify({
        data: { title: 'Мой отчёт', rows: [/* ваши данные */] },
        design,
      }),
    });
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    window.open(url);
  };

  return (
    <div className="p-8 space-y-6">
      <h2 className="text-2xl font-bold">Настройки дизайна</h2>
      <div className="space-y-4">
        <label className="block">
          Цвет заголовка:
          <input
            type="color"
            value={design.titleColor}
            onChange={(e) => setDesign({...design, titleColor: e.target.value})}
          />
        </label>
        <button
          onClick={handleGenerate}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Сгенерировать PDF
        </button>
      </div>
    </div>
  );
}