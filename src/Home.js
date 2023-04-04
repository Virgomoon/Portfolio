import React from 'react'
import { 
    Header, 
    Image,
    Segment 
} from 'semantic-ui-react'
import First from './First'
import Second from './Second'
import Third from './Third'

function Home() {
  return (
    <>
    <Segment inverted padded="very" vertical>
        <Header as="h1">Joseph Guillory</Header>
        <Header as="h3">Software Developer</Header>
        <Image centered src={'Self-image.png'} size={'small'} />
    </Segment>
    <First />
    <Second />
    <Third />
    </>
  )
}

export default Home