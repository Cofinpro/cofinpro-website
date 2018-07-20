import React from 'react'

import LinkButton from '../../components/buttons/LinkButton'
import ExternalLinkButton from '../../components/buttons/ExternalLinkButton'

import {
  ImageWrapper,
  SOURCE_TYP_PLACEHOLDER,
} from '../../components/images/ImageWrapper'

class NewsMedienVerteiler extends React.Component {
  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
    return (
      <div>
        <div className="container padding-60-top margin-xs-20-top">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-6">
              <h1 className="h1">News&amp;Medien</h1>
              <p className="h4 bold-font d-none d-md-block">
                Genda excerum solecusam, venim atur sit illibus anditat harum
                aligendae ratur sus ducid et odigniscilis dolori di seceper
                roriber iaspidundaes volent repedit fuga. Nam esti conse landi
                quiamus incillam, atur aliberr oreperio.
              </p>
              <p className="d-block d-md-none">
                Genda excerum solecusam, venim atur sit illibus anditat harum
                aligendae ratur sus ducid et odigniscilis dolori di seceper
                roriber iaspidundaes volent repedit fuga. Nam esti conse landi
                quiamus incillam, atur aliberr oreperio.
              </p>
            </div>
          </div>
        </div>

        <div className="container margin-100-top margin-xs-80-top">
          <div className="row">
            <div className="col-12 col-md-6">
              <ImageWrapper
                sourceType={SOURCE_TYP_PLACEHOLDER}
                source={{
                  width: 1200,
                  height: 800,
                }}
              />
            </div>
            <div className="col-12 col-md-6">
              <h2 className="margin-20-bottom margin-xs-20-top">
                News&amp;Medien
              </h2>
              <p>
                Atatios culpa dolut a dolorep reculparumet alistibus mi, volo
                blaccum alibus ex et, commolu ptatiam endit, simus ab iumendenis
                et ommolorrorro que dolupta consedigeni nime exera sunt rest
                estenecti dolut que derspel ipiciminus restis diam nam est
                volest, te esequodi que voles de nim nos quam et ut offici ulla
                accum facessus eos sinciis coreperia con cus, tem quidelendit
                plit magnam, comnis dia sim nitae netur.
              </p>
              <LinkButton
                styleSpan="w-100 w-md-unset margin-10-top"
                text="MEHR"
                path="/news-medien/uebersicht"
              />
            </div>
          </div>
        </div>

        <div className="container margin-100-top margin-xs-80-top">
          <div className="row">
            <div className="col-12 col-md-6 order-2 order-md-1">
              <h2 className="margin-20-bottom margin-xs-20-top">Blog</h2>
              <p>
                Atatios culpa dolut a dolorep reculparumet alistibus mi, volo
                blaccum alibus ex et, commolu ptatiam endit, simus ab iumendenis
                et ommolorrorro que dolupta consedigeni nime exera sunt rest
                estenecti dolut que derspel ipiciminus restis diam nam est
                volest, te esequodi que voles de nim nos quam et ut offici ulla
                accum facessus eos sinciis coreperia con cus, tem quidelendit
                plit magnam, comnis dia sim nitae netur.
              </p>
              <ExternalLinkButton
                styleSpan="w-100 w-md-unset margin-10-top"
                text="MEHR"
                _target="_blank"
                _href="https://medium.com/cofinpro"
              />
            </div>
            <div className="col-12 col-md-6 order-1 order-md-2">
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
      </div>
    )
  }
}

export default NewsMedienVerteiler
