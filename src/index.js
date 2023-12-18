import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit'
import { BrowserRouter } from "react-router-dom";
import galleryReducer  from './redux/galleryState';   //galleryReducer = gallerySlice.reducer
const store = configureStore({
  reducer: {
    gallery:galleryReducer
  } 
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
);