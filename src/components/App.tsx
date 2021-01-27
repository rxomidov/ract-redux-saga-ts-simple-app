import React from 'react';
import Button from '../containers/Button'
import NewsItem from '../containers/NewsItem'
import Loading from '../containers/Loading'

import 'bootstrap/dist/css/bootstrap.css';

let App = ()=> (
    <div>
        <Button/>
        <Loading/>
        <NewsItem/>
    </div>
)

export default App