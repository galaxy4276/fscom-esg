import pageHook from '../utils/pageHook';
import { ChatBotService } from '../utils/api';

const chatbotButton = document.querySelector('.chatbot-button');
const chatbotContainer = document.getElementById('chatbot__container');
const MAX_QUERY_LINE_CHARACTER = 57

chatbotButton?.addEventListener('click', e => {
  e.stopPropagation();
  e.preventDefault();
  const containerStyle = getComputedStyle(chatbotContainer);
  const { visibility } = containerStyle;
  const isHidden = visibility === 'hidden';
  if (isHidden) {
    chatbotContainer.classList.remove('invisible');
    chatbotContainer.classList.add('visible');
    // setFadeIn(chatbotContainer);
  } else {
    chatbotContainer.classList.remove('visible');
    chatbotContainer.classList.add('invisible');
    // removeFadeInUp(chatbotContainer);
    // removeAllAnimation(chatbotContainer);
  }
});

pageHook("/main", () => {
  const state = {
    chatbotOpener: false,
    queryFetching: false
  }

  const queryInput = document.getElementById("mainChatbotQuery")
  const mainChatBoxContainer = document.querySelector(".mainChatBoxContainer")
  const mainSearchContainer = document.querySelector(".mainSearchContainer")
  const querySearchButton = document.getElementById("querySearchButton")

  const chatBoxOpen = () => {
    mainChatBoxContainer.style.visibility = "visible"
    mainChatBoxContainer.style.height = "475px"
    queryInput.classList.add("chatBoxOpenQueryInput")
    querySearchButton.classList.add("chatBoxOpenSearchButton")
  }

  const splitQuery = (str) => {
    const result = [];
    for (let i = 0; i < str.length; i += MAX_QUERY_LINE_CHARACTER) {
      result.push(str.substring(i, i + MAX_QUERY_LINE_CHARACTER));
    }
    return result;
  }

  const createUserQuery = (query) => {
    const div = document.createElement("div")
    div.classList.add("queryBox")
    div.classList.add("userQuery")
    div.innerHTML = `
        <esg-text size="12" color="white" text="${query}"></esg-text>
    `
    return div
  }

  const createBotQuery = () => {
    const div = document.createElement("div")
    div.classList.add("queryBox")
    div.classList.add("botQuery")
    const text = document.createElement("esg-text")
    text.setAttribute("size", "12")
    text.setAttribute("color", "white")
    text.setAttribute("text", "...")
    div.append(text)
    return { queryBox: div, botText: text }
  }

  queryInput.addEventListener("keyup", async e => {
    if (state.queryFetching) return

    const entered = e.key === "Enter"
    const query = e.target.value
    if (!entered || query.trim() === "") return
    await chat(query)
  })

  const chat = async (query) => {
    if (!state.chatbotOpener) {
      chatBoxOpen()
      state.chatbotOpener = true
    }

    const userQueryBox = createUserQuery(query)
    mainChatBoxContainer.prepend(userQueryBox)
    queryInput.value = ""
    let tempBotText;

    try {
      state.queryFetching = true
      const { queryBox: botQueryBox, botText } = createBotQuery(answer)
      tempBotText = botText
      mainChatBoxContainer.prepend(botQueryBox)
      const { answer } = await ChatBotService.search(query)
      botText.setAttribute("text", answer)
    } catch (error) {
      console.error(error)
      tempBotText.setAttribute("text", "문제가 발생하였습니다. 다시시도해주세요")
    } finally {
      state.queryFetching = false
    }
  }

  const questionCards = Array.from(document.getElementsByClassName("esg-main-question-card"))
  questionCards.forEach(card => {
    const esgText = card.childNodes[3]
    const query = esgText.outerText
    card.addEventListener("click", () => chat(query))
  })

}, true)
