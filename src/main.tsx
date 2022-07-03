import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  HomePage,
  LoginPage,
  RegisterPage,
  SettingsPage,
  EditorPage,
  EditArticlePage,
  ArticlePage,
  ProfilePage,
} from './pages';
import { route } from './constants/route';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={route.HOME} element={<App />}>
          <Route index element={<HomePage />} />
          <Route path={route.LOGIN} element={<LoginPage />} />
          <Route path={route.REGISTER} element={<RegisterPage />} />
          <Route path={route.SETTINGS} element={<SettingsPage />} />
          <Route path={route.EDITOR}>
            <Route index element={<EditorPage />} />
            <Route path=":articleSlug" element={<EditArticlePage />} />
          </Route>
          <Route path={route.ARTICLE}>
            <Route path=":articleSlug" element={<ArticlePage />} />
          </Route>
          <Route path={route.PROFILE}>
            <Route path=":username" element={<ProfilePage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
