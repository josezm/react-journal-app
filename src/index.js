import React from 'react';
import ReactDOM from 'react-dom';
import { AppRouter } from './components/routers/AppRouter';
import { JournalApp } from './JournalApp';
import './styles/style.scss'

ReactDOM.render(
    <JournalApp />,
  document.getElementById('root')
);
