'use server';

import { sql } from '@/lib/db';

export async function submitInquiry(prevState: any, formData: FormData) {
  try {
    const fullName = formData.get('fullName') as string;
    const company = formData.get('company') as string;
    const country = formData.get('country') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const productList = formData.get('productList') as string;
    const quantity = formData.get('quantity') as string;
    const brandGeneric = formData.get('brandGeneric') as string;
    const packaging = formData.get('packaging') as string;
    const destinationPort = formData.get('destinationPort') as string;
    const message = formData.get('message') as string;

    // Basic validation for required fields (*) based on the UI
    if (!fullName || !company || !country || !phone || !email || !productList) {
      return { error: 'Please fill in all required fields.', success: false };
    }

    if (!process.env.DATABASE_URL) {
      console.warn('DATABASE_URL is not set. Skipping database insert.');
      // Simulating success if DB is not configured, or we can enforce DB existence
      // It's helpful if they want to preview UI without DB setup initially
      // return { error: 'Database connection not configured.', success: false };
    } else {
      // Create table if it doesn't exist (good for seamless setup)
      await sql`
        CREATE TABLE IF NOT EXISTS inquiries (
          id SERIAL PRIMARY KEY,
          full_name VARCHAR(255) NOT NULL,
          company VARCHAR(255) NOT NULL,
          country VARCHAR(100) NOT NULL,
          phone VARCHAR(50) NOT NULL,
          email VARCHAR(255) NOT NULL,
          product_list TEXT NOT NULL,
          quantity VARCHAR(100),
          brand_generic VARCHAR(50),
          packaging VARCHAR(100),
          destination_port VARCHAR(100),
          message TEXT,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
      `;

      // Insert into database
      await sql`
        INSERT INTO inquiries (
          full_name, company, country, phone, email, 
          product_list, quantity, brand_generic, packaging, 
          destination_port, message
        ) VALUES (
          ${fullName}, ${company}, ${country}, ${phone}, ${email},
          ${productList}, ${quantity}, ${brandGeneric}, ${packaging},
          ${destinationPort}, ${message}
        )
      `;
    }

    return { success: true };
  } catch (error) {
    console.error('Failed to submit inquiry:', error);
    return { error: 'An error occurred while submitting. Please try again.', success: false };
  }
}
