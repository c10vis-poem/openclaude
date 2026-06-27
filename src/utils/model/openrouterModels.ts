// OpenRouter discovery is handled by the generic openai: cache scope path
// which calls discoverOpenAICompatibleModelOptions() and returns the full
// live model list. This file exists only for backward compatibility with
// any callers expecting these symbols; the curated list approach was
// abandoned in favor of live discovery so the picker stays current as
// OpenRouter adds free models.
import type { ModelOption } from './modelOptions.js'

export function isOpenRouterProvider(): boolean {
  const baseUrl = process.env.OPENAI_BASE_URL ?? ''
  try {
    return new URL(baseUrl).hostname.includes('openrouter.ai')
  } catch {
    return false
  }
}

export function getOpenRouterModelOptions(): ModelOption[] {
  return []
}
