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
  return [
    {
      value: 'qwen/qwen3-coder:free',
      label: 'Qwen3 Coder (free)',
      description: 'OpenRouter · qwen/qwen3-coder:free · No cost',
      descriptionForModel: 'Qwen3 Coder via OpenRouter free tier',
    },
    {
      value: 'deepseek/deepseek-r1:free',
      label: 'DeepSeek R1 (free)',
      description: 'OpenRouter · deepseek/deepseek-r1:free · No cost',
    },
    {
      value: 'deepseek/deepseek-chat-v3-0324:free',
      label: 'DeepSeek V3 (free)',
      description: 'OpenRouter · deepseek/deepseek-chat-v3-0324:free · No cost',
    },
    {
      value: 'meta-llama/llama-4-maverick:free',
      label: 'Llama 4 Maverick (free)',
      description: 'OpenRouter · meta-llama/llama-4-maverick:free · No cost',
    },
    {
      value: 'google/gemma-3-27b-it:free',
      label: 'Gemma 3 27B (free)',
      description: 'OpenRouter · google/gemma-3-27b-it:free · No cost',
    },
  ]
}
