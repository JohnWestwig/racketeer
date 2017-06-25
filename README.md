API documentation:

POST /register/google
    Parameters: {
        token: string
    }
    Result: {}

GET /racks
    Parameters: {
        location [REQUIRED]: {
            lat [REQUIRED]: float,
            lon [REQUIRED]: float
        },
        radius [OPTIONAL] [DEFAULT 2]: int (meters),
        rackLimit [OPTIONAL] [DEFAULT 100]: int
    }
    Result: [{
        id: int,
        location: {
            lat: float
            lng: float
        }
    }]
    
GET /rack/{rackId}
    Parameters: {}
    Result: {
        location: {
            lat: float,
            lng: float
        }
    }
        