import React from 'react'
import { Card } from '@uifabric/react-cards'
import { Text, mergeStyleSets, Separator, ActionButton } from 'office-ui-fabric-react'
import { Article } from '~type/index'

type ArticleCardProps = Article

const classNames = mergeStyleSets({
  newsCard: {
    backgroundColor: '#fff'
  },
  titleImage: {
    backgroundPosition: 'center center',
    backgroundSize: 'cover'
  },
  buttonColor: {
    color: '#553580',
    selectors: {
      ':hover': {
        color: '#371761'
      }
    }
  }
})

const ArticleCard: React.FC<ArticleCardProps> = ({ titleImgUrl, author, date, title, description, to }) => {
  return (
    <Card
      tokens={{
        minWidth: '352px',
        width: '352px',
        minHeight: '527px',
        childrenMargin: 23
      }}
      className={classNames.newsCard}
    >
      <Card.Section
        fill
        verticalAlign='end'
        className={classNames.newsCard}
        styles={{
          root: {
            backgroundImage: `url(${titleImgUrl})`
          }
        }}
      >
        {/* tip: 填充高度 */}
        <div style={{ height: '240px' }}/>
      </Card.Section>
      <Card.Section
        styles={{
          root: {
            paddingTop: '1rem',
            color: '#666'
          }
        }}
        horizontal
      >
        <Text>{author}</Text>
        <Separator vertical/>
        <Text>{date}</Text>
      </Card.Section>
      <Card.Section>
        <Text
          styles={{
            root: {
              fontWeight: '500',
              lineHeight: '27px'
            }
          }}
          variant='large'
        >
          {title}
        </Text>
      </Card.Section>
      <Card.Section
        styles={{
          root: {
            color: '#666',
            fontWeight: '400',
            lineHeight: '22px'
          }
        }}
      >
        <Text>{description}</Text>
      </Card.Section>
      <Card.Section
        // tip: let Link at bottom
        verticalAlign='end'
        grow={1}
      >
        <ActionButton
          href={to}
          text='Learn More'
          menuIconProps={{ iconName: 'forward', color: '#553580' }}
          className={classNames.buttonColor}
          styles={{
            root: {
              paddingLeft: 0,
              marginLeft: 0
            },
            label: {
              paddingLeft: 0,
              marginLeft: 0
            },
            menuIcon: {
              color: '#553580',
              selectors: {
                ':hover': {
                  color: '#371761'
                }
              }
            }
          }}
        />
      </Card.Section>
    </Card>
  )
}

export default ArticleCard
