import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import './style.scss'

class ChatBot extends React.Component {
  componentDidMount() {
    var botui = new BotUI('hello-world')
    var client = new ApiAi.ApiAiClient({
      accessToken: 'fc4365c0c0cb4a8693382023a77ad9ab',
    })

    var ENTER_KEY_CODE = 13
    var queryInput, sendButton, resultDiv, accessTokenInput

    init()

    function sendText(text) {
      return client.textRequest(text)
    }

    function init() {
      queryInput = document.getElementById('q')
      sendButton = $('#chat-button-send')
      resultDiv = document.getElementById('result')

      queryInput.addEventListener('keydown', queryInputKeyDown)
      sendButton.click(function(e) {
        e.preventDefault()
        reactToSend()
      })

      botui.message.bot({
        // show first message
        delay: 200,
        content: 'Hi wie kann ich dir weiterhelfen?',
      })
    }

    function setAccessToken() {
      document.getElementById('placeholder').style.display = 'none'
      document.getElementById('main-wrapper').style.display = 'block'
      window.init(accessTokenInput.value)
    }

    function queryInputKeyDown(event) {
      if (event.which !== ENTER_KEY_CODE) {
        return
      }

      reactToSend()
    }

    function reactToSend() {
      var value = queryInput.value
      queryInput.value = ''

      botui.message.add({ human: true, content: value })

      sendText(value)
        .then(function(response) {
          var result
          try {
            result = response.result.fulfillment.speech
          } catch (error) {
            result = ''
          }
          setResponseJSON(result)
        })
        .catch(function(err) {
          setResponseJSON(err)
        })
    }

    function setResponseJSON(response) {
      var node = document.getElementById('jsonResponse')
      botui.message.add({
        content: JSON.stringify(response, null, 2),
      })
    }

    function sendRequest() {}

    $('#main-section').hide()

    $('#chatbot-open-button').click(function() {
      $('#main-section').show('slow')
      $('#chatbot-icon').hide('slow')
    })

    $('#button-close').click(function() {
      $('#main-section').hide('slow')
      $('#chatbot-icon').show('slow')
    })
  }

  render() {
    const {} = this.props
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <div>
        <div className="main-section" id="main-section">
          <div className="container-fluid h-100 padding-0">
            <div className="row border-chat container-top">
              <div className="col-md-12 col-sm-12 col-xs-12 first-section bg-info">
                <div className="row align-items-end padding-sm-top-bottom">
                  <div className="col-2 col-md-2 left-first-section">
                    <img
                      src={pathPrefix + '/img/chatbot2.png'}
                      className="img-fluid img-chat"
                      alt="Icon für Chat Bot"
                    />
                  </div>
                  <div className="col-8 col-md-8 left-first-section">
                    <p>Recruiting Bot #Beta</p>
                  </div>
                  <div className="col-2 col-md-2 right-first-section">
                    <button
                      id="button-close"
                      type="button"
                      className="close"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row border-chat container-midd">
              <div className="col-md-12 col-sm-12 col-xs-12 second-section">
                <div className="chat-section">
                  <div className="botui-app-container" id="hello-world">
                    <bot-ui />
                  </div>
                </div>
              </div>
            </div>
            <div className="row border-chat container-end">
              <div className="col-md-12 col-sm-12 col-xs-12 third-section bg-info">
                <div className="row text-bar align-items-center justify-content-start">
                  <div className="col-10">
                    <input className="form-control" id="q" type="text" />
                  </div>
                  <div className="col-2 no-padding-left">
                    <a href="#" id="chat-button-send" role="button">
                      <i
                        className="fa fa-chevron-circle-right align-middle"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="chatbot-icon">
          <button
            id="chatbot-open-button"
            type="button"
            className="btn btn-info btn-circle btn-xl"
          >
            <img
              src={pathPrefix + '/img/chatbot2.png'}
              className="img-fluid"
              alt="Icon für Chat Bot"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ChatBot
