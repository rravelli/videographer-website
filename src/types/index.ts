export interface Video {
  name: string;
  type: string;
  path: string;
  slug: string;
  metadata?: Record<string, string>;
  description?: string;
}
