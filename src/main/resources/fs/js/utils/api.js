import { chatBotClient } from './client';

const mockChatBotQueryString = "ESG (Environmental, Social, and Governance)는 기업의 환경, 사회, 지배구조 측면에서의 지속 가능한 경영을 의미합니다. 저는 OpenAI의 인공지능 모델인 GPT-3이므로 ESG 전문가는 아니지만, ESG에 대한 일반적인 지식과 이해를 가지고 있습니다. 한국 기업의 ESG 관련 질문에 대한 최선의 답변을 제공해드리겠습니다.\\n\\n이때 제시된 구체적인 질문이 무엇인지 명시해 주시면, 더 정확하고 효과적인 답변을 제공할 수 있습니다. ESG는 매우 다양한 요소로 구성되어 있으며, 회사마다 다른 우선순위와 도전 과제를 가지고 있기 때문입니다. 예를 들어, 기업이 환경 보호에 대한 노력을 강조하고 있다면, 기후변화 대응, 자원관리, 친환경 제품 개발 등과 관련된 ESG 이니셔티브에 대해 설명해 드릴 수 있습니다.\\n\\n그러나 보다 구체적인 질문이 있으시면, 기꺼이 답변해 드리겠습니다."

export const ChatBotService = {
  search: note => {
    return new Promise(resolve => {
      setTimeout(() => resolve(({ answer: mockChatBotQueryString })), 1500);
    })
    return chatBotClient.post("/ESG", { note })
      .then(({ product_description }) => ({ answer: product_description }))
  }
}
