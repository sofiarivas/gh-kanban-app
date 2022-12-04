export interface Repository {
  description: string;
  name: string;
  full_name: string,
}

export interface Branch {
  name: string;
  commit: {
    sha: string;
    url: string;
  };
  protected: boolean;
}