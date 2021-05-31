# Shaheen Client/Server Communication API

## Request/Response
### GET /tiles
-----------------------------------------------------
```json
{
    "tiles": [
        {"id": "1", "url": "/path/tiles/1/image.png"},
        {"id": "2", "url": "/path/tiles/2/image.png"},
    ]
}
```

### GET /rooms
----------------------------------------------------
```json
{
    "rooms": [
        {
            "id": "1",
            "url": "/path/rooms/1/image.png", 
            "maps": [
                {
                "regionId": "1",
                "regionCoords": [[10, 20], [50, 50], [30, 30], [40, 40]]
                },
                {
                "regionId": "2",
                "regionCoords": [[100, 200], [500, 500], [300, 300], [400, 400]]
                }
            ]
        },
        {
            "id": "2",
            "url": "/path/rooms/2/image.png", 
            "maps": [
                {
                "regionId": "1",
                "regionCoords": [[10, 20], [50, 50], [30, 30], [40, 40]]
                },
                {
                "regionId": "2",
                "regionCoords": [[100, 200], [500, 500], [300, 300], [400, 400]]
                }
            ]
        }
    ]
}
```

### POST /decor
-----------------------------------------------------
#### Request Body  [Content-Type: application/json]
```json
{
    "tileId": "1",
    "roomId": "2",
    "regionId": "2",
    "state": [
        {"regionId": "1", "tileId": "2"},
        {"regionId": "2", "tileId": "2"}
    ]
}
```

#### Response 
```json
{
    "url": "/path/to/new/image.png"
}

```

Note: Region mapping is as follows
```json
{
    "1" : "floor",
    "2" : "left wall",
    "3" : "right wall",
    "4" : "front wall"
}