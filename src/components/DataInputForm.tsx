'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DataInputForm() {
  const [url, setUrl] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/dashboard?source=${encodeURIComponent(url)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">
          Ссылка на данные (Google Sheets/Notion):
        </label>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="https://docs.google.com/spreadsheets/..."
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Сгенерировать отчёт
      </button>
    </form>
  );
}