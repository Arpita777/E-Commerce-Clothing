import React from 'react';
import { Route,Switch } from 'react-router-dom';

import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
import CategoryPage from '../category/category.component';

const ShopPage = ({ match }) => {
  return (
  <div className='shop-page'>
 
     <Route exact path={`${match.path}/:categoryId`} component={CategoryPage} />
     <Route exact path={`${match.path}`} component={CollectionsOverview} />
   
  
 
  </div>
);
}

export default ShopPage;