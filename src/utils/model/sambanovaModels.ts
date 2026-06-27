import type { ModelOption } from './modelOptions.js'

export function isSambaNovaProvider(): boolean {
  const baseUrl = process.env.OPENAI_BASE_URL ?? ''
  try {
    return new URL(baseUrl).hostname.includes('sambanova.ai')
  } catch {
    return false
  }
}

export function getSambaNovaModelOptions(): ModelOption[] {
  return [
    {
      value: 'openai/gpt-oss-120b',
      label: 'DeepSeek R1 120B (gpt-oss-120b)',
      description: 'SambaNova · Fast 120B reasoning model · Free tier',
      descriptionForModel: 'DeepSeek R1 0528 120B distill via SambaNova Cloud',
    },
    {
      value: 'Meta-Llama-3.3-70B-Instruct',
      label: 'Llama 3.3 70B',
      description: 'SambaNova · Llama 3.3 70B Instruct · Free tier',
    },
    {
      value: 'Meta-Llama-3.1-405B-Instruct',
      label: 'Llama 3.1 405B',
      description: 'SambaNova · Llama 3.1 405B Instruct · Free tier',
    },
    {
      value: 'Qwen3-32B',
      label: 'Qwen3 32B',
      description: 'SambaNova · Qwen3 32B · Free tier',
    },
  ]
}
