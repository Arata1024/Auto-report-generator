import DataInputForm from '@/components/DataInputForm'

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">Auto-Report Generator</h1>
      <DataInputForm />
    </main>
  )
}