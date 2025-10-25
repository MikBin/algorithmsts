/**
 * Error thrown when a data structure operation fails
 */
export class DataStructureError extends Error {
  /**
   * Creates a new DataStructureError
   * @param message The error message
   * @param operation The operation that failed
   */
  constructor(message: string, public readonly operation?: string) {
    super(message);
    this.name = 'DataStructureError';
  }
}
