import Scrollbars from 'react-custom-scrollbars';
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle
} from 'reactstrap';

import './Tiles.css'


function Tiles() {
    const tiles = [
        "/assets/tiles/1.png",
        "/assets/tiles/2.png",
        "/assets/tiles/3.png",
        "/assets/tiles/4.png",
        "/assets/tiles/5.png"
    ]
    return (
        <Scrollbars id="tiles-scrollbar"
            renderTrackHorizontal={() => (
                <div id="Reactsilder" style={{ display: 'none', marginBottom: '0px' }} />
            )}
        >
            Tile Designs
            {
                tiles.map((element) =>
                    <div id="single-tile">
                        <Card style={{ display: 'flex'}}>
                            <CardImg loading="lazy" src={element} />
                            <CardBody>
                                <CardSubtitle>Tile </CardSubtitle>
                                <CardTitle><b>Id: 123</b>    </CardTitle>
                            </CardBody>
                        </Card>
                    </div>
                )
            }
        </Scrollbars>
    );
}

export default Tiles;
