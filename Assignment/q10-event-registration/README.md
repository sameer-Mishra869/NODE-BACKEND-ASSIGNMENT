# Q10 Event Registration API

An Express API that stores Tech Fest registrations in `registrations.json` and prevents duplicate registrations for the same email and event.

## Run the project

```bash
npm install
node index.js
```

The server runs at `http://localhost:5000`.

## Endpoints

### Register for an event

`POST /registrations`

Request body:

```json
{
  "participantName": "Priya",
  "email": "priya@gmail.com",
  "eventName": "Code Sprint"
}
```

A successful request returns `201 Created`. Reusing the same email for the same event returns `409 Conflict`. The same email can register for a different event.

### List registrations

`GET /registrations`

Returns all saved registrations and their count.

## Testing checklist

1. Create three registrations for different events.
2. Call `GET /registrations` and check the count.
3. Submit the same email and event again and verify `409`.
4. Submit the same email for another event and verify `201`.
5. Restart the server and verify the registrations remain in `registrations.json`.

## Screenshots

Add the Postman or Thunder Client screenshots to this directory and keep these names:

- `screenshots/post-registration-201.png`
- `screenshots/get-registrations.png`

![Successful POST /registrations response](screenshots/post-registration-201.png)

![GET /registrations response](screenshots/get-registrations.png)
