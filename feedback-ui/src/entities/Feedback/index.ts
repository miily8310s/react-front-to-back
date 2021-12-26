export interface FeedBack {
  id: number;
  rating: number;
  text: string;
}

export interface FeedBackEdit {
  item: FeedBack;
  edit: boolean;
}
