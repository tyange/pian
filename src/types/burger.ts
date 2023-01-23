export type Burger = {
  Name: string;
  Brand: string;
  Description: string;
};

export type BurgerPageData = {
  Burgers: Burger[];
  Pagination: {
    NextPage: number;
    PreviousPage: number;
    TotalPage: number;
  };
};
