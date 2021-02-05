import { Feature } from '@/types';

import features from '@/static/features.json';

export default class FeatureRepository {
  /**
   * Get all the features
   *
   * @return {Promise<Feature[]>}
   */
  all (): Promise<Feature[]> {
    return new Promise((resolve) => {
      resolve(features);
    });
  }
}
