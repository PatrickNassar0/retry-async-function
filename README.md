# retryAsync

A simple TypeScript utility function to **retry asynchronous operations** with customizable retry count and delay.

## ✨ Features

- Retries any async function up to a specified number of times
- Customizable delay between retries
- Fully type-safe with support for any return type
- Useful for handling flaky API calls, network requests, or transient errors

---

## 📦 Installation

```
npm install retry-async-function
```

---

## 🛠️ Usage

```
type UserData = {
  name: string;
  age: number;
};

const fetchData: () => Promise<UserData> = async () => {
  const response = await fetch('https://api.example.com/data')
  return await response.json()
}

const result: UserData = await retryAsync(fetchData, 5, 1000)
```

## 🧠 API

```
retryAsync<T>(
  fn: () => Promise<T>,
  maxRetries?: number,   // default = 3
  delayMs?: number        // default = 500ms
): Promise<T>
```

---

## 📄 License
MIT © Patrick Nassar

---

### Have fun :)