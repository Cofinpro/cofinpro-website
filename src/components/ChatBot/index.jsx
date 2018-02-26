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
        'Hi, ich bin der Recruiting-Chatbot! Viele nette Cofinpros haben mich mit Wissen gefüttert, und seitdem ist es meine Lieblingsbeschäftigung, Deine Fragen zu beantworten. Über alles, was mit Deiner Karriere und Weiterentwicklung bei Cofinpro zu tun hat, weiß ich bestens Bescheid (auch wenn natürlich auch ich noch weiter dazulerne). Du willst mehr über unsere Beratung und den Bewerbungsprozess erfahren? Dann schieß einfach los.'
      )
    }
  }

  _onMessageWasSent(message) {
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
    const { locationUpdate } = this.props
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    var urlFragmentPers = pathPrefix != null && pathPrefix.length > 2 ? 1 : 0

    var mainUrl = pathPrefix != null && pathPrefix.length > 2 ? pathPrefix : '/'

    return (
      <div hidden={locationUpdate === mainUrl ? true : false}>
        <Launcher
          agentProfile={{
            teamName: 'Cofinpro ChatBot #beta',
            imageUrl: null,
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
