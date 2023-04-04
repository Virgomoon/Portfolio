import React from 'react'
import { 
    Header, 
    Image, 
    ItemDescription,
    Item 
} from 'semantic-ui-react'

function Third() {
    return (
        <div style = {{ padding : 10 , backgroundColor : 'lightgray'}}>
            <Item>
                
                <Header>Pokemon Catcher</Header>
                <ItemDescription>Catch your favorite Pokemon</ItemDescription>
                <a target="_blank" href="https://virgomoon.github.io/phase-1-project/">
                    <Image centered src={"Pokemon Catcher 2.png"} size={"medium"} />
                </a>
    
            </Item>
        </div>
    )
}

export default Third