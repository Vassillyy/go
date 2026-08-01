import { createHashRouter } from 'react-router-dom';
import { GoContentPage } from '@/pages/goContentPage';
import { MainPage } from '@/pages/mainPage';
import { GoMethodsPage } from '@/pages/goMethodsPage';
import { GoTopicPage } from '@/pages/goTopicPage';
import { AppPaths } from '@/shared/constants/route';
import { MainLayout, TopicLayout } from './layouts';

export const router = createHashRouter([
  {
    path: AppPaths.MAIN,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: AppPaths.GO,
        element: <GoContentPage />,
      },
      {
        path: AppPaths.GO_METHODS,
        element: <GoMethodsPage />,
      },
    ],
  },
  {
    path: `${AppPaths.GO}/topic/:topicId`,
    element: <TopicLayout />,
    children: [
      {
        index: true,
        element: <GoTopicPage />,
      },
    ],
  },
]);
