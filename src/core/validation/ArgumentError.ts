/**
 * Error thrown when an invalid argument is provided
 */
export class ArgumentError extends Error {
  /**
   * Creates a new ArgumentError
   * @param message The error message
   * @param argumentName The name of the invalid argument
   */
  constructor(message: string, public readonly argumentName?: string) {
    super(message);
    this.name = 'ArgumentError';
  }
}
