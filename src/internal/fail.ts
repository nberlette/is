// deno-lint-ignore-file ban-types
/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is/doc/internal/fail
 */
/**
 * @module fail
 */
import { Error, ErrorCaptureStackTrace } from "./primordials.ts";

/**
 * Throws an error with the given message and captures the stack trace.
 *
 * Optionally, you can provide a function to trim the stack trace to a specific
 * function call site, via the `stackCrawlMark` parameter. This can be useful
 * for debugging purposes and removing unnecessary frames or implementation
 * details from the stack trace.
 *
 * @param message - The error message or an Error object to throw.
 * @param stackCrawlMark - A function to mark the point in the stack trace to
 * start capturing the stack trace. This is useful for debugging.
 * @throws {Error} - Throws an error with the provided message.
 */
export function fail(
  message?: string | Error,
  stackCrawlMark?: Function,
): never {
  message ??= "Unknown error";
  const error = typeof message === "string" ? new Error(message) : message;
  ErrorCaptureStackTrace?.(error, stackCrawlMark ?? fail);
  error.stack; // force stack trace to be generated
  throw error;
}
