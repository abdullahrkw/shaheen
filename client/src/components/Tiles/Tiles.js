import Scrollbars from 'react-custom-scrollbars';
import React from 'react';
import axios from 'axios'
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle
} from 'reactstrap';

import './Tiles.css'


class Tiles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tiles:[]
        }

        this.updateRoom = this.props.updateRoom;
    }

    componentDidMount() {
        axios.get('/tiles').then(res => {
            this.setState({tiles: res.data.tiles});
        })
    }

    render() {
        return (
            <Scrollbars class="tiles-scrollbar" style={{ 
                                                    height: this.props.visible?500:0, 
                                                    width:300,
                                                    transitionProperty: 'height',
                                                    transitionDuration: '2s', 
                                                    overflowX: 'hidden'}}
                renderTrackHorizontal={() => (
                    <div id="Reactsilder" style={{ display: 'none', marginBottom: '0px' }} />
                )}
            >
                Tile Designs
                {
                    this.state.tiles.map((element) =>
                        <div id="single-tile" onClick={this.updateRoom.bind(this, element.id)} key={element.id}>
                            <Card style={{ display: 'flex'}}>
                                <CardImg loading="lazy" src={element.url} />
                                <CardBody>
                                    <CardTitle><b>Tile</b>    </CardTitle>
                                    <CardSubtitle>Description </CardSubtitle>
                                </CardBody>
                            </Card>
                        </div>
                    )
                }
            </Scrollbars>
        );
    }
}

export default Tiles;
