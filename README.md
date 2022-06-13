## Truecost backend

1. First, install the dependencies:

```bash
npm i
```

2. create `.env` file and add the environment variables -

```bash
PORT=
FLIGHT_KEY=
TRANSPORT_KEY=
COMMUTE_KEY=
```

3. Run development server

```bash
npm run dev
```

4. Make GET request to [http://localhost:8080/](http://localhost:8080/) to check if API is running.

---

- All calls are POST type
- If not using the dedicated frontend, please make sure the api keys sent in auth header are base64 encoded
- Authorization header can be added with just api key value(no prefix required)

### Improvements that can be done

- Request body validation
- Better CORS to prevent unauthorized request
- Tests can be written for more confidence in code
