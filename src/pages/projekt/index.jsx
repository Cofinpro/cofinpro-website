import React from 'react'

import RelevanteFokusthemen from '../../components/RelevanteFokusthemen'
import ReferenzAndDownload from '../../components/ReferenzAndDownload'
import ContentfulMarkdownText from '../../components/ContentfulMarkdownText'

import {
  ImageWrapper,
  SOURCE_TYP_PLACEHOLDER,
} from '../../components/images/ImageWrapper'

class Projekt extends React.Component {
  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
    return (
      <div>
        <div className="container padding-60-top padding-xs-20-top">
          <div className="row">
            <div className="col-12 col-md-6">
              <h1 className="h1">Projektseite</h1>
              <h2 className="margin-20-top d-none d-md-block">
                {'Unterthema (News&Medien) Blog, Projekt = Contentseite'}
              </h2>
              <p className="d-block d-md-none">
                {'Unterthema (News&Medien) Blog, Projekt = Contentseite'}
              </p>
              <h4 className="margin-40-top d-none d-md-block">
                Genda excerum solecusam, venim atur sit illibus anditat harum
                aligendae ratur sus ducid et odigniscilis dolori di seceper
                roriber iaspidundaes volent repedit fuga. Nam esti conse landi
                quiamus incillam, atur aliberr oreperio.
              </h4>
              <p className="d-block d-md-none">
                Genda excerum solecusam, venim atur sit illibus anditat harum
                aligendae ratur sus ducid et odigniscilis dolori di seceper
                roriber iaspidundaes volent repedit fuga. Nam esti conse landi
                quiamus incillam, atur aliberr oreperio.
              </p>
            </div>
            <div className="col-12 col-md-2" />
            <div className="col-12 col-md-4">
              <RelevanteFokusthemen />
            </div>
          </div>
        </div>

        <div className="container margin-120-top margin-xs-80-top">
          <div className="row">
            <div className="col-12">
              <ImageWrapper
                sourceType={SOURCE_TYP_PLACEHOLDER}
                source={{
                  width: 1200,
                  height: 800,
                }}
              />
            </div>
          </div>
        </div>

        <div className="container margin-120-top margin-xs-80-top">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2 className="h2">Ziele</h2>
              <ul className="blue-bullet">
                <li>
                  Genda excerum solecusam, venim atur sit illibus anditat harum
                  aligendae ratur sus ducid et odigniscilis dolori di seceper
                </li>
                <li>
                  Genda excerum solecusam, venim atur sit illibus anditat harum
                  aligendae ratur sus ducid et odigniscilis dolori di seceper
                </li>
              </ul>
            </div>
          </div>
          <div className="row margin-20-top">
            <div className="col-12 col-md-6" />
            <div className="col-12 col-md-6">
              <h2 className="h2">Aufgaben</h2>
              <ul className="blue-bullet">
                <li>
                  Genda excerum solecusam, venim atur sit illibus anditat harum
                  aligendae ratur sus ducid et odigniscilis dolori di seceper
                </li>
                <li>
                  Genda excerum solecusam, venim atur sit illibus anditat harum
                  aligendae ratur sus ducid et odigniscilis dolori di seceper
                </li>
                <li>
                  Genda excerum solecusam, venim atur sit illibus anditat harum
                  aligendae ratur sus ducid et odigniscilis dolori di seceper
                </li>
                <li>
                  Genda excerum solecusam, venim atur sit illibus anditat harum
                  aligendae ratur sus ducid et odigniscilis dolori di seceper
                </li>
              </ul>
            </div>
          </div>
          <div className="row margin-20-top">
            <div className="col-12 col-md-6">
              <h2 className="h2">Ergebnisse</h2>
              <ul className="blue-bullet">
                <li>Genda excerum solecusam, venim atur sit illibus</li>
                <li>Genda excerum solecusam, venim atur sit illibus</li>
                <li>Genda excerum solecusam, venim atur sit illibus</li>
                <li>Genda excerum solecusam, venim atur sit illibus</li>
                <li>Genda excerum solecusam, venim atur sit illibus</li>
                <li>Genda excerum solecusam, venim atur sit illibus</li>
              </ul>
            </div>
          </div>
          <div className="row margin-20-top">
            <div className="col-12 col-md-6" />
            <div className="col-12 col-md-6 margin-top-20">
              <h2 className="h2">Unser Beitrag</h2>
              <ul className="blue-bullet">
                <li>Genda excerum solecusam</li>
                <li>Genda excerum solecusam</li>
                <li>Genda excerum solecusam</li>
                <li>Genda excerum solecusam</li>
                <li>Genda excerum solecusam</li>
                <li>Genda excerum solecusam</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Projekt
