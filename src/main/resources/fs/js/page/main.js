import pageHook from '../utils/pageHook';
import { ChatBotService } from '../utils/api';

const chatbotButton = document.querySelector('.chatbot-button');
const chatbotContainer = document.getElementById('chatbot__container');

console.log('hello');

chatbotButton.addEventListener('click', e => {
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

  const createUserQuery = (query) => {
    const div = document.createElement("div")
    div.classList.add("queryBox")
    div.classList.add("userQuery")
    div.innerHTML = `
        <esg-text size="12" color="white" text="${query}"></esg-text>
    `
    return div
  }

  const createBotQuery = (query) => {
    const div = document.createElement("div")
    div.classList.add("queryBox")
    div.classList.add("botQuery")
    div.innerHTML = `
<!--        <img th:src="@{/fs/}">-->
        <esg-text size="12" color="white" text="${query}"></esg-text>
    `
    return div
  }

  queryInput.addEventListener("keyup", async e => {
    if (state.queryFetching) return

    const entered = e.key === "Enter"
    const query = e.target.value
    if (!entered || query.trim() === "") return
    console.log({ query });

    if (!state.chatbotOpener) {
      chatBoxOpen()
      state.chatbotOpener = true
    }

    const userQueryBox = createUserQuery(query)
    mainChatBoxContainer.append(userQueryBox)
    queryInput.value = ""

    try {
      state.queryFetching = true
      const { answer } = await ChatBotService.search(query)
      createBotQuery(answer)
    } catch (error) {
      console.error(error)
      alert("에러가 발생하였습니다")
    } finally {
      state.queryFetching = false
    }
  })
}, true)
