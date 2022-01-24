import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { Routes as ROUTES } from 'constants/routes'

import Home from './Home'

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.index} element={<Home />} />

        <Route path="*" element={<Navigate to={ROUTES.index} replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Pages
