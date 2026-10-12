/**
 * Legacy Interfaces Module
 *
 * This module contains legacy interface definitions for backward compatibility.
 * New code should import interfaces from the core module instead.
 *
 * @deprecated Use interfaces from './core' module for new implementations
 * @module interfaces
 */

// Re-export core interfaces for backward compatibility
export type * from './core';

// Legacy graph interface (deprecated - use core interfaces)
export type { IGraph } from './graphs/interfaces/IGraph';
