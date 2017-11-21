/**
 * WordPress dependencies
 */
import { addFilter } from '@wpcore/hooks';

/**
 * Internal dependencies
 */
import anchor from './anchor';
import customClassName from './custom-class-name';
import matchers from './matchers';

const hooks = { addFilter };

anchor( hooks );
customClassName( hooks );
matchers( hooks );
