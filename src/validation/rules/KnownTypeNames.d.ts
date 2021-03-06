import { ASTVisitor } from '../../language/visitor';
import { ValidationContext } from '../ValidationContext';

/**
 * Known type names
 *
 * A GraphQL document is only valid if referenced types (specifically
 * variable definitions and fragment conditions) are defined by the type schema.
 */
export function KnownTypeNames(context: ValidationContext): ASTVisitor;
