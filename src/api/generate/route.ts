import { NextResponse } from 'next/server';
import { generatePDF } from '@/lib/pdfGenerator';

export async function POST(request: Request) {
  const { data, design } = await request.json();

  try {
    const pdfBuffer = await generatePDF(data, design);
    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=report.pdf',
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Ошибка генерации PDF' },
      { status: 500 },
    );
  }
}