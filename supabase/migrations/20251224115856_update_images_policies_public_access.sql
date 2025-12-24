/*
  # Update Image Policies for Public Access (Temporary)

  1. Changes
    - Remove authentication requirement for INSERT/UPDATE/DELETE operations
    - Allow public users to manage images (for testing/demo purposes)
  
  2. Security Note
    - This is for development/testing only
    - In production, you should implement proper authentication
*/

-- Drop existing restrictive policies
DROP POLICY IF EXISTS "Authenticated users can view all images" ON images;
DROP POLICY IF EXISTS "Authenticated users can upload images" ON images;
DROP POLICY IF EXISTS "Authenticated users can update images" ON images;
DROP POLICY IF EXISTS "Authenticated users can delete images" ON images;

-- Create public policies (for demo/testing)
CREATE POLICY "Public can view all images"
  ON images
  FOR SELECT
  USING (true);

CREATE POLICY "Public can upload images"
  ON images
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Public can update images"
  ON images
  FOR UPDATE
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Public can delete images"
  ON images
  FOR DELETE
  USING (true);