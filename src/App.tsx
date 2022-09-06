import React from "react";
import { useRoutes, Navigate } from 'react-router-dom'
import V1 from './v1getStarted/V1'
import V2 from './v2improve/V2'
import V3 from './v3register/V3'
import V4 from './v4watch/V4'
import V5 from './v5form/V5'
import V6 from './v6setValue/V6'
import V7 from './v7reset/V7'
import V8 from './v8trigger/V8'
import './styles.css'

export default function App() {

  return useRoutes([
    {
      path: '/v1',
      element: <V1 />
    }, {
      path: '/v2',
      element: <V2 />
    }, {
      path: '/v3',
      element: <V3 />
    }, {
      path: '/v4',
      element: <V4 />
    }, {
      path: '/v5',
      element: <V5 />
    }, {
      path: '/v6',
      element: <V6 />
    }, {
      path: '/V7',
      element: <V7 />
    }, {
      path: '/V8',
      element: <V8 />
    }, {
      path: '*',
      element: <Navigate to="/v1" />
    }])
}
