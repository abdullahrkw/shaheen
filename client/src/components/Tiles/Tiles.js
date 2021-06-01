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
    state = {
        tiles:[
            "/assets/tiles/1.png",
            "/assets/tiles/2.png",
            "/assets/tiles/3.png",
            "/assets/tiles/4.png",
            "/assets/tiles/5.png"
        ]
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
                    this.state.tiles.map((element, ind) =>
                        <div id="single-tile" key={ind}>
                            <Card style={{ display: 'flex'}} key={ind}>
                                <CardImg loading="lazy" src={element} />
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
