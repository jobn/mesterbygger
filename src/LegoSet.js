import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

const LegoSet = ({ name, set_url, set_img_url, set_num, year }) => (
  <Card>
    <Image src={set_img_url} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>{set_num}</Card.Meta>
      <Card.Description>{year}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href={set_url}>
        <Icon name='cloud' />
        Rebrickable
      </a>
    </Card.Content>
  </Card>
)

export default LegoSet
