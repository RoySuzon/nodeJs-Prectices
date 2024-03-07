const express = require('express')
const app = express()
const port = 3600

app.get('/', (req, res) => {
    const { page, pageSize } = req.query;

    if (page == 2) {
        console.log('Ok')
        res.send({ page: "GOutom" })
    }
    else {
        res.send({
            "data": {
                "totalunread": "10",
                "resresultslt": [
                    {
                        "id": 1,
                        "user_id": 123,
                        "image": "https://example.com/image1.jpg",
                        "title": "Notification 1",
                        "description": "Description 1",
                        "read_status": "unread",
                        "created_at": "2024-03-01T12:00:00Z",
                        "updated_at": "2024-03-01T12:00:00Z",
                        "deleted_at": null
                    },
                    {
                        "id": 2,
                        "user_id": 456,
                        "image": null,
                        "title": "Notification 2",
                        "description": "Description 2",
                        "read_status": "read",
                        "created_at": "2024-03-02T12:00:00Z",
                        "updated_at": "2024-03-02T12:00:00Z",
                        "deleted_at": null
                    },
                    {
                        "id": 3,
                        "user_id": 789,
                        "image": "https://example.com/image3.jpg",
                        "title": "Notification 3",
                        "description": "Description 3",
                        "read_status": "unread",
                        "created_at": "2024-03-03T12:00:00Z",
                        "updated_at": "2024-03-03T12:00:00Z",
                        "deleted_at": null
                    },
                    {
                        "id": 1,
                        "user_id": 123,
                        "image": "https://example.com/image1.jpg",
                        "title": "Notification 1",
                        "description": "Description 1",
                        "read_status": "unread",
                        "created_at": "2024-03-01T12:00:00Z",
                        "updated_at": "2024-03-01T12:00:00Z",
                        "deleted_at": null
                    },
                    {
                        "id": 2,
                        "user_id": 456,
                        "image": null,
                        "title": "Notification 2",
                        "description": "Description 2",
                        "read_status": "read",
                        "created_at": "2024-03-02T12:00:00Z",
                        "updated_at": "2024-03-02T12:00:00Z",
                        "deleted_at": null
                    },
                    {
                        "id": 3,
                        "user_id": 789,
                        "image": "https://example.com/image3.jpg",
                        "title": "Notification 3",
                        "description": "Description 3",
                        "read_status": "unread",
                        "created_at": "2024-03-03T12:00:00Z",
                        "updated_at": "2024-03-03T12:00:00Z",
                        "deleted_at": null
                    },
                    {
                        "id": 1,
                        "user_id": 123,
                        "image": "https://example.com/image1.jpg",
                        "title": "Notification 1",
                        "description": "Description 1",
                        "read_status": "unread",
                        "created_at": "2024-03-01T12:00:00Z",
                        "updated_at": "2024-03-01T12:00:00Z",
                        "deleted_at": null
                    },
                    {
                        "id": 2,
                        "user_id": 456,
                        "image": null,
                        "title": "Notification 2",
                        "description": "Description 2",
                        "read_status": "read",
                        "created_at": "2024-03-02T12:00:00Z",
                        "updated_at": "2024-03-02T12:00:00Z",
                        "deleted_at": null
                    },
                    {
                        "id": 3,
                        "user_id": 789,
                        "image": "https://example.com/image3.jpg",
                        "title": "Notification 3",
                        "description": "Description 3",
                        "read_status": "unread",
                        "created_at": "2024-03-03T12:00:00Z",
                        "updated_at": "2024-03-03T12:00:00Z",
                        "deleted_at": null
                    },
                    {
                        "id": 1,
                        "user_id": 123,
                        "image": "https://example.com/image1.jpg",
                        "title": "Notification 1",
                        "description": "Description 1",
                        "read_status": "unread",
                        "created_at": "2024-03-01T12:00:00Z",
                        "updated_at": "2024-03-01T12:00:00Z",
                        "deleted_at": null
                    },
                    {
                        "id": 2,
                        "user_id": 456,
                        "image": null,
                        "title": "Notification 2",
                        "description": "Description 2",
                        "read_status": "read",
                        "created_at": "2024-03-02T12:00:00Z",
                        "updated_at": "2024-03-02T12:00:00Z",
                        "deleted_at": null
                    },
                    {
                        "id": 3,
                        "user_id": 789,
                        "image": "https://example.com/image3.jpg",
                        "title": "Notification 3",
                        "description": "Description 3",
                        "read_status": "unread",
                        "created_at": "2024-03-03T12:00:00Z",
                        "updated_at": "2024-03-03T12:00:00Z",
                        "deleted_at": null
                    }
                ]
            }

        })
    }


})
app.listen(port, () => console.log(`Example app listening on port http://127.0.0.1:${port}`))