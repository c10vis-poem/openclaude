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
      value: 'nvidia/nemotron-3-ultra-550b-a55b:free',
      label: 'Nemotron 3 Ultra 550B (free)',
      description: 'OpenRouter · nvidia/nemotron-3-ultra-550b-a55b:free · Top benchmark scores · No cost',
      descriptionForModel: 'NVIDIA Nemotron 3 Ultra 550B A55B via OpenRouter free tier',
    },
    {
      value: 'openai/gpt-oss-120b:free',
      label: 'GPT-OSS 120B (free)',
      description: 'OpenRouter · openai/gpt-oss-120b:free · 120B open-source model · No cost',
      descriptionForModel: 'GPT-OSS 120B via OpenRouter free tier',
    },
    {
      value: 'openrouter/owl-alpha',
      label: 'Owl Alpha',
      description: 'OpenRouter · openrouter/owl-alpha · Most-used free model on OpenRouter',
      descriptionForModel: 'Owl Alpha via OpenRouter',
    },
    {
      value: 'qwen/qwen3-coder:free',
      label: 'Qwen3 Coder 480B (free)',
      description: 'OpenRouter · qwen/qwen3-coder:free · 480B A35B · No cost',
      descriptionForModel: 'Qwen3 Coder 480B A35B via OpenRouter free tier',
    },
    {
      value: 'google/gemma-4-31b-it:free',
      label: 'Gemma 4 31B (free)',
      description: 'OpenRouter · google/gemma-4-31b-it:free · No cost',
      descriptionForModel: 'Google Gemma 4 31B Instruct via OpenRouter free tier',
    },
  ]
}
