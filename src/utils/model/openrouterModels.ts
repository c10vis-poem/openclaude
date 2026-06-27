// OpenRouter discovery is handled by the generic openai: cache scope path
// which calls discoverOpenAICompatibleModelOptions() and returns the full
// live model list. Stub returns false so the OpenRouter branch in
// getModelOptionsBase() is never taken and it falls through to the
// generic openai: branch that uses live discovery.
import type { ModelOption } from './modelOptions.js'

export function isOpenRouterProvider(): boolean {
  return false
}

export function getOpenRouterModelOptions(): ModelOption[] {
  return []
}
