import { Tab } from '@/types';

import features from '@/static/features.json';

export default class FeatureRepository {
  all (): Promise<Tab[]> {
    return new Promise((resolve) => {
      resolve(features);
    });
  }
}
