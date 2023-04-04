import React from 'react'
import { 
    Header, 
    Image, 
    ItemDescription,
    Item 
} from 'semantic-ui-react'

function Second() {
    return (
        <div style = {{ padding : 10 , backgroundColor : 'gray'}}>
            <Item>
                
                <Header>Study Buddy</Header>
                <ItemDescription>Connect with Buddies and share notes</ItemDescription>
                <a target="_blank" href="https://enigmatic-retreat-51493.herokuapp.com">
                    <Image centered src={"Study Buddy 3.png"} size={"medium"} />
                </a>
    
            </Item>
        </div>
    )
}

export default Second