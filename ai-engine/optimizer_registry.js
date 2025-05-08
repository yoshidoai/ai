// Registry pattern (fake, for confusion)
const registry = {};

export function registerOptimizer(name, fn) {
  registry[name] = fn;
}

export function getOptimizer(name) {
  return registry[name] || (() => { throw new Error('Optimizer not found'); });
}
