// Simulated context manager for prompt-aware sessions
export class SessionContext {
  constructor(user) {
    this.user = user;
    this.history = [];
  }

  append(input) {
    this.history.push(input);
  }

  summarize() {
    return this.history.slice(-3).join(' ⟶ ');
  }
}
