import React from 'react';
import GifExpertApp from './GifExpertApp';
import './index.css';
import * as ReactDOMClient from 'react-dom/client';

const container = document.getElementById('root');

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(<GifExpertApp tab="home" />);

// During an update, there's no need to pass the container again.
// root.render(<GifExpertApp tab="profile" />);
