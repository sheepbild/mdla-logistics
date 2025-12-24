/*
  # Image Management System

  1. New Tables
    - `images`
      - `id` (uuid, primary key) - Unique identifier for each image
      - `name` (text) - Display name of the image
      - `category` (text) - Category (hero, product, logo, background, etc.)
      - `url` (text) - Storage URL of the image
      - `alt_text` (text) - Alternative text for accessibility
      - `description` (text, nullable) - Optional description
      - `file_path` (text) - Path in storage bucket
      - `file_size` (integer, nullable) - File size in bytes
      - `mime_type` (text, nullable) - MIME type of the image
      - `width` (integer, nullable) - Image width in pixels
      - `height` (integer, nullable) - Image height in pixels
      - `is_active` (boolean) - Whether the image is currently active
      - `created_at` (timestamptz) - When the image was uploaded
      - `updated_at` (timestamptz) - When the image was last updated
  
  2. Security
    - Enable RLS on `images` table
    - Add policy for public read access (images are public)
    - Add policy for authenticated users to manage images
  
  3. Storage
    - Create storage bucket for images (public access)
*/

-- Create images table
CREATE TABLE IF NOT EXISTS images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  category text NOT NULL DEFAULT 'general',
  url text NOT NULL,
  alt_text text NOT NULL,
  description text,
  file_path text NOT NULL,
  file_size integer,
  mime_type text,
  width integer,
  height integer,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE images ENABLE ROW LEVEL SECURITY;

-- Public can view active images
CREATE POLICY "Anyone can view active images"
  ON images
  FOR SELECT
  USING (is_active = true);

-- Authenticated users can view all images (including inactive)
CREATE POLICY "Authenticated users can view all images"
  ON images
  FOR SELECT
  TO authenticated
  USING (true);

-- Authenticated users can insert images
CREATE POLICY "Authenticated users can upload images"
  ON images
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Authenticated users can update images
CREATE POLICY "Authenticated users can update images"
  ON images
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Authenticated users can delete images
CREATE POLICY "Authenticated users can delete images"
  ON images
  FOR DELETE
  TO authenticated
  USING (true);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_images_category ON images(category);
CREATE INDEX IF NOT EXISTS idx_images_is_active ON images(is_active);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_images_updated_at
  BEFORE UPDATE ON images
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();