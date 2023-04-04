import React from 'react'
import { 
    Header, 
    Image, 
    ItemDescription,
    Item 
} from 'semantic-ui-react'

function First() {
  return (
    <div style = {{ padding : 10 , backgroundColor : 'DimGray'}}>
        <Item>
            
            <Header>Fansite SAO</Header>
            <ItemDescription>Fan website dedicated to the Sword Art Online Anime</ItemDescription>
            <a target="_blank" href="https://virgomoon.github.io/phase-2-project-fansite-SAO">
                <Image centered src={"Fansite SAO 2.png"} size={"medium"} />
            </a>

        </Item>
    </div>
  )
}

export default First