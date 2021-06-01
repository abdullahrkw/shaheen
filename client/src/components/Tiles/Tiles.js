import Scrollbars from 'react-custom-scrollbars';
import React from 'react';
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
            tiles:[
                {id: "1", path: "/assets/tiles/1.png"},
                {id: "2", path: "/assets/tiles/2.png"},
                {id: "3", path: "/assets/tiles/3.png"},
                {id: "4", path: "/assets/tiles/4.png"},
                {id: "5", path: "/assets/tiles/5.png"}
            ]
        }

        this.updateRoom = this.props.updateRoom;
    }

    render() {
        return (
            <Scrollbars id="tiles-scrollbar"
                renderTrackHorizontal={() => (
                    <div id="Reactsilder" style={{ display: 'none', marginBottom: '0px' }} />
                )}
            >
                Tile Designs
                {
                    this.state.tiles.map((element) =>
                        <div id="single-tile" onClick={this.updateRoom.bind(this, element.id)} key={element.id}>
                            <Card style={{ display: 'flex'}}>
                                <CardImg loading="lazy" src={element.path} />
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
