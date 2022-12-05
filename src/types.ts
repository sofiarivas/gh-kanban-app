export type BranchStatus = 'in-progress' | 'review' | 'ready-to-merge';

export interface Repository {
  description: string;
  name: string;
  full_name: string;
}

export interface Branch {
  name: string;
  commit: {
    sha: string;
    url: string;
  };
  protected: boolean;
  status: BranchStatus;
}