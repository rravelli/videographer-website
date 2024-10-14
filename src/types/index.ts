export interface Video {
  name: string;
  type: string;
  homePage?: boolean;
  previewVideo?: string;
  slug: string;
  metadata?: Record<string, string | number | undefined>;
  description?: string;
}
