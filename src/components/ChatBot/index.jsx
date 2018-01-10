import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import { Launcher } from 'react-chat-window'

import './style.scss'

class ChatBot extends React.Component {
  constructor() {
    super()
    this.state = {
      messageList: [],
      newMessagesCount: 0,
      isOpen: false,
      client:
        typeof ApiAi !== 'undefined'
          ? new ApiAi.ApiAiClient({
              accessToken: 'fc4365c0c0cb4a8693382023a77ad9ab',
            })
          : null,
    }
  }
  componentDidMount() {
    if (this.state.messageList.length == 0) {
      this._sendMessage(
        'Hi, ich bin der Recruiting ChatBot der Cofinpro. Ich kenne mich mit den folgenden Themen aus: Deine persönliche bzw. professionelle Weiterentwicklung bei uns oder auch wie der Bewerbungsprozess so abläuft. Fragen zu den Auswahltagen und Telefoninterviews kann ich natürlich auch benatworten. Mit den Themen wie Beratung oder unseren Projekten bin ich auch vertraut.'
      )
    }
  }

  _onMessageWasSent(message) {
    console.log(message)
    if (message.author === 'me') {
      var context = this

      this.sendText(message.data.text)
        .then(function(response) {
          var result
          try {
            result = response.result.fulfillment.speech
          } catch (error) {
            result = ''
          }
          context.setResponseJSON(result)
        })
        .catch(function(err) {
          context.setResponseJSON(err)
        })
    }

    this.setState({
      messageList: [...this.state.messageList, message],
    })
  }

  sendText(text) {
    return this.state.client.textRequest(text)
  }

  setResponseJSON(response) {
    this._sendMessage(response)
  }

  _sendMessage(text) {
    if (text.length > 0) {
      const newMessagesCount = this.state.isOpen
        ? this.state.newMessagesCount
        : this.state.newMessagesCount + 1
      this.setState({
        newMessagesCount: newMessagesCount,
        messageList: [
          ...this.state.messageList,
          {
            author: 'them',
            type: 'text',
            data: {
              text,
            },
          },
        ],
      })
    }
  }

  _handleClick() {
    this.setState({
      isOpen: !this.state.isOpen,
      newMessagesCount: 0,
    })
  }

  render() {
    const {} = this.props
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <div>
        <Launcher
          agentProfile={{
            teamName: 'Cofinpro ChatBot #beta',
            imageUrl: pathPrefix + '/img/chat_icon.jpg',
          }}
          onMessageWasSent={this._onMessageWasSent.bind(this)}
          messageList={this.state.messageList}
          newMessagesCount={this.state.newMessagesCount}
          handleClick={this._handleClick.bind(this)}
          isOpen={this.state.isOpen}
        />
      </div>
    )
  }
}

export default ChatBot
