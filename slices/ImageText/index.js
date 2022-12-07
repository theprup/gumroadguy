import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import Image from 'next/image'
import { asDate } from '@prismicio/helpers'




const ImageText = ({ slice }) => (
<section className={slice.variation}>
  <div className='wf-section'>
    <div className= 'grid-halves'> 
      <div className='bg-yellow-dark'>
        <div className='column-padding centered'>
        <div className='newimage'>
          <Image src={slice.primary.imageright.url} alt={slice.primary.imageright.alt} width={500} height={500} />
          </div>
        </div>
      </div>
      <div className='bg-pink border-left'>
        <div className='column-padding'>
          <div className='tablet-centred'>
            <div className='content-grid'>
  
              <div className='heading'>
                <PrismicRichText field={slice.primary.heading} />
             </div>
             <div className='heading2'>
             <span > { slice.primary.heading2 ? 'Black Friday Sale' : '' }</span>
             </div>

              <div className = 'paragraph'>
                <PrismicRichText field={slice.primary.paragraph} />
                <span >{ slice.primary.backgroundcolor }</span>

                {slice.variation !== 'default' ? <span> {slice.primary.date} </span> :  null }
              </div>
            <div className="button">
            <div className="gbutton">{slice.primary.button }</div>
            </div>
          </div>
      </div>
    </div>
    </div>
  </div>
  </div>

  
    <style jsx>{`

        .wf-section {box-sizing: border-box;
          }
        .grid-halves {
           display: -ms-grid;
            display: grid;
            width: 100%;
            grid-auto-columns: 1fr;
            grid-column-gap: 0px;
            grid-row-gap: 0px;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
            border-bottom: 2px solid #000;
            border-top: 2px solid #000;
            border-right: 2px solid #000;
            border-left: 2px solid #000;
            }
          .border-left {
              border-left: 2px solid #000;
              }
          .bg-pink {
              background-color: #ff90e8;
              color: #000;
              }
          .table-centred {
            box-sizing: border-box;
            display: block;
          }
          
           .bg-yellow-dark {
              background-color: #ffc900;
              color: #000;
            }
            
            .column-padding {
              position: relative;
              display: flex;
              height: 100%;
              min-height: 22 rem;
              padding: 6.5vw;
              align-items: center;
              box-sizing: border-box;
              }
        
          .content-grid {
            display: grid;
            width: 100%;
            max-width: 48rem;
            margin-right: 0px;
            margin-left: 0px;
            justify-items: stretch;
            align-items: stretch;
            align-content: start;
            grid-auto-columns: 1fr;
            grid-column-gap: 0px;
            grid-row-gap: 0.5rem;
            grid-template-columns: 1fr;
            grid-template-rows: auto;
            }
          
           .heading {
            margin-top: 0px;
            margin-bottom: 0px;
            font-size: 2.5rem;
            line-height: 0;
            font-weight: 400;
            letter-spacing: -0.02em;
            font-family: 'Mabry pro', sans-serif;
          }
          .heading2 {
            margin-top: 10px;
            margin-bottom: 0px;
            font-size: 2rem;
            line-height: 0;
            font-weight: 400;
            letter-spacing: -0.02em;
            font-family: 'Mabry pro', sans-serif;
          }
          .paragraph {
            display: block;
            margin-block-start: 1em;
            margin-block-end: 1em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
            font-size: 1.5rem;
            line-height: 1.3;
            letter-spacing: -0.01em;
            font-family: 'Mabry pro', sans-serif;
            
          }     

          .column-padding.centered {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }      

          .newimage {
            padding: 1rem;
            
            background-position: center;
            background-repeat: no-repeat;

            mask-image: url(https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/61942b84ec3d406199f07d78_vegalia.png);
            mask-size: 40vmin;
            mask-repeat: no-repeat;
            mask-position: center;
        }

        .button {
          position: relative;
          z-index: 1;
          padding: 1.1rem 2rem 1.2rem;
          border-radius: 4px;
          background-color: #000;
          color: #fff;
          font-size: 1.5rem;
          text-align: center;
          text-decoration: none;
        }
        .gbutton {
          color: white;
          font-family: 'Mabry pro', sans-serif;
        }


        
    `}</style>

  </section>
)

export default ImageText