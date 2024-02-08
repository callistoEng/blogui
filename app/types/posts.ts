export interface IBaseInterface {
  count: number;
  next: null;
  previous: null;
}

export interface IPosts {
  comments: string;
  id: number;
  title: string;
  content_owner: {
    agency?: string | null;
    user_name?: string | null;
    email?: string;
  };
  post_tag: string | null;
  overview: string;
  created_on: Date;
  views: number;
  updated_on: string;
  is_published: boolean;
  Location: string;
  thumbnail: string;
  category: string;
  slug: string;
}

export interface IPostDetail extends IPosts {
  content: string;
  thumbnail_caption: string;
  previous_post: {
    id: number;
    title: string;
    overview: string;
  };
  next_post: {
    id: number;
    title: string;
    overview: string;
  };
}

export interface IHomePosts extends IBaseInterface {
  results: IPosts[];
}
interface ICategories {
  id: number;
  category_name: string;
  slug: string;
}
export interface IPostCategories extends IBaseInterface {
  results: ICategories[];
}
