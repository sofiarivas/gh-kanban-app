import { createContext } from "react";
import { Repository, Branch } from './types';

interface AppContextInterface {
  repository: Repository;
  setRepository: (repository: Repository) => void;
  branches: Array<Branch>;
  setBranches: (branches: any) => void;
}

export const defaultContext = {
  repository: {
    name: '',
    description: '',
    full_name: '',
  },
  setRepository: () => {},
  branches: [],
  setBranches: () => {},
};

const AppContext = createContext<AppContextInterface>(defaultContext);

export default AppContext;