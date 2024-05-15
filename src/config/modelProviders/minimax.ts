import { ModelProviderCard } from '@/types/llm';

// ref https://www.minimaxi.com/document/guides/chat-model/pro/api
const Minimax: ModelProviderCard = {
  chatModels: [
    {
      description: '复杂场景，例如应用题计算、科学计算等场景',
      displayName: 'ABAB-6.5（复杂）',
      enabled: true,
      functionCall: true,
      id: 'abab6.5-chat',
      tokens: 8192,
    },
    {
      description: '通用场景',
      displayName: 'ABAB-6.5（通用）',
      enabled: true,
      functionCall: true,
      id: 'abab6.5s-chat',
      tokens: 245_760,
    },
    {
      description: '更复杂的格式化文本生成',
      displayName: 'ABAB-6（复杂）',
      enabled: true,
      functionCall: true,
      id: 'abab6-chat',
      tokens: 32_768,
    },
    {
      description: '生产力场景',
      displayName: 'ABAB-5.5（通用）',
      enabled: true,
      id: 'abab5.5-chat',
      tokens: 16_384,
    },
    {
      description: '人设对话场景',
      displayName: 'ABAB-5.5（对话）',
      enabled: true,
      id: 'abab5.5s-chat',
      tokens: 8192,
    },
  ],
  id: 'minimax',
};

export default Minimax;
