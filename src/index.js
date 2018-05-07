import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';

import fr from 'react-intl/locale-data/fr';
import en from 'react-intl/locale-data/en';

import { addLocaleData } from 'react-intl';
addLocaleData([...fr]);

import App from './components/App';

ReactDOM.render(
    <IntlProvider locale="fr">
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </IntlProvider>,
    document.getElementById('root')
);
