import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "../interface/postsState";
import { PostInterface } from "src/interface/genric";

export const selectFeature = (state: AppStateInterface)=> state.posts;

export const isLoadingSlector$ = createSelector(selectFeature,(state)=> state.isLoading);

export const postSlector = createSelector(selectFeature,(state)=> state.posts);
// export const getProductsFilter = ( filterData: any ) => 
//   createSelector(
//     postSlector,
//     (products: any[]) => {
//       if (filterData === '')
//           return products;
//       else
//           return products.filter(value => value.title.includes(filterData) || value?.description.includes(filterData));
//    }
// );
export const selectCustomerById = (customerId: string) =>
  createSelector(
    postSlector, 
    (customers: any[]) => 
      customers.filter(value => value['title'] == customerId) 
  )

export const errorSlector = createSelector(selectFeature,(state)=> state.error);