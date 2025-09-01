export interface Data {
  address: string;
  amount: number;
}

export interface DataContextType {
    data: Data[];
    setData: React.Dispatch<React.SetStateAction<Data[]>>;
}