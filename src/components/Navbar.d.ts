
import { ReactNode } from 'react';

export interface NavbarProps {
  onSectionClick?: (id: string) => void;
  children?: ReactNode;
}
