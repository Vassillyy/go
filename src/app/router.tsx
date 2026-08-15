import { createHashRouter, Navigate } from 'react-router-dom';
import { GoPackagePage } from '@/pages/goPackagePage';
import { GoSchemePage } from '@/pages/goSchemePage';
import { GoSchemeTopicPage } from '@/pages/goSchemeTopicPage';
import { GoTablePage } from '@/pages/goTablePage';
import { AppPaths } from '@/shared/constants/route';
import { MainLayout } from './layouts';

export const router = createHashRouter([
  {
    path: AppPaths.MAIN,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={AppPaths.GO_SCHEME} replace />,
      },
      {
        path: AppPaths.GO_SCHEME,
        element: <GoSchemePage />,
      },
    ],
  },
  {
    path: `${AppPaths.GO_SCHEME}/topic/:topicId`,
    element: <GoSchemeTopicPage />,
  },
  {
    path: `${AppPaths.GO_SCHEME}/package/:packageId`,
    element: <GoPackagePage />,
  },
  {
    path: `${AppPaths.GO_SCHEME}/table/:tableId`,
    element: <GoTablePage />,
  },
]);
