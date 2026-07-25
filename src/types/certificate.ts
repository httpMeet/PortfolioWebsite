export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
  pdfPath: string;
  imagePath: string;
  skills: string[];
}
