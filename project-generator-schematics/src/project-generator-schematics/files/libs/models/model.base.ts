export class ModelBase {
    constructor(defaults?: ModelBase) {
      if (defaults)
        Object.keys(defaults).forEach((key) => {
          this[key] = defaults[key];
        });
    }
  }
  