export interface Star {
  id: number;
  x: number; // percentage width
  y: number; // percentage height
  size: number; // size in pixels
  duration: number; // twinkle animation duration
  delay: number; // animation delay
}

export interface Member {
  id: string;
  name: string;
  role: string;
  initials: string;
  bio?: string;
  imageUrl?: string;
  presentation?: string;
}

export interface AcademicSection {
  id: string;
  num: string;
  title: string;
  iconName: 'BookOpen' | 'Brain' | 'MessageSquareCode' | 'Atom';
  subtitle: string;
}
