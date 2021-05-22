# Shaheen Client/Server Communication API

## Request/Response
### GET /tiles [Content-Type: application/json]
-----------------------------------------------------
```json
{
    "tiles": [
        {"id": 1, "url": "/path/tiles/1/image.png"},
        {"id": 2, "url": "/path/tiles/2/image.png"},
    ]
}
```

### GET /rooms [Content-Type: application/json]
----------------------------------------------------
```json
{
    "rooms": [
        {
            "id": 1,
            "url": "/path/rooms/1/image.png", 
            "maps": [
                {
                "region_id": 1,
                "region_coords": [[10, 20], [50, 50], [30, 30], [40, 40]]
                },
                {
                "region_id": 2,
                "region_coords": [[100, 200], [500, 500], [300, 300], [400, 400]]
                }
            ]
        },
        {
            "id": 2,
            "url": "/path/rooms/2/image.png", 
            "maps": [
                {
                "region_id": 1,
                "region_coords": [[10, 20], [50, 50], [30, 30], [40, 40]]
                },
                {
                "region_id": 2,
                "region_coords": [[100, 200], [500, 500], [300, 300], [400, 400]]
                }
            ]
        }
    ]
}
```

### GET /decor?tileid=1&&roomid=1&&regionid=1 [Content-Type: application/json]
-----------------------------------------------------
```json
{
    "url": "/path/to/new/image.png"
}

```
