import { ModelProviderCard } from '@/types/llm';

// ref https://platform.lingyiwanwu.com/docs#%E6%A8%A1%E5%9E%8B
const ZeroOne: ModelProviderCard = {
  chatModels: [
    {
      description: '支持聊天、问答、对话、写作、翻译等功能。',
      displayName: '零一万物（34B）',
      id: 'yi-34b-chat-0205',
      tokens: 4096, // https://huggingface.co/01-ai/Yi-34B-Chat/blob/main/config.json
    },
    {
      description: '全新千亿参数模型，提供超强问答及文本生成能力。',
      displayName: '零一万物（大型）',
      enabled: true,
      id: 'yi-large',
      tokens: 16_384,
    },
    {
      description: '中型尺寸模型升级微调，能力均衡，性价比高。深度优化指令遵循能力。',
      displayName: '零一万物（中型）',
      enabled: true,
      id: 'yi-medium',
      tokens: 16_384,
    },
    {
      description: '复杂视觉任务模型，提供高性能图片理解、分析能力。',
      displayName: '零一万物（识图）',
      enabled: true,
      id: 'yi-vision',
      tokens: 4096,
    },
    {
      description: '增强了问答对话交互和深度内容创作能力。文档问答和构建知识库小能手。',
      displayName: '零一万物（200K）',
      enabled: true,
      id: 'yi-medium-200k',
      tokens: 200_000,
    },
    {
      description: '小而精悍，轻量极速模型。提供强化数学运算和代码编写能力。',
      displayName: '零一万物（急速）',
      enabled: true,
      id: 'yi-spark',
      tokens: 16_384,
    },
    {
      description: '基于Yi-Large超强模型的高阶服务，结合检索与生成技术提供精准答案，支持客⼾私有知识库（请联系客服申请）。',
      displayName: '零一万物（RAG）',
      enabled: true,
      id: 'yi-large-rag',
      tokens: 16_384,
    },
    {
      description: '超高性价比、卓越性能。根据性能和推理速度、成本，进行平衡性高精度调优。',
      displayName: '零一万物（Turbo）',
      enabled: true,
      id: 'yi-large-turbo',
      tokens: 16_384,
    },
    {
      description: '「兼容版本模型」文本推理能力增强。',
      displayName: '零一万物（Preview）',
      id: 'yi-large-preview',
      tokens: 16_384,
    },
    {
      description: '「兼容版本模型」实时信息获取，以及文本推理能力增强。',
      displayName: '零一万物（联网）',
      enabled: true,
      id: 'yi-large-rag-preview',
      tokens: 16_384,
    },

  ],
  id: 'zeroone',
};

export default ZeroOne;
