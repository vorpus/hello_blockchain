import { sha256 } from 'js-sha256';

export function hash(input) {
  return sha256(input);
}
