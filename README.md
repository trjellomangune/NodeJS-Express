# NodeJS Express API Activity

Hi! I'm **Jello Mangune** and this is the documentation for my Node.js Express Activity API. This API offers various functionalities from fetching users and organizations record, up to adding and updating their records.

## UserRoute

> Fetch all users record

**GET**
`/users`

**Response:**

Status: _200 OK_

```
[
    {
        "id": 1,
        "fullname": "jello mangune",
        "age": 16,
        "birthday": "2008-10-02T16:00:00.000Z",
        "organization": "BSIT"
    },
    {
        "id": 2,
        "fullname": "updated four castillano",
        "age": 16,
        "birthday": "2008-12-01T16:00:00.000Z",
        "organization": "BSCS"
    },
    {
        "id": 3,
        "fullname": "van campos",
        "age": 16,
        "birthday": "2008-12-02T16:00:00.000Z",
        "organization": "BSCS"
    }
]
```

Status: _500 Internal Server Error_

```
{"error": "Failed to fetch users from the database."}
```

<br />
<br />

> Fetch user record by id

**GET**
`/user/{id}`

**Response:**

Status: _200 OK_

```
[
    {
        "id": 1,
        "fullname": "jello mangune",
        "age": 16,
        "birthday": "2008-10-02T16:00:00.000Z",
        "organization": "BSIT"
    }
]
```

Status: _404 Not Found_

```
{"error": "User not found."}
```

Status: _500 Internal Server Error_

```
{"error": "Failed to fetch user from the database."}
```

<br />
<br />

> Add new user

**POST**
`/users`

**Request Body :**

```
{
    "first_name": "john",
    "last_name": "doe",
    "birthday" : "2008-12-02",
    "organization_id": 1
}
```

**Response:**

Status: _201 Created_

```
[
    {
        "id": 26,
        "first_name": "john",
        "last_name": "doe",
        "birthday": "2008-12-01T16:00:00.000Z",
        "organization_id": 1,
        "organization_name": "BSIT"
    }
]
```

Status: _400 Bad Request_

```
{"error": "Missing required fields in the request body."}
```

Status: _500 Internal Server Error_

```
{"error": "Failed to add user to the database."}
```

<br />
<br />

> Update user by id

**PUT**
`/user/{id}`

**Request Body :**

```
{
    "first_name": "update-john",
    "last_name": "doe",
    "birthday" : "2008-12-02",
    "organization_id": 2
}
```

**Response:**

Status: _200 OK_

```
[
    {
        "id": 26,
        "first_name": "update-john",
        "last_name": "doe",
        "birthday": "2008-12-01T16:00:00.000Z",
        "organization_id": 2,
        "organization_name": "BSCS"
    }
]
```

Status: _400 Bad Request_

```
{"error": "Missing required fields in the request body."}
```

Status: _500 Internal Server Error_

```
{"error": "Failed to update user from the database."}
```

<br />
<br />

## OrganizationRoute

> Fetch all organizations record

**GET**
`/organizations`

**Response:**

Status: _200 OK_

```
[
    {
        "id": 1,
        "name": "BSIT"
    },
    {
        "id": 2,
        "name": "BSCS"
    },
    {
        "id": 3,
        "name": "BMMA"
    }
]
```

Status: _500 Internal Server Error_

```
{"error": "Failed to fetch organizations from the database."}
```

<br />
<br />

> Fetch organization record by id

**GET**
`/organization/{id}`

**Response:**

Status: _200 OK_

```
[
    {
        "id": 1,
        "name": "BSIT"
    }
]
```

Status: _404 Not Found_

```
{"error": "Organization not found."}
```

Status: _500 Internal Server Error_

```
{"error": "Failed to fetch organization from the database."}
```

<br />
<br />

> Add new organization

**POST**
`/organizations`

**Request Body :**

```
{
    "name" : "BSN"
}
```

**Response:**

Status: _201 Created_

```
[
    {
        "id": 10,
        "name": "BSN"
    }
]
```

Status: _400 Bad Request_

```
{"error": "Missing required fields in the request body."}
```

Status: _500 Internal Server Error_

```
{"error": "Failed to add organization to the database."}
```

<br />
<br />

> Update organization by id

**PUT**
`/organization/{id}`

**Request Body :**

```
{
    "name" : "updated-BSN"
}
```

**Response:**

Status: _200 OK_

```
[
    {
        "id": 10,
        "name": "updated-BSN"
    }
]
```

Status: _400 Bad Request_

```
{"error": "Missing required fields in the request body."}
```

Status: _500 Internal Server Error_

```
{"error": "Failed to update organization from the database."}
```
