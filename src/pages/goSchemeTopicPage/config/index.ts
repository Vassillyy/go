import type { ITopicConfig } from './types.ts';
import { arrayTopic } from './array.ts';
import { sliceTopic } from './slice.ts';
import { mapTopic } from './map.ts';
import { structTopic } from './struct.ts';
import { pointerTopic } from './pointer.ts';
import { interfaceTopic } from './interface.ts';

export type { ITopicConfig, ITopicSection, ITopicExample } from './types.ts';

export const topicConfigs: Record<string, ITopicConfig> = {
  array: arrayTopic,
  slice: sliceTopic,
  map: mapTopic,
  struct: structTopic,
  pointer: pointerTopic,
  interface: interfaceTopic,
};
