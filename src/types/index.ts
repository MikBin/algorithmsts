/**
 * Types Module
 *
 * This module contains all TypeScript type definitions and interfaces
 * used throughout the Algorithmsts library. It provides centralized
 * type management and ensures type consistency across modules.
 *
 * @module types
 */

export type { Node } from './node';
export type { Edge } from './edge';
export type { GraphRepresentation } from './graph-types';

// Core Interfaces
export type { ICollection } from '../core/interfaces/ICollection';
export type { IComparable } from '../core/interfaces/IComparable';
export type { IIterator } from '../core/interfaces/IIterator';
export type { IDataStructure } from '../core/interfaces/IDataStructure';
export type { IAlgorithm } from '../core/interfaces/IAlgorithm';
