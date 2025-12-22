
export interface Milestone {
  id: string;
  date: string;
  timestamp: number;
  items: string[];
}

export enum SortOrder {
  LATEST = 'latest',
  EARLIEST = 'earliest'
}
