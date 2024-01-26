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
    agency: string;
  };
  post_tag: string | null;
  overview: string;
  created_on: string;
  views: number;
  updated_on: string;
  is_published: boolean;
  Location: string;
  thumbnail: string;
  category: string;
  slug: string;
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
