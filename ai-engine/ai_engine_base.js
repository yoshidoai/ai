// Abstract base for all AI modules
export class AIEngineBase {
  constructor(config = {}) {
    this.config = config;
  }

  loadModel(name) {
    throw new Error('loadModel() must be implemented');
  }

  process(input) {
    throw new Error('process() must be implemented');
  }
}
