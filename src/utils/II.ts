/**
 * A workaround since react freezes props, which yields compile and runtime errors
 * during dev
 */

export interface II<A> {
  m: A
}

